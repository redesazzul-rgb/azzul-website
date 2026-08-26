import sqlite3
import os

DB_PATH = 'reservas.db'

def init_db():
    if os.path.exists(DB_PATH):
        print(f"La base de datos '{DB_PATH}' ya existe. Recreándola...")
        os.remove(DB_PATH)

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # 1. Crear tabla de propiedades
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS properties (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            slug TEXT UNIQUE NOT NULL,
            description TEXT NOT NULL,
            capacity INTEGER NOT NULL,
            price_per_night REAL NOT NULL,
            level TEXT NOT NULL,
            amenities TEXT NOT NULL, -- Comma-separated list
            cover_image TEXT NOT NULL,
            gallery_images TEXT NOT NULL, -- Comma-separated list
            rules TEXT NOT NULL -- Line-separated rules
        )
    ''')

    # 2. Crear tabla de reservaciones
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS reservations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            property_id INTEGER NOT NULL,
            client_name TEXT NOT NULL,
            client_email TEXT NOT NULL,
            client_phone TEXT NOT NULL,
            check_in TEXT NOT NULL, -- YYYY-MM-DD
            check_out TEXT NOT NULL, -- YYYY-MM-DD
            total_price REAL NOT NULL,
            status TEXT NOT NULL DEFAULT 'Pendiente', -- Pendiente, Confirmada, Rechazada
            metodo_pago TEXT NOT NULL DEFAULT 'Tarjeta', -- Tarjeta, Transferencia, WhatsApp
            estado_pago TEXT NOT NULL DEFAULT 'Pendiente', -- Pendiente, Verificando, Pagado
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(property_id) REFERENCES properties(id)
        )
    ''')

    # 3. Crear tabla de fechas bloqueadas
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS blocked_dates (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            property_id INTEGER NOT NULL,
            date TEXT NOT NULL, -- YYYY-MM-DD
            reason TEXT NOT NULL, -- Mantenimiento, Reserva, etc.
            FOREIGN KEY(property_id) REFERENCES properties(id)
        )
    ''')

    # 4. Cargar propiedades iniciales
    properties_data = [
        (
            "Villa Aqua",
            "villa-aqua",
            "Exclusiva casa de primer nivel (Basement) que redefine el confort. Cuenta con acceso directo a una piscina privada rodeada de un jardín tropical, amplios espacios de descanso y un diseño termoacústico avanzado que garantiza frescura y tranquilidad absoluta.",
            6,
            200.0,
            "1st Level (Basement)",
            "Piscina Privada,Wi-Fi de Alta Velocidad,Aire Acondicionado,Parqueo Privado,Cocina Equipada,Barbacoa,TV por Cable,Seguridad 24/7",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80,https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80,https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
            "Hora de entrada (Check-in): 3:00 PM\nHora de salida (Check-out): 11:00 AM\nNo se permite fumar dentro de la villa\nNo se permiten fiestas o eventos ruidosos después de las 10:00 PM\nCapacidad máxima de 6 huéspedes"
        ),
        (
            "Villa Coral",
            "villa-coral",
            "Disfruta del lujo moderno en nuestra Villa Coral de primer nivel. Perfecta para familias o grupos que buscan relajación con piscina privada, acabados de alta gama y la tecnología constructiva AZZUL ICF que mantiene una climatización interior ideal.",
            6,
            200.0,
            "1st Level (Basement)",
            "Piscina Privada,Wi-Fi de Alta Velocidad,Aire Acondicionado,Parqueo Privado,Cocina Equipada,Comedor Exterior,Barbacoa,TV Smart",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80,https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80,https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
            "Hora de entrada (Check-in): 3:00 PM\nHora de salida (Check-out): 11:00 AM\nNo se permite fumar dentro de la villa\nSe permiten mascotas pequeñas bajo aviso previo\nCapacidad máxima de 6 huéspedes"
        ),
        (
            "Terraza Brisa",
            "terraza-brisa",
            "Elegante residencia de segundo nivel que destaca por su espectacular terraza privada. Perfecta para contemplar el atardecer, disfrutar de la brisa marina y relajarse en un ambiente amplio y con total privacidad.",
            4,
            150.0,
            "2nd Level",
            "Terraza Panorámica,Wi-Fi de Alta Velocidad,Aire Acondicionado,Parqueo Privado,Cocina Equipada,Hamaca,Smart TV",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80,https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80,https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
            "Hora de entrada (Check-in): 3:00 PM\nHora de salida (Check-out): 11:00 AM\nNo se permite fumar dentro de la casa\nNo se permiten mascotas\nCapacidad máxima de 4 huéspedes"
        ),
        (
            "Terraza Cielo",
            "terraza-cielo",
            "Villa de segundo nivel con una gran terraza abierta al cielo de San Blas. Combina interiores modernos con techos altos y aislamiento térmico acústico avanzado de AZZUL para asegurar un descanso ininterrumpido y fresco.",
            4,
            150.0,
            "2nd Level",
            "Terraza de Lujo,Wi-Fi de Alta Velocidad,Aire Acondicionado,Parqueo Privado,Cocina Completa,Área de Estar Exterior,Smart TV",
            "https://images.unsplash.com/photo-1502672011247-a6fd0f6e5a7a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502672011247-a6fd0f6e5a7a?auto=format&fit=crop&w=800&q=80,https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80,https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
            "Hora de entrada (Check-in): 3:00 PM\nHora de salida (Check-out): 11:00 AM\nNo se permite fumar dentro de la casa\nNo se permiten fiestas o eventos\nCapacidad máxima de 4 huéspedes"
        )
    ]

    cursor.executemany('''
        INSERT INTO properties (title, slug, description, capacity, price_per_night, level, amenities, cover_image, gallery_images, rules)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', properties_data)

    conn.commit()
    conn.close()
    print("Base de datos reservas.db inicializada con éxito con las 4 propiedades.")

if __name__ == "__main__":
    init_db()
