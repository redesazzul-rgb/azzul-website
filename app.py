from flask import Flask, request, jsonify, redirect
from flask_cors import CORS
import sqlite3
from datetime import datetime, timedelta
import os
import time

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)  # Permitir peticiones desde el frontend estático local

DB_PATH = 'reservas.db'

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

# Helper para calcular lista de días entre dos fechas (excluyendo el día de salida)
def get_dates_range(start_str, end_str):
    start = datetime.strptime(start_str, '%Y-%m-%d')
    end = datetime.strptime(end_str, '%Y-%m-%d')
    delta = end - start
    return [(start + timedelta(days=i)).strftime('%Y-%m-%d') for i in range(delta.days)]

# ==========================================
# RUTAS DE PÁGINAS ESTÁTICAS
# ==========================================

@app.route('/')
def index_page():
    return app.send_static_file('index.html')

@app.route('/admin')
def admin_page():
    return app.send_static_file('admin-rentas.html')

@app.route('/rentas')
def rentas_page():
    return app.send_static_file('rentas.html')

@app.route('/detalle')
def detalle_page():
    return app.send_static_file('detalle.html')

@app.route('/success')
def success_page():
    return app.send_static_file('success.html')

@app.route('/transferencia')
def transferencia_page():
    return app.send_static_file('transferencia.html')

# ==========================================
# RUTAS DE CLIENTE (FRONTEND API)
# ==========================================

# 1. Obtener todas las propiedades
@app.route('/api/properties', methods=['GET'])
def get_properties():
    conn = get_db_connection()
    cursor = conn.cursor()
    properties = cursor.execute('SELECT * FROM properties').fetchall()
    conn.close()
    
    result = []
    for prop in properties:
        result.append({
            'id': prop['id'],
            'title': prop['title'],
            'slug': prop['slug'],
            'description': prop['description'],
            'capacity': prop['capacity'],
            'price_per_night': prop['price_per_night'],
            'level': prop['level'],
            'amenities': prop['amenities'].split(',') if prop['amenities'] else [],
            'cover_image': prop['cover_image'],
            'gallery_images': prop['gallery_images'].split(',') if prop['gallery_images'] else [],
            'rules': prop['rules'].split('\n') if prop['rules'] else []
        })
    return jsonify(result)

# 2. Obtener una propiedad específica
@app.route('/api/properties/<int:prop_id>', methods=['GET'])
def get_property(prop_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    prop = cursor.execute('SELECT * FROM properties WHERE id = ?', (prop_id,)).fetchone()
    conn.close()
    
    if not prop:
        return jsonify({'error': 'Propiedad no encontrada'}), 404
        
    return jsonify({
        'id': prop['id'],
        'title': prop['title'],
        'slug': prop['slug'],
        'description': prop['description'],
        'capacity': prop['capacity'],
        'price_per_night': prop['price_per_night'],
        'level': prop['level'],
        'amenities': prop['amenities'].split(',') if prop['amenities'] else [],
        'cover_image': prop['cover_image'],
        'gallery_images': prop['gallery_images'].split(',') if prop['gallery_images'] else [],
        'rules': prop['rules'].split('\n') if prop['rules'] else []
    })

# 3. Obtener fechas deshabilitadas (reservadas o bloqueadas) para una propiedad
@app.route('/api/properties/<int:prop_id>/disabled-dates', methods=['GET'])
def get_disabled_dates(prop_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Obtener fechas bloqueadas manualmente
    blocked = cursor.execute('SELECT date FROM blocked_dates WHERE property_id = ?', (prop_id,)).fetchall()
    blocked_dates = [b['date'] for b in blocked]
    
    # Obtener fechas reservadas confirmadas o pendientes
    reservations = cursor.execute('''
        SELECT check_in, check_out FROM reservations 
        WHERE property_id = ? AND status != 'Rechazada'
    ''', (prop_id,)).fetchall()
    
    reserved_dates = []
    for res in reservations:
        # Añadir todos los días de la reservación (excluyendo el check-out)
        days = get_dates_range(res['check_in'], res['check_out'])
        reserved_dates.extend(days)
        
    conn.close()
    
    # Devolver set de fechas para evitar duplicados
    all_disabled = sorted(list(set(blocked_dates + reserved_dates)))
    return jsonify(all_disabled)

# 4. Crear una nueva reservación
@app.route('/api/reservations', methods=['POST'])
def create_reservation():
    data = request.json
    if not data:
        return jsonify({'error': 'Datos faltantes'}), 400
        
    prop_id = data.get('property_id')
    client_name = data.get('client_name')
    client_email = data.get('client_email')
    client_phone = data.get('client_phone')
    check_in = data.get('check_in')
    check_out = data.get('check_out')
    
    if not all([prop_id, client_name, client_email, client_phone, check_in, check_out]):
        return jsonify({'error': 'Todos los campos son obligatorios'}), 400
        
    # Validar fechas coherentes
    try:
        in_date = datetime.strptime(check_in, '%Y-%m-%d')
        out_date = datetime.strptime(check_out, '%Y-%m-%d')
        if in_date >= out_date:
            return jsonify({'error': 'La fecha de salida debe ser después de la fecha de entrada'}), 400
    except ValueError:
        return jsonify({'error': 'Formato de fecha inválido. Utilice YYYY-MM-DD'}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Validar existencia de propiedad y obtener precio
    prop = cursor.execute('SELECT price_per_night FROM properties WHERE id = ?', (prop_id,)).fetchone()
    if not prop:
        conn.close()
        return jsonify({'error': 'Propiedad no encontrada'}), 404
        
    price_per_night = prop['price_per_night']
    nights = (out_date - in_date).days
    total_price = price_per_night * nights

    # Verificar si hay conflicto de fechas (solapamiento) con reservaciones activas
    conflict_res = cursor.execute('''
        SELECT COUNT(*) FROM reservations 
        WHERE property_id = ? 
          AND status != 'Rechazada'
          AND check_in < ? 
          AND check_out > ?
    ''', (prop_id, check_out, check_in)).fetchone()[0]
    
    if conflict_res > 0:
        conn.close()
        return jsonify({'error': 'Conflicto de fechas: La propiedad ya está reservada para ese período.'}), 400
        
    # Verificar si hay conflicto con fechas bloqueadas
    requested_days = get_dates_range(check_in, check_out)
    placeholders = ','.join(['?'] * len(requested_days))
    conflict_block = cursor.execute(f'''
        SELECT COUNT(*) FROM blocked_dates 
        WHERE property_id = ? AND date IN ({placeholders})
    ''', [prop_id] + requested_days).fetchone()[0]
    
    if conflict_block > 0:
        conn.close()
        return jsonify({'error': 'Conflicto de fechas: La propiedad tiene días bloqueados por mantenimiento en ese período.'}), 400

    # Registrar la reservación
    cursor.execute('''
        INSERT INTO reservations (property_id, client_name, client_email, client_phone, check_in, check_out, total_price, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'Pendiente')
    ''', (prop_id, client_name, client_email, client_phone, check_in, check_out, total_price))
    
    conn.commit()
    conn.close()
    
    return jsonify({
        'message': 'Solicitud de reserva enviada correctamente',
        'total_price': total_price,
        'nights': nights
    }), 201


# ==========================================
# RUTAS DE ADMINISTRADOR (BACKEND PANEL)
# ==========================================

# 1. Login Administrativo Simple
@app.route('/api/admin/login', methods=['POST'])
def admin_login():
    data = request.json
    password = data.get('password')
    if password == 'admin123':
        return jsonify({'token': 'secure-admin-token-azzul-2026', 'message': 'Acceso concedido'})
    return jsonify({'error': 'Contraseña incorrecta'}), 401

# 2. Modificar datos de una propiedad (CRUD Update)
@app.route('/api/properties/<int:prop_id>', methods=['PUT'])
def update_property(prop_id):
    data = request.json
    title = data.get('title')
    description = data.get('description')
    capacity = data.get('capacity')
    price_per_night = data.get('price_per_night')
    amenities = data.get('amenities') # Lista de strings
    cover_image = data.get('cover_image')
    gallery_images = data.get('gallery_images') # Lista de strings
    rules = data.get('rules') # Lista de strings
    
    if not all([title, description, capacity, price_per_night, cover_image]):
        return jsonify({'error': 'Campos obligatorios faltantes'}), 400
        
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Serializar listas a strings
    amenities_str = ','.join(amenities) if isinstance(amenities, list) else amenities
    gallery_str = ','.join(gallery_images) if isinstance(gallery_images, list) else gallery_images
    rules_str = '\n'.join(rules) if isinstance(rules, list) else rules
    
    cursor.execute('''
        UPDATE properties
        SET title = ?, description = ?, capacity = ?, price_per_night = ?, amenities = ?, cover_image = ?, gallery_images = ?, rules = ?
        WHERE id = ?
    ''', (title, description, capacity, price_per_night, amenities_str, cover_image, gallery_str, rules_str, prop_id))
    
    conn.commit()
    conn.close()
    return jsonify({'message': 'Propiedad actualizada con éxito'})

# 3. Listar todas las reservaciones (Admin)
@app.route('/api/admin/reservations', methods=['GET'])
def admin_get_reservations():
    conn = get_db_connection()
    cursor = conn.cursor()
    reservations = cursor.execute('''
        SELECT r.*, p.title as property_title 
        FROM reservations r
        JOIN properties p ON r.property_id = p.id
        ORDER BY r.created_at DESC
    ''').fetchall()
    conn.close()
    
    result = []
    for r in reservations:
        result.append({
            'id': r['id'],
            'property_id': r['property_id'],
            'property_title': r['property_title'],
            'client_name': r['client_name'],
            'client_email': r['client_email'],
            'client_phone': r['client_phone'],
            'check_in': r['check_in'],
            'check_out': r['check_out'],
            'total_price': r['total_price'],
            'status': r['status'],
            'metodo_pago': r['metodo_pago'] if 'metodo_pago' in r.keys() else 'Tarjeta',
            'estado_pago': r['estado_pago'] if 'estado_pago' in r.keys() else 'Pagado',
            'created_at': r['created_at']
        })
    return jsonify(result)

# 4. Cambiar estado de una reservación (Aprobar/Confirmar o Rechazar y/o cambiar estado de pago)
@app.route('/api/admin/reservations/<int:res_id>/status', methods=['PUT'])
def admin_update_reservation_status(res_id):
    data = request.json
    new_status = data.get('status')
    new_estado_pago = data.get('estado_pago')
    
    conn = get_db_connection()
    cursor = conn.cursor()
    
    if new_status:
        if new_status not in ['Confirmada', 'Rechazada', 'Pendiente']:
            conn.close()
            return jsonify({'error': 'Estado inválido'}), 400
        cursor.execute('UPDATE reservations SET status = ? WHERE id = ?', (new_status, res_id))
        
    if new_estado_pago:
        if new_estado_pago not in ['Pendiente', 'Verificando', 'Pagado']:
            conn.close()
            return jsonify({'error': 'Estado de pago inválido'}), 400
        cursor.execute('UPDATE reservations SET estado_pago = ? WHERE id = ?', (new_estado_pago, res_id))
        
    conn.commit()
    conn.close()
    return jsonify({'message': 'Reservación actualizada con éxito'})

# 5. Bloquear fechas manualmente (Mantenimiento)
@app.route('/api/admin/properties/<int:prop_id>/block-dates', methods=['POST'])
def admin_block_dates(prop_id):
    data = request.json
    dates = data.get('dates') # Lista de fechas en formato YYYY-MM-DD
    reason = data.get('reason', 'Mantenimiento')
    
    if not dates or not isinstance(dates, list):
        return jsonify({'error': 'Lista de fechas requerida'}), 400
        
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Insertar fechas evitando duplicados
    for d in dates:
        exists = cursor.execute('''
            SELECT COUNT(*) FROM blocked_dates WHERE property_id = ? AND date = ?
        ''', (prop_id, d)).fetchone()[0]
        if exists == 0:
            cursor.execute('''
                INSERT INTO blocked_dates (property_id, date, reason)
                VALUES (?, ?, ?)
            ''', (prop_id, d, reason))
            
    conn.commit()
    conn.close()
    return jsonify({'message': 'Fechas bloqueadas con éxito'})

# 6. Desbloquear fechas manualmente
@app.route('/api/admin/properties/<int:prop_id>/unblock-dates', methods=['POST'])
def admin_unblock_dates(prop_id):
    data = request.json
    dates = data.get('dates') # Lista de fechas a desbloquear
    
    if not dates or not isinstance(dates, list):
        return jsonify({'error': 'Lista de fechas requerida'}), 400
        
    conn = get_db_connection()
    cursor = conn.cursor()
    
    placeholders = ','.join(['?'] * len(dates))
    cursor.execute(f'''
        DELETE FROM blocked_dates 
        WHERE property_id = ? AND date IN ({placeholders})
    ''', [prop_id] + dates)
    
    conn.commit()
    conn.close()
    return jsonify({'message': 'Fechas desbloqueadas con éxito'})

# ==========================================
# SIMULACIÓN DE PASARELA DE PAGOS (WOMPI) & LIMPIEZA
# ==========================================

# 7. Procesar checkout (Tarjeta, Transferencia, WhatsApp)
@app.route('/api/checkout', methods=['POST'])
def process_checkout():
    import urllib.parse
    
    # Obtener datos de form o json
    if request.is_json:
        data = request.json
    else:
        data = request.form
        
    property_id = data.get('property_id')
    client_name = data.get('client_name')
    client_email = data.get('client_email')
    client_phone = data.get('client_phone')
    check_in = data.get('check_in')
    check_out = data.get('check_out')
    metodo_pago = data.get('metodo_pago', 'Tarjeta') # Tarjeta, Transferencia, WhatsApp
    discount_code = data.get('discount_code', '').strip().upper()
    comments = data.get('comments', '')
    
    # Servicios Extra (Upsells)
    late_checkout = data.get('late_checkout')
    daily_cleaning = data.get('daily_cleaning')
    
    if not all([property_id, client_name, client_email, client_phone, check_in, check_out]):
        return jsonify({'error': 'Todos los campos son obligatorios.'}), 400
        
    # Validar formato de fechas
    try:
        check_in_date = datetime.strptime(check_in, '%Y-%m-%d')
        check_out_date = datetime.strptime(check_out, '%Y-%m-%d')
    except ValueError:
        return jsonify({'error': 'Formato de fecha inválido.'}), 400
        
    if check_in_date >= check_out_date:
        return jsonify({'error': 'La fecha de entrada debe ser anterior a la de salida.'}), 400
        
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Obtener precio y título de la propiedad
    prop = cursor.execute('SELECT * FROM properties WHERE id = ?', (property_id,)).fetchone()
    if not prop:
        conn.close()
        return jsonify({'error': 'Propiedad no encontrada.'}), 404
        
    # Validar solapamiento de fechas con reservas activas (Confirmadas o Pendientes)
    conflict = cursor.execute('''
        SELECT COUNT(*) as count FROM reservations 
        WHERE property_id = ? AND status != 'Rechazada'
        AND check_in < ? AND check_out > ?
    ''', (property_id, check_out, check_in)).fetchone()
    
    if conflict['count'] > 0:
        conn.close()
        return jsonify({'error': 'Conflicto de fechas: La propiedad ya está reservada para ese período.'}), 400
        
    # Validar solapamiento con bloqueos manuales
    blocked_conflict = cursor.execute('''
        SELECT COUNT(*) as count FROM blocked_dates
        WHERE property_id = ? AND date >= ? AND date < ?
    ''', (property_id, check_in, check_out)).fetchone()
    
    if blocked_conflict['count'] > 0:
        conn.close()
        return jsonify({'error': 'Las fechas seleccionadas incluyen días bloqueados para mantenimiento.'}), 400
        
    # Calcular noches
    nights = (check_out_date - check_in_date).days
    price_per_night = prop['price_per_night']
    base_price = nights * price_per_night
    
    # Aplicar descuento si aplica
    discount_percent = 0
    if discount_code == 'AZZUL10':
        discount_percent = 10
    elif discount_code == 'SANBLAS20':
        discount_percent = 20
        
    discount_amount = 0
    if discount_percent > 0:
        discount_amount = base_price * (discount_percent / 100)
        
    # Calcular adicionales
    upsells_total = 0
    is_late_checkout = late_checkout in [True, 'true', 'on', '1', 1]
    is_daily_cleaning = daily_cleaning in [True, 'true', 'on', '1', 1]
    
    if is_late_checkout:
        upsells_total += 20
    if is_daily_cleaning:
        upsells_total += 15 * nights
        
    total_price = base_price - discount_amount + upsells_total
    
    # Definir estados iniciales dependiendo del método de pago
    if metodo_pago == 'Tarjeta':
        status = 'Confirmada'
        estado_pago = 'Pagado'
        delay = 2.0
    elif metodo_pago == 'Transferencia':
        status = 'Confirmada' # Bloquea fechas
        estado_pago = 'Verificando'
        delay = 1.0
    else: # WhatsApp
        status = 'Pendiente'
        estado_pago = 'Pendiente'
        delay = 0.5
        
    # Simular retardo
    if delay > 0:
        time.sleep(delay)
        
    # Guardar en base de datos
    cursor.execute('''
        INSERT INTO reservations (property_id, client_name, client_email, client_phone, check_in, check_out, total_price, status, metodo_pago, estado_pago)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (property_id, client_name, client_email, client_phone, check_in, check_out, total_price, status, metodo_pago, estado_pago))
    
    reservation_id = cursor.lastrowid
    conn.commit()
    conn.close()
    
    # URL de redirección
    if metodo_pago == 'Tarjeta':
        redirect_url = f'/success?id={reservation_id}&total={total_price}&nights={nights}&client={urllib.parse.quote(client_name)}&prop={urllib.parse.quote(prop["title"])}'
    elif metodo_pago == 'Transferencia':
        redirect_url = f'/transferencia.html?id={reservation_id}&total={total_price}&nights={nights}&client={urllib.parse.quote(client_name)}&prop={urllib.parse.quote(prop["title"])}'
    else: # WhatsApp
        whatsapp_message = f"Hola AZZUL, quisiera confirmar mi reserva:\n" \
                           f"- Casa: {prop['title']}\n" \
                           f"- Fechas: {check_in} al {check_out} ({nights} noches)\n" \
                           f"- Nombre: {client_name}\n" \
                           f"- Pago: WhatsApp\n" \
                           f"- Total: ${total_price:.2f} USD\n" \
                           f"ID Reserva: #{reservation_id}"
        encoded_message = urllib.parse.quote(whatsapp_message)
        redirect_url = f"https://wa.me/50375703500?text={encoded_message}"
        
    if request.is_json:
        return jsonify({
            'success': True,
            'redirect_url': redirect_url
        })
    else:
        return redirect(redirect_url)

# Legacy alias para compatibilidad con llamadas anteriores
@app.route('/api/wompi-checkout', methods=['POST'])
def wompi_checkout_legacy():
    return process_checkout()

# 8. Obtener operaciones de limpieza del día (check-outs)
@app.route('/api/admin/cleaning-operations', methods=['GET'])
def admin_cleaning_operations():
    conn = get_db_connection()
    cursor = conn.cursor()
    today = datetime.now().strftime('%Y-%m-%d')
    
    # Obtener salidas para HOY
    cleaning = cursor.execute('''
        SELECT r.*, p.title as property_title 
        FROM reservations r
        JOIN properties p ON r.property_id = p.id
        WHERE r.check_out = ? AND r.status = 'Confirmada'
    ''', (today,)).fetchall()
    
    result = []
    for row in cleaning:
        result.append({
            'id': row['id'],
            'property_title': row['property_title'],
            'client_name': row['client_name'],
            'check_out': row['check_out'],
            'status': 'Pendiente de Limpieza'
        })
        
    # Si la lista de salidas para HOY está vacía en pruebas, retornar todas las salidas confirmadas para demostración
    if not result:
        all_salidas = cursor.execute('''
            SELECT r.*, p.title as property_title 
            FROM reservations r
            JOIN properties p ON r.property_id = p.id
            WHERE r.status = 'Confirmada'
            ORDER BY r.check_out DESC
        ''').fetchall()
        for row in all_salidas:
            result.append({
                'id': row['id'],
                'property_title': row['property_title'],
                'client_name': row['client_name'],
                'check_out': row['check_out'],
                'status': 'Pendiente de Limpieza'
            })
            
    conn.close()
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=3000)
