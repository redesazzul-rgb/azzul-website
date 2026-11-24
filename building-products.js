/* ==========================================================================
   AZZUL BUILDING PRODUCTS — DATA ENGINE, CATALOG & TECHNICAL SHEET INSPECTOR
   Bilingual (ES / EN) • 25 Standardized Products (7 Silicones + 18 Cementitious/Pastes)
   ========================================================================== */

const AZZUL_BP_FAMILIES = {
  silicones: {
    id: 'silicones',
    order: 0,
    code: 'SIL-PRO',
    colorPrimary: '#0284c7',
    colorSecondary: '#0f172a',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0f172a 100%)',
    packagingType: 'cartridge',
    es: {
      badge: 'LÍNEA ELASTOMÉRICA PROFESIONAL',
      name: 'Línea de Selladores de Silicona PRO',
      subtitle: 'Cartuchos 300 mL / Salchichas 600 mL • 7 Formulaciones Especializadas',
      description: 'Selladores de silicona de grado arquitectónico e industrial formulados para acristalamiento, fachadas, baños, carpintería metálica, piedra natural y protección pasiva cortafuego.',
      packagingLabel: 'Cartucho 300 mL / Salchicha 600 mL'
    },
    en: {
      badge: 'PROFESSIONAL ELASTOMERIC LINE',
      name: 'PRO Silicone Sealants Line',
      subtitle: '300 mL Cartridges / 600 mL Sausages • 7 Specialized Formulations',
      description: 'Architectural and industrial-grade silicone sealants formulated for glazing, facades, sanitary areas, window frames, natural stone, and passive firestop protection.',
      packagingLabel: '300 mL Cartridge / 600 mL Sausage'
    }
  },
  fam1: {
    id: 'fam1',
    order: 1,
    code: 'FAMILIA 01',
    colorPrimary: '#134e4a',
    colorSecondary: '#0f766e',
    gradient: 'linear-gradient(135deg, #134e4a 0%, #064e3b 100%)',
    packagingType: 'bucket',
    es: {
      badge: 'FAMILIA 1 • CUBETAS PLÁSTICAS (PASTA)',
      name: 'Preparación y Masillas',
      subtitle: 'Codificación Cromática: Verde Esmeralda • Empaque en Cubeta Lista para Usar',
      description: 'Masillas acrílicas y compuestos multiuso en pasta listos para usar para alisado fino de muros interiores, fachadas exteriores expuestas al clima y encintado profesional de paneles de yeso (drywall).',
      packagingLabel: 'Cubeta Plástica (Pasta Lista para Usar)'
    },
    en: {
      badge: 'FAMILY 1 • PLASTIC BUCKETS (PASTE)',
      name: 'Surface Prep & Putties',
      subtitle: 'Color Coding: Emerald Green • Ready-to-Use Bucket Packaging',
      description: 'Ready-to-use acrylic putties and multi-purpose joint compounds for fine skimming of interior walls, weather-exposed exterior facades, and professional drywall taping.',
      packagingLabel: 'Plastic Bucket (Ready-to-Use Paste)'
    }
  },
  fam2: {
    id: 'fam2',
    order: 2,
    code: 'FAMILIA 02',
    colorPrimary: '#115e59',
    colorSecondary: '#0f4c5c',
    gradient: 'linear-gradient(135deg, #0f4c5c 0%, #115e59 100%)',
    packagingType: 'bucket',
    es: {
      badge: 'FAMILIA 2 • CUBETAS PLÁSTICAS (LÍQUIDOS Y MEMBRANAS)',
      name: 'Imprimantes e Impermeabilizantes',
      subtitle: 'Codificación Cromática: Azul Petróleo • Consolidación de Sustratos y Barrera Hidrófuga',
      description: 'Sistemas líquidos y membranas elastoméricas/cementosas para sellado de porosidad, puentes de adherencia estructural e impermeabilización integral de techos, losas, cisternas y muros subterráneos.',
      packagingLabel: 'Cubeta Plástica 20 kg'
    },
    en: {
      badge: 'FAMILY 2 • PLASTIC BUCKETS (LIQUIDS & MEMBRANES)',
      name: 'Primers & Waterproofing',
      subtitle: 'Color Coding: Petrol Teal • Substrate Consolidation & Water Barrier',
      description: 'Liquid systems and elastomeric/cementitious membranes for porosity sealing, structural bonding bridges, and complete waterproofing of roofs, slabs, cisterns, and retaining walls.',
      packagingLabel: '20 kg Plastic Bucket'
    }
  },
  fam3: {
    id: 'fam3',
    order: 3,
    code: 'FAMILIA 03',
    colorPrimary: '#7f1d1d',
    colorSecondary: '#991b1b',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)',
    packagingType: 'sack',
    es: {
      badge: 'FAMILIA 3 • SACOS KRAFT 20 KG (POLVOS TÉCNICOS)',
      name: 'Morteros y Alta Resistencia',
      subtitle: 'Codificación Cromática: Rojo Óxido Estructural • Ingeniería de Reparación y Nivelación',
      description: 'Morteros cementicios modificados en polvo para anclaje de maquinaria sin contracción (grout), reparación estructural tixotrópica, autonivelación de pisos y emboquillado cerámico antihongos.',
      packagingLabel: 'Saco Kraft Multicapa 20 kg'
    },
    en: {
      badge: 'FAMILY 3 • 20 KG KRAFT SACKS (TECHNICAL POWDERS)',
      name: 'Mortars & High Strength',
      subtitle: 'Color Coding: Structural Oxide Red • Repair & Leveling Engineering',
      description: 'Polymer-modified cementitious powder mortars for non-shrink machinery grouting, thixotropic structural repair, floor self-leveling, and anti-fungal tile grouting.',
      packagingLabel: '20 kg Multi-Layer Kraft Sack'
    }
  },
  fam4: {
    id: 'fam4',
    order: 4,
    code: 'FAMILIA 04',
    colorPrimary: '#0d9488',
    colorSecondary: '#1e3a8a',
    gradient: 'linear-gradient(135deg, #1d7a74 0%, #0284c7 50%, #1e3a8a 100%)',
    packagingType: 'sack',
    es: {
      badge: 'FAMILIA 4 • SACOS KRAFT 20 KG (NORMA EUROPEA EN 12004)',
      name: 'Adhesivos Cerámicos',
      subtitle: 'Gradiente Cromático Corporativo según Norma EN 12004 (C1 a C2TE S1)',
      description: 'Gama progresiva de adhesivos cementosos modificados con polímeros redispersables para cerámica, gres porcelánico, piedra natural, piscinas y formatos gigantes con deformabilidad S1.',
      packagingLabel: 'Saco Kraft Multicapa 20 kg'
    },
    en: {
      badge: 'FAMILY 4 • 20 KG KRAFT SACKS (EUROPEAN STANDARD EN 12004)',
      name: 'Ceramic Tile Adhesives',
      subtitle: 'Corporate Color Gradient by EN 12004 Performance Class (C1 to C2TE S1)',
      description: 'Progressive range of polymer-modified cementitious tile adhesives for ceramic, porcelain stoneware, natural stone, swimming pools, and large-format slabs with S1 deformability.',
      packagingLabel: '20 kg Multi-Layer Kraft Sack'
    }
  },
  fam5: {
    id: 'fam5',
    order: 5,
    code: 'FAMILIA 05',
    colorPrimary: '#5b1316',
    colorSecondary: '#7f1d1d',
    gradient: 'linear-gradient(135deg, #5b1316 0%, #3b0a0c 100%)',
    packagingType: 'bucket',
    es: {
      badge: 'FAMILIA 5 • CUBETA PLÁSTICA 20 KG (PASTA ACRÍLICA)',
      name: 'Acabados Decorativos',
      subtitle: 'Codificación Cromática: Terracota Borgoña • Protección y Textura Arquitectónica',
      description: 'Recubrimiento texturizado acrílico base agua formulado para proteger y embellecer fachadas exteriores y muros interiores con máxima resistencia a los rayos UV y lluvia tropical.',
      packagingLabel: 'Cubeta Plástica 20 kg'
    },
    en: {
      badge: 'FAMILY 5 • 20 KG PLASTIC BUCKET (ACRYLIC PASTE)',
      name: 'Decorative Finishes',
      subtitle: 'Color Coding: Terracotta Burgundy • Architectural Texture & Protection',
      description: 'Water-based textured acrylic coating formulated to protect and beautify exterior facades and interior walls with maximum resistance to UV rays and tropical rain.',
      packagingLabel: '20 kg Plastic Bucket'
    }
  }
};

const AZZUL_BUILDING_PRODUCTS = [
  // =========================================================================
  // LÍNEA DE SELLADORES DE SILICONA (7 PRODUCTOS)
  // =========================================================================
  {
    id: 'glassfix-pro',
    code: 'GlassFIX PRO',
    family: 'silicones',
    packagingType: 'cartridge',
    weightOrVolume: '300 mL / 600 mL',
    normOrClass: 'ISO 11600 G 25 LM',
    accentColor: '#38bdf8',
    bandGradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/m-s6.png',
    labelImage: 'assets/BUILDING PRODUCTS/m-s6.png',
    es: {
      name: 'GlassFIX PRO',
      categoryTitle: 'Sellador de Silicona • Vidrio y Aluminio',
      tagline: 'Adherencia Cristalina Superior • 100% Silicona • Resistente a Rayos UV',
      packagingDetail: 'Cartucho rígido de 300 mL y Salchicha de aluminio de 600 mL',
      tempRange: '+5°C a +40°C',
      shelfLife: '12 meses en envase original cerrado',
      yieldSummary: 'Aprox. 12 m lineales por cartucho de 300 mL (cordón de 5x5 mm)',
      description: 'Sellador elastomérico monocomponente 100% silicona diseñado específicamente para acristalamiento profesional, perfiles de aluminio anodizado o lacado, vitrinas comerciales y muros cortina ligeros. No amarillea ni se contrae frente a la radiación solar intensa.',
      uses: [
        'Sellado perimetral e intermedio de vidrio monolítico y laminado',
        'Carpintería de aluminio, ventanería comercial y muros cortina',
        'Vitrinas, tragaluces, domos y divisiones de oficina en cristal',
        'Uniones estancas entre vidrio, metal, cerámica vitrificada y PVC'
      ],
      steps: [
        { title: '1. Preparación del Sustrato', text: 'Limpie las superficies de vidrio y aluminio con alcohol isopropílico libre de grasa, polvo o humedad. Coloque cinta de enmascarar en los bordes para un perfil limpio.' },
        { title: '2. Acondicionamiento del Envase', text: 'Corte la boquilla en ángulo de 45° al ancho de junta requerido (mínimo 4 mm) e inserte el cartucho de 300 mL o salchicha de 600 mL en la pistola aplicadora.' },
        { title: '3. Aplicación Continua', text: 'Aplique un cordón firme y continuo empujando el sellador hacia el fondo de la junta para evitar burbujas de aire atrapadas.' },
        { title: '4. Alisado y Curado', text: 'Alise con espátula húmeda dentro de los primeros 5–8 minutos y retire la cinta. Formación de piel en 12 min; curado de 3 mm cada 24 horas.' }
      ]
    },
    en: {
      name: 'GlassFIX PRO',
      categoryTitle: 'Silicone Sealant • Glass & Aluminum',
      tagline: 'Superior Crystal Adhesion • 100% Silicone • UV Resistant',
      packagingDetail: '300 mL rigid cartridge & 600 mL foil sausage',
      tempRange: '+5°C to +40°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Approx. 12 linear meters per 300 mL cartridge (5x5 mm bead)',
      description: 'One-component 100% silicone elastomeric sealant specifically engineered for professional glazing, anodized or powder-coated aluminum profiles, commercial storefronts, and light curtain walls. Non-yellowing and non-shrinking under intense solar radiation.',
      uses: [
        'Perimeter and butt-joint sealing of monolithic and laminated glass',
        'Aluminum framing, commercial windows, and curtain wall glazing',
        'Display cases, skylights, domes, and glass office partitions',
        'Watertight joints between glass, metal, glazed ceramic, and PVC'
      ],
      steps: [
        { title: '1. Substrate Preparation', text: 'Clean glass and aluminum surfaces with isopropyl alcohol so they are free of grease, dust, and moisture. Apply masking tape along joint edges.' },
        { title: '2. Nozzle & Gun Setup', text: 'Cut nozzle at a 45° angle matching desired joint width (min. 4 mm) and load the 300 mL cartridge or 600 mL sausage into the caulking gun.' },
        { title: '3. Continuous Extrusion', text: 'Gun a steady, continuous bead pushing the sealant firmly into the joint root to prevent trapped air pockets.' },
        { title: '4. Tooling & Curing', text: 'Tool smooth with a spatula within 5–8 minutes and remove masking tape immediately. Tack-free in 12 min; cures 3 mm per 24 hours.' }
      ]
    }
  },
  {
    id: 'versafix-pro',
    code: 'VersaFIX PRO',
    family: 'silicones',
    packagingType: 'cartridge',
    weightOrVolume: '300 mL / 600 mL',
    normOrClass: 'ASTM C920 Clase 25',
    accentColor: '#1d4ed8',
    bandGradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/m-s1.png',
    labelImage: 'assets/BUILDING PRODUCTS/m-s1.png',
    es: {
      name: 'VersaFIX PRO',
      categoryTitle: 'Sellador de Silicona • Multiuso General',
      tagline: 'Elasticidad Permanente • Interior y Exterior • Multiuso Residencial y Comercial',
      packagingDetail: 'Cartucho rígido de 300 mL y Salchicha de 600 mL',
      tempRange: '+5°C a +40°C',
      shelfLife: '12 meses en envase original cerrado',
      yieldSummary: 'Aprox. 11 a 13 m lineales por cartucho de 300 mL',
      description: 'Sellador de silicona versátil de alto rendimiento diseñado para el sellado general de juntas de dilatación moderada, mantenimiento arquitectónico, instalaciones eléctricas, plomería y acabados de construcción tanto en interiores como exteriores.',
      uses: [
        'Sellado general en proyectos de construcción residencial, comercial y corporativa',
        'Juntas entre cerámica, madera tratada, aluminio, PVC y mampostería',
        'Pasamuros de instalaciones de aire acondicionado, ductos y cajas eléctricas',
        'Reparaciones rápidas impermeables resistentes a la intemperie'
      ],
      steps: [
        { title: '1. Limpieza de Superficie', text: 'Retire restos de sellador antiguo, polvo, aceite o pintura suelta. La junta debe estar completamente seca.' },
        { title: '2. Corte de Boquilla', text: 'Desenrosque la cánula, perfore el sello hermético y corte la punta a 45° según el espesor requerido.' },
        { title: '3. Relleno Uniforme', text: 'Aplique manteniendo un ángulo constante de 45° a lo largo de toda la junta con presión uniforme.' },
        { title: '4. Acabado y Secado', text: 'Alise el cordón antes de formar película (10–15 min). Evite el contacto directo con agua durante las primeras 12 horas.' }
      ]
    },
    en: {
      name: 'VersaFIX PRO',
      categoryTitle: 'Silicone Sealant • General Multi-Purpose',
      tagline: 'Permanent Elasticity • Interior & Exterior • Architectural Multi-Purpose',
      packagingDetail: '300 mL rigid cartridge & 600 mL sausage',
      tempRange: '+5°C to +40°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Approx. 11 to 13 linear meters per 300 mL cartridge',
      description: 'High-performance multi-purpose silicone sealant engineered for general perimeter sealing, moderate expansion joints, architectural maintenance, HVAC penetrations, plumbing, and interior/exterior construction finishes.',
      uses: [
        'General sealing in residential, commercial, and corporate construction projects',
        'Joints between ceramic, treated wood, aluminum, PVC, and masonry',
        'HVAC duct penetrations, conduits, and electrical enclosures',
        'Weatherproof quick repairs exposed to sun and rain'
      ],
      steps: [
        { title: '1. Surface Cleaning', text: 'Remove old sealant residue, dust, oil, or loose paint. Ensure the joint is completely dry.' },
        { title: '2. Nozzle Preparation', text: 'Unscrew nozzle, puncture the inner foil seal, and cut tip at 45° to desired bead width.' },
        { title: '3. Uniform Application', text: 'Extrude sealant holding the gun at a consistent 45° angle with steady trigger pressure.' },
        { title: '4. Tooling & Cure', text: 'Tool bead smooth before skin formation (10–15 min). Protect from direct water spray for the first 12 hours.' }
      ]
    }
  },
  {
    id: 'hygienfix-pro',
    code: 'HygienFIX PRO',
    family: 'silicones',
    packagingType: 'cartridge',
    weightOrVolume: '300 mL / 600 mL',
    normOrClass: 'EN 15651-3 Clase XS1 (Sanitario)',
    accentColor: '#0d9488',
    bandGradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/m-s7.png',
    labelImage: 'assets/BUILDING PRODUCTS/m-s7.png',
    es: {
      name: 'HygienFIX PRO',
      categoryTitle: 'Sellador de Silicona • Baño y Cocina (Antihongos)',
      tagline: 'Fórmula Fungicida Activa • 100% Impermeable • Resiste Detergentes y Vapor',
      packagingDetail: 'Cartucho rígido de 300 mL y Salchicha de 600 mL',
      tempRange: '+5°C a +40°C',
      shelfLife: '12 meses en envase original cerrado',
      yieldSummary: 'Aprox. 12 m lineales por cartucho de 300 mL',
      description: 'Sellador de silicona sanitaria enriquecido con agentes fungicidas y antimicrobianos de larga duración que bloquean la proliferación de moho negro y hongos en zonas de humedad permanente, vapor y salpicaduras constantes.',
      uses: [
        'Sellado perimetral de lavamanos, inodoros, tinas, jacuzzis y platos de ducha',
        'Mamparas de baño en vidrio templado y encimeras de cocina',
        'Juntas en lavanderías, clínicas, laboratorios y áreas de procesamiento de alimentos',
        'Uniones impermeables sobre porcelana sanitaria, acero inoxidable, acrílico y azulejo'
      ],
      steps: [
        { title: '1. Desinfección y Secado', text: 'Elimine cualquier rastro de moho previo con limpiador fungicida, enjuague y seque completamente con paño limpio.' },
        { title: '2. Delimitación de Junta', text: 'Coloque cinta adhesiva a ambos lados de la unión sanitaria para garantizar bordes rectos y estéticos.' },
        { title: '3. Aplicación Sanitaria', text: 'Aplique HygienFIX PRO rellenando toda la cavidad entre el mueble sanitario y el muro o piso.' },
        { title: '4. Perfilado Cóncavo', text: 'Alise a 45° para evitar acumulación de agua estancada. Listo para exposición al agua tras 12–24 horas de curado.' }
      ]
    },
    en: {
      name: 'HygienFIX PRO',
      categoryTitle: 'Silicone Sealant • Bathroom & Kitchen (Anti-Fungal)',
      tagline: 'Active Fungicide Formula • 100% Waterproof • Resists Steam & Detergents',
      packagingDetail: '300 mL rigid cartridge & 600 mL sausage',
      tempRange: '+5°C to +40°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Approx. 12 linear meters per 300 mL cartridge',
      description: 'Sanitary silicone sealant enriched with long-lasting fungicidal and antimicrobial agents that prevent black mold and mildew growth in areas exposed to permanent humidity, steam, and frequent cleaning chemicals.',
      uses: [
        'Perimeter sealing of sinks, toilets, bathtubs, whirlpools, and shower trays',
        'Tempered glass shower enclosures and kitchen countertops/backsplashes',
        'Wet-area joints in laundries, clinics, laboratories, and commercial kitchens',
        'Waterproof joints on sanitary porcelain, stainless steel, acrylic, and glazed tile'
      ],
      steps: [
        { title: '1. Sanitize & Dry', text: 'Remove any existing mildew with a fungicidal cleaner, rinse thoroughly, and dry completely before application.' },
        { title: '2. Masking Joint Edges', text: 'Apply painter’s tape on both sides of the sanitary joint to achieve razor-sharp edges.' },
        { title: '3. Sanitary Bead Application', text: 'Extrude HygienFIX PRO filling the entire gap between the fixture and tiled wall or floor.' },
        { title: '4. Concave Tooling', text: 'Tool at a 45° bevel so water drains off easily. Ready for water exposure after 12–24 hours of curing.' }
      ]
    }
  },
  {
    id: 'framefix-pro',
    code: 'FrameFIX PRO',
    family: 'silicones',
    packagingType: 'cartridge',
    weightOrVolume: '300 mL / 600 mL',
    normOrClass: 'EN 15651-1 F EXT-INT CC 25LM',
    accentColor: '#475569',
    bandGradient: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/m-s5.png',
    labelImage: 'assets/BUILDING PRODUCTS/m-s5.png',
    es: {
      name: 'FrameFIX PRO',
      categoryTitle: 'Sellador de Silicona • Ventanas y Puertas',
      tagline: 'Curado Neutro • Alta Capacidad de Movimiento ±25% • Hermeticidad Termo-Acústica',
      packagingDetail: 'Cartucho rígido de 300 mL y Salchicha de 600 mL',
      tempRange: '+5°C a +40°C',
      shelfLife: '12 meses en envase original cerrado',
      yieldSummary: 'Aprox. 10 a 12 m lineales por cartucho de 300 mL',
      description: 'Sellador de silicona de curado neutro y bajo módulo formulado para el sellado perimetral elástico de marcos de ventanas y puertas frente a muros de concreto, sistemas ICF, repello y mampostería. Absorbe vibraciones por cierre y dilataciones térmicas.',
      uses: [
        'Sellado perimetral exterior e interior de marcos de ventanas y puertas',
        'Uniones entre aluminio, PVC, madera o acero y muros de concreto / ICF',
        'Barrera hermética contra filtraciones de lluvia impulsada por viento y polvo',
        'Aislamiento acústico perimetral en aberturas residenciales y hoteleras'
      ],
      steps: [
        { title: '1. Control de Profundidad', text: 'Limpie el perímetro del marco e instale cordón de respaldo (backer rod) de polietileno en juntas mayores a 8 mm de profundidad.' },
        { title: '2. Preparación de Cartucho/Salchicha', text: 'Corte la boquilla según el ancho de junta entre el marco y el vano de concreto.' },
        { title: '3. Sellado Perimetral', text: 'Aplique FrameFIX PRO de forma continua alrededor de todo el marco asegurando contacto total en ambas caras.' },
        { title: '4. Compactación de Junta', text: 'Presione y alise con espátula para garantizar hermeticidad al aire y al agua. Curado neutro sin olor corrosivo.' }
      ]
    },
    en: {
      name: 'FrameFIX PRO',
      categoryTitle: 'Silicone Sealant • Windows & Doors',
      tagline: 'Neutral Cure • ±25% Movement Capability • Thermo-Acoustic Weatherseal',
      packagingDetail: '300 mL rigid cartridge & 600 mL sausage',
      tempRange: '+5°C to +40°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Approx. 10 to 12 linear meters per 300 mL cartridge',
      description: 'Low-modulus neutral-cure silicone sealant formulated for elastic perimeter weathersealing of window and door frames against concrete walls, ICF systems, stucco, and masonry. Absorbs slamming vibrations and thermal expansion.',
      uses: [
        'Interior and exterior perimeter sealing of window and door frames',
        'Joints between aluminum, uPVC, wood, or steel frames and concrete / ICF walls',
        'Weatherproof barrier against wind-driven rain, drafts, and dust infiltration',
        'Perimeter acoustic sealing in residential and hospitality openings'
      ],
      steps: [
        { title: '1. Joint Depth Control', text: 'Clean frame perimeter and insert closed-cell polyethylene backer rod in joints deeper than 8 mm.' },
        { title: '2. Cartridge / Sausage Setup', text: 'Cut nozzle to match the gap width between the window frame and wall opening.' },
        { title: '3. Perimeter Extrusion', text: 'Gun FrameFIX PRO continuously around the entire frame ensuring full wet-out on both substrates.' },
        { title: '4. Joint Compaction', text: 'Tool firmly with a spatula to guarantee an airtight and watertight seal. Non-corrosive neutral cure.' }
      ]
    }
  },
  {
    id: 'heavyfix-pro',
    code: 'HeavyFIX PRO',
    family: 'silicones',
    packagingType: 'cartridge',
    weightOrVolume: '300 mL / 600 mL',
    normOrClass: 'ASTM C920 Clase 50 / Estructural',
    accentColor: '#b45309',
    bandGradient: 'linear-gradient(135deg, #78350f 0%, #d97706 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/m-s2.png',
    labelImage: 'assets/BUILDING PRODUCTS/m-s2.png',
    es: {
      name: 'HeavyFIX PRO',
      categoryTitle: 'Sellador de Silicona • Alta Resistencia (Heavy Duty)',
      tagline: 'Alto Módulo Estructural • Máxima Tenacidad • Resistencia a Cargas y Vibración',
      packagingDetail: 'Cartucho rígido de 300 mL y Salchicha profesional de 600 mL',
      tempRange: '+5°C a +40°C',
      shelfLife: '12 meses en envase original cerrado',
      yieldSummary: 'Aprox. 9 a 11 m lineales por cartucho de 300 mL (18–22 m por salchicha 600 mL)',
      description: 'Sellador de silicona de alta resistencia mecánica (Heavy Duty) diseñado para juntas estructurales, fachadas sometidas a fuertes cargas de viento, paneles prefabricados, cubiertas industriales y uniones sujetas a tráfico o vibración severa.',
      uses: [
        'Juntas constructivas y de dilatación en fachadas de edificios y naves industriales',
        'Sellado de paneles prefabricados de concreto, fibrocemento y paneles compuestos (ACM)',
        'Uniones sometidas a esfuerzos mecánicos, vibración de equipos y cargas de viento huracanado',
        'Proyectos de infraestructura, estacionamientos y obra civil pesada'
      ],
      steps: [
        { title: '1. Ingeniería de Junta', text: 'Verifique una relación ancho:profundidad de 2:1 utilizando cordón de respaldo de celda cerrada. Limpie con solvente libre de residuos.' },
        { title: '2. Carga en Pistola Industrial', text: 'Recomendado en formato Salchicha de 600 mL para alto rendimiento en fachadas o Cartucho de 300 mL para detalles.' },
        { title: '3. Extrusión de Alta Densidad', text: 'Rellene la junta de abajo hacia arriba asegurando penetración completa en los flancos del sustrato.' },
        { title: '4. Compactación Mecánica', text: 'Alise en seco o con solución neutra para comprimir el sellador contra las paredes de la junta.' }
      ]
    },
    en: {
      name: 'HeavyFIX PRO',
      categoryTitle: 'Silicone Sealant • Heavy Duty Structural',
      tagline: 'High Structural Modulus • Maximum Toughness • Wind & Vibration Resistant',
      packagingDetail: '300 mL rigid cartridge & 600 mL professional sausage',
      tempRange: '+5°C to +40°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Approx. 9 to 11 linear meters per 300 mL cartridge (18–22 m per 600 mL sausage)',
      description: 'Heavy-duty mechanical-strength silicone sealant engineered for structural expansion joints, high-wind building facades, precast concrete panels, industrial roofing, and joints exposed to severe vibration.',
      uses: [
        'Expansion and movement joints in high-rise facades and industrial warehouses',
        'Sealing precast concrete panels, fiber-cement boards, and aluminum composite panels (ACM)',
        'Joints subjected to mechanical stress, equipment vibration, and hurricane wind loads',
        'Infrastructure projects, parking structures, and heavy civil engineering works'
      ],
      steps: [
        { title: '1. Joint Geometry Prep', text: 'Maintain a 2:1 width-to-depth ratio using closed-cell backer rod. Clean substrates with residue-free solvent.' },
        { title: '2. Industrial Gun Loading', text: 'Available in 600 mL sausage for high-volume facade work or 300 mL cartridge for detailing.' },
        { title: '3. High-Density Extrusion', text: 'Fill the joint from bottom to top ensuring complete wet-out along both joint walls.' },
        { title: '4. Mechanical Tooling', text: 'Tool firmly to compress the sealant against the joint flanks for maximum tensile bond.' }
      ]
    }
  },
  {
    id: 'fuegofix-pro',
    code: 'FuegoFIX PRO',
    family: 'silicones',
    packagingType: 'cartridge',
    weightOrVolume: '300 mL / 600 mL',
    normOrClass: 'UL 1479 / ASTM E814 / EN 1366-4 (Hasta 4h)',
    accentColor: '#dc2626',
    bandGradient: 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/m-s4.png',
    labelImage: 'assets/BUILDING PRODUCTS/m-s4.png',
    es: {
      name: 'FuegoFIX PRO',
      categoryTitle: 'Sellador de Silicona • Cortafuego (Firestop)',
      tagline: 'Barrera Ignífuga hasta 4 Horas • Bloquea Humo y Gases Tóxicos • Autoextinguible',
      packagingDetail: 'Cartucho rígido de 300 mL y Salchicha de 600 mL (Color Rojo / Gris Cortafuego)',
      tempRange: '+5°C a +40°C (Resistencia térmica curado: -40°C a +180°C / Fuego directo)',
      shelfLife: '12 meses en envase original cerrado',
      yieldSummary: 'Aprox. 8 a 10 m lineales por cartucho según espesor de barrera cortafuego',
      description: 'Sellador elastomérico de silicona cortafuego (Firestop) formulado para compartimentación pasiva contra incendios. Mantiene la integridad estanca al fuego, humo frío y gases calientes hasta por 4 horas en juntas estructurales y pasos de instalaciones sobre muros ICF, concreto y drywall cortafuego.',
      uses: [
        'Sellado cortafuego en penetraciones de tuberías metálicas, charolas de cables y ductos',
        'Juntas de dilatación en muros cortafuego, losas de entrepiso y núcleos de escaleras de emergencia',
        'Complemento ideal para mantener la clasificación ignífuga de 4+ horas en muros AZZUL ICF',
        'Hospitales, hoteles, centros de datos, torres residenciales y plantas industriales'
      ],
      steps: [
        { title: '1. Material de Respaldo Ignífugo', text: 'Limpie la abertura e instale lana mineral de roca compactada al espesor especificado por la ingeniería contra incendios.' },
        { title: '2. Aplicación del Sello Cortafuego', text: 'Aplique FuegoFIX PRO sobre la lana mineral con un espesor mínimo de 12 mm a 15 mm sin dejar porosidades.' },
        { title: '3. Sellado Perimetral de Tuberías', text: 'Rodee completamente el perímetro de ductos o tuberías penetrantes garantizando adherencia al muro y al conducto.' },
        { title: '4. Inspección de Compartimentación', text: 'Alise la superficie dejando un sello continuo y hermético al humo. Identifique la junta según protocolo de seguridad.' }
      ]
    },
    en: {
      name: 'FuegoFIX PRO',
      categoryTitle: 'Silicone Sealant • Firestop (Passive Fire Protection)',
      tagline: 'Up to 4-Hour Fire Rating • Blocks Smoke & Toxic Gases • Self-Extinguishing',
      packagingDetail: '300 mL rigid cartridge & 600 mL sausage (Firestop Red / Grey)',
      tempRange: '+5°C to +40°C (Service temp: -40°C to +180°C / Direct Fire Barrier)',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Approx. 8 to 10 linear meters per cartridge depending on firestop depth',
      description: 'Fire-rated elastomeric silicone sealant (Firestop) engineered for passive fire compartmentation. Maintains integrity against flames, cold smoke, and toxic hot gases for up to 4 hours in structural joints and MEP penetrations through ICF walls, concrete, and fire-rated drywall.',
      uses: [
        'Firestop sealing around metallic pipe penetrations, cable trays, and HVAC ducts',
        'Expansion joints in firewalls, floor slabs, and emergency stairwell cores',
        'Ideal companion to preserve the 4+ hour fire rating of AZZUL ICF structural walls',
        'Hospitals, hotels, data centers, residential towers, and industrial plants'
      ],
      steps: [
        { title: '1. Mineral Wool Backing', text: 'Clean the opening and pack fire-rated mineral wool to the depth required by the firestop schedule.' },
        { title: '2. Firestop Seal Application', text: 'Apply FuegoFIX PRO over the mineral wool to a minimum depth of 12–15 mm with zero voids.' },
        { title: '3. Annular Space Sealing', text: 'Completely seal the annular space around penetrating pipes or conduits bonding to both wall and pipe.' },
        { title: '4. Smoke-Tight Tooling', text: 'Tool the surface smooth to guarantee a continuous smoke-tight and flame-tight barrier.' }
      ]
    }
  },
  {
    id: 'stonefix-pro',
    code: 'StoneFIX PRO',
    family: 'silicones',
    packagingType: 'cartridge',
    weightOrVolume: '300 mL / 600 mL',
    normOrClass: 'ISO 11600 F&G 25LM • No-Staining',
    accentColor: '#78350f',
    bandGradient: 'linear-gradient(135deg, #451a03 0%, #78350f 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/m-s3.png',
    labelImage: 'assets/BUILDING PRODUCTS/m-s3.png',
    es: {
      name: 'StoneFIX PRO',
      categoryTitle: 'Sellador de Silicona • Piedra Natural (Fórmula Neutra)',
      tagline: 'Cero Migración de Plastificantes • No Mancha el Porcelanato ni el Mármol • Curado Neutro',
      packagingDetail: 'Cartucho rígido de 300 mL y Salchicha de 600 mL',
      tempRange: '+5°C a +40°C',
      shelfLife: '12 meses en envase original cerrado',
      yieldSummary: 'Aprox. 11 m lineales por cartucho de 300 mL',
      description: 'Sellador de silicona de fórmula 100% neutra (oxima/alcoxi libre de plastificantes migrantes) desarrollado especialmente para mármol, granito, travertino, cuarzo, piedra volcánica y porcelanatos de gran formato. Previene por completo el halo graso o manchado en los bordes de piedras porosas.',
      uses: [
        'Juntas de movimiento y perimetrales en fachadas y pisos de mármol, granito y travertino',
        'Encimeras de cocina y baño en cuarzo, piedra sinterizada y piedra natural',
        'Terrazas exteriores, piscinas revestidas en piedra y lobbies arquitectónicos de lujo',
        'Uniones elásticas entre piedra natural y metal, vidrio o concreto sin corrosión'
      ],
      steps: [
        { title: '1. Protección de Bordes de Piedra', text: 'Limpie los bordes de la piedra sin usar solventes aceitosos y proteja ambos flancos con cinta de baja adherencia.' },
        { title: '2. Configuración de Junta', text: 'Coloque cordón de respaldo de polietileno para evitar adherencia en tres caras y permitir libre movimiento.' },
        { title: '3. Aplicación Neutra', text: 'Extruya StoneFIX PRO de manera uniforme rellenando la junta entre placas de piedra.' },
        { title: '4. Acabado sin Halo', text: 'Alise con espátula humedecida y retire la cinta antes de los 10 minutos. Garantiza bordes limpios sin manchas periféricas.' }
      ]
    },
    en: {
      name: 'StoneFIX PRO',
      categoryTitle: 'Silicone Sealant • Natural Stone (Neutral Formula)',
      tagline: 'Zero Plasticizer Migration • Non-Staining on Marble & Granite • Neutral Cure',
      packagingDetail: '300 mL rigid cartridge & 600 mL sausage',
      tempRange: '+5°C to +40°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Approx. 11 linear meters per 300 mL cartridge',
      description: '100% neutral-cure silicone sealant formulated without migrating plasticizers specifically for marble, granite, travertine, quartz, volcanic stone, and large-format porcelain slabs. Completely prevents hydrophobic edge staining or dark halos on porous natural stone.',
      uses: [
        'Movement and perimeter joints on marble, granite, and travertine facades and floors',
        'Kitchen and vanity countertops in quartz, sintered stone, and natural stone',
        'Exterior stone terraces, stone-clad pools, and luxury architectural lobbies',
        'Non-corrosive elastic joints between natural stone and metal, glass, or concrete'
      ],
      steps: [
        { title: '1. Stone Edge Masking', text: 'Clean stone edges without oily solvents and mask both sides of the joint with low-tack tape.' },
        { title: '2. Backer Rod Placement', text: 'Insert polyethylene backer rod to prevent three-sided adhesion and allow free joint movement.' },
        { title: '3. Neutral Extrusion', text: 'Apply StoneFIX PRO evenly across the joint between stone slabs.' },
        { title: '4. Stain-Free Tooling', text: 'Tool smooth within 10 minutes and peel off masking tape immediately for clean, halo-free stone edges.' }
      ]
    }
  },

  // =========================================================================
  // FAMILIA 1: PREPARACIÓN Y MASILLAS (CUBETAS | VERDE ESMERALDA)
  // =========================================================================
  {
    id: 'p30',
    code: 'P30',
    family: 'fam1',
    packagingType: 'bucket',
    weightOrVolume: '25 KG',
    normOrClass: 'EN 15824 • Masilla Interior',
    accentColor: '#134e4a',
    bandGradient: 'linear-gradient(135deg, #134e4a 0%, #0f766e 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/B-TAG-PREP3.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/B-TAG-PREP3.jpg',
    es: {
      name: 'P30 • Masilla Interior Lista para Usar',
      categoryTitle: 'Familia 1: Preparación y Masillas • Cubeta 25 kg',
      tagline: 'Fácil Lijado • Excelente Adherencia • Bajo Olor • Capa Base para Techo y Drywall',
      packagingDetail: 'Cubeta plástica hermética de 25 kg (Pasta lista para usar)',
      tempRange: '5°C a 40°C',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: 'Aprox. 1.0 a 1.25 kg/m² por 1 mm de espesor',
      description: 'Compuesto de acabado de paredes interiores de alto rendimiento, listo para usar. Diseñado para alisar concreto, mortero de cemento y yeso. Crea una superficie fina, blanca y uniforme lista para recibir pintura decorativa de alta gama.',
      uses: [
        'Paredes interiores de concreto monolítico, repello fino y mampostería',
        'Paneles de yeso (drywall), cielos falsos y techos interiores',
        'Alisado fino (skim coat) previo a la aplicación de pintura arquitectónica',
        'Nivelación de imperfecciones superficiales en interiores residenciales y corporativos'
      ],
      steps: [
        { title: '1. Preparación de la Superficie', text: 'La superficie debe estar estructuralmente firme, limpia y libre de polvo o grasa. Repare grietas mayores antes de aplicar.' },
        { title: '2. Homogeneización', text: 'Producto listo para usar; solo remueva suavemente el contenido de la cubeta antes de aplicar sin agregar agua.' },
        { title: '3. Aplicación en Capas Finas', text: 'Aplique una primera capa fina y uniforme con llana metálica o espátula ancha, y aplique la segunda capa tras 4 a 6 horas.' },
        { title: '4. Lijado y Rendimiento', text: 'Fácil de lijar una vez curado totalmente en 24 horas (grano 120–180). Rendimiento: 1.0 a 1.25 kg/m² por mm de espesor.' }
      ]
    },
    en: {
      name: 'P30 • Ready-to-Use Interior Putty',
      categoryTitle: 'Family 1: Prep & Putties • 25 kg Bucket',
      tagline: 'Easy Sanding • Excellent Adhesion • Low Odor • Base Coat for Ceilings & Drywall',
      packagingDetail: '25 kg airtight plastic bucket (Ready-to-use paste)',
      tempRange: '5°C to 40°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Approx. 1.0 to 1.25 kg/m² per 1 mm thickness',
      description: 'High-performance ready-to-use interior wall finishing compound engineered to smooth concrete, cement mortar, and gypsum substrates. Creates a fine, uniform surface ready for decorative painting.',
      uses: [
        'Interior monolithic concrete walls, cement plaster, and masonry',
        'Gypsum boards (drywall), suspended ceilings, and interior soffits',
        'Fine skim-coating prior to architectural paint application',
        'Smoothing surface blemishes in residential and commercial interiors'
      ],
      steps: [
        { title: '1. Surface Preparation', text: 'Ensure the substrate is structurally sound, clean, dry, and free of dust or grease. Repair deep cracks beforehand.' },
        { title: '2. Gentle Mixing', text: 'Ready-to-use formula; gently stir the bucket contents before application without adding water.' },
        { title: '3. Thin-Coat Application', text: 'Apply a thin, even first coat with a steel trowel or broad knife, followed by a second coat after 4 to 6 hours.' },
        { title: '4. Sanding & Coverage', text: 'Sand smoothly once fully cured at 24 hours (120–180 grit). Coverage: 1.0 to 1.25 kg/m² per mm of thickness.' }
      ]
    }
  },
  {
    id: 'p40',
    code: 'P40',
    family: 'fam1',
    packagingType: 'bucket',
    weightOrVolume: '25 KG',
    normOrClass: 'EN 15824 • Masilla Exterior Intemperie',
    accentColor: '#134e4a',
    bandGradient: 'linear-gradient(135deg, #134e4a 0%, #047857 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/B-TAG-PREP2.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/B-TAG-PREP2.jpg',
    es: {
      name: 'P40 • Masilla Exterior Resistente a la Intemperie',
      categoryTitle: 'Familia 1: Preparación y Masillas • Cubeta 25 kg',
      tagline: 'Nivelación de Superficies • Flexible • Anti-Grietas • Pasta Base para Exteriores',
      packagingDetail: 'Cubeta plástica hermética de 25 kg (Pasta acrílica exterior)',
      tempRange: '5°C a 40°C (No aplicar bajo lluvia inminente)',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: 'Aprox. 1.0 a 1.25 kg/m² por 1 mm de espesor',
      description: 'Pasta para exteriores de alto rendimiento y lista para usar, diseñada para alisar y nivelar concreto y sustratos minerales expuestos al sol y la lluvia. Ofrece excelente resistencia al clima tropical, flexibilidad elástica anti-fisuras y adherencia superior.',
      uses: [
        'Paredes exteriores de concreto, fachadas arquitectónicas y muros perimetrales',
        'Alisado y preparación de superficies exteriores antes de pintar o impermeabilizar',
        'Recubrimiento de nivelación sobre sistemas de encofrado ICF con malla y mortero base',
        'Renovación de fachadas con microfisuras estáticas en climas cálidos y costeros'
      ],
      steps: [
        { title: '1. Preparación e Imprimación', text: 'Asegúrese de que las superficies estén limpias, secas y sin polvo ni aceites. Las superficies muy absorbentes deben imprimarse con BP10.' },
        { title: '2. Producto Listo para Usar', text: 'Homogeneice ligeramente la pasta dentro de la cubeta de 25 kg sin diluir.' },
        { title: '3. Aplicación en Doble Capa', text: 'Aplique una primera capa fina y uniforme con llana inoxidable. Aplique la segunda capa después de 4 a 6 horas.' },
        { title: '4. Lijado y Curado Exterior', text: 'Lije suavemente tras el secado completo (24 horas) antes de aplicar el acabado final.' }
      ]
    },
    en: {
      name: 'P40 • Weather-Resistant Exterior Putty',
      categoryTitle: 'Family 1: Prep & Putties • 25 kg Bucket',
      tagline: 'Surface Leveling • Flexible • Anti-Crack • Ready-to-Use Exterior Base Paste',
      packagingDetail: '25 kg airtight plastic bucket (Exterior acrylic paste)',
      tempRange: '5°C to 40°C (Do not apply under rain or high humidity)',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Approx. 1.0 to 1.25 kg/m² per 1 mm thickness',
      description: 'High-performance ready-to-use exterior paste engineered to smooth and level concrete and mineral substrates exposed to sun and rain. Delivers outstanding weather resistance, crack-bridging flexibility, and superior adhesion.',
      uses: [
        'Exterior concrete walls, architectural facades, and perimeter walls',
        'Smoothing and preparing exterior surfaces prior to painting or waterproofing',
        'Leveling skim coat over base-coated ICF wall systems',
        'Facade renovation covering hairline surface checks in coastal and tropical climates'
      ],
      steps: [
        { title: '1. Substrate Prep & Priming', text: 'Ensure surfaces are clean, dry, and free of dust or oils. Highly absorbent substrates should be primed with BP10.' },
        { title: '2. Ready-to-Use Conditioning', text: 'Lightly stir the paste inside the 25 kg bucket without diluting with water.' },
        { title: '3. Two-Coat Application', text: 'Apply a thin, uniform first coat with a stainless-steel trowel. Apply the second coat after 4 to 6 hours.' },
        { title: '4. Exterior Cure & Sanding', text: 'Sand lightly after full drying (24 hours) prior to applying the exterior topcoat.' }
      ]
    }
  },
  {
    id: 'jc90',
    code: 'JC90',
    family: 'fam1',
    packagingType: 'bucket',
    weightOrVolume: '20 KG',
    normOrClass: 'ASTM C475 • Compuesto Juntas y Drywall',
    accentColor: '#134e4a',
    bandGradient: 'linear-gradient(135deg, #064e3b 0%, #134e4a 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/B-TAG-PREP1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/B-TAG-PREP1.jpg',
    es: {
      name: 'JC90 • Compuesto Multiuso Juntas y Drywall',
      categoryTitle: 'Familia 1: Preparación y Masillas • Cubeta 20 kg',
      tagline: 'Listo para Usar • Fácil Lijado • Mínima Contracción y Anti-Grietas',
      packagingDetail: 'Cubeta plástica hermética de 20 kg (Pasta Todo Propósito)',
      tempRange: '5°C a 40°C',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: 'Aprox. 1.0 a 1.25 kg/m² por 1 mm de espesor (Secado por capa: 12 a 24 h)',
      description: 'Masilla para juntas base agua lista para usar, formulada para encintar, rellenar y dar acabado final en paneles de yeso (drywall) y techos. Ofrece excelente adherencia de cinta, trabajabilidad cremosa y lijado fácil para un acabado Nivel 4 y Nivel 5 impecable.',
      uses: [
        'Relleno y acabado de juntas en paneles de yeso (drywall) y fibrocemento interior',
        'Embutido de cintas de papel o malla de fibra de vidrio en uniones de tablaroca',
        'Recubrimiento de cabezas de tornillos, clavos y esquineros metálicos o plásticos',
        'Alisado completo (Nivel 5) de muros interiores revestidos sobre estructura o ICF'
      ],
      steps: [
        { title: '1. Preparación y Mezcla', text: 'Las superficies y juntas deben estar limpias, secas y firmes. Producto listo para usar; revuelva suavemente antes de aplicar sin agregar agua.' },
        { title: '2. 1ª Capa (Encintado)', text: 'Aplique una capa delgada sobre la junta con espátula de 4" a 6" y embuta la cinta presionando firmemente.' },
        { title: '3. 2ª Capa (Relleno)', text: 'Una vez seca la primera capa, cubra la cinta y desvanezca los bordes con espátula de 8" a 10".' },
        { title: '4. 3ª Capa (Acabado Fino) y Lijado', text: 'Aplique capa fina uniforme, deje secar (12–24 h según ventilación) y lije suavemente con grano 80–120.' }
      ]
    },
    en: {
      name: 'JC90 • All-Purpose Joint & Drywall Compound',
      categoryTitle: 'Family 1: Prep & Putties • 20 kg Bucket',
      tagline: 'Ready to Use • Easy Sanding • Minimal Shrinkage & Crack-Free Finish',
      packagingDetail: '20 kg airtight plastic bucket (All-Purpose Paste)',
      tempRange: '5°C to 40°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Approx. 1.0 to 1.25 kg/m² per 1 mm thickness (12–24 h drying per coat)',
      description: 'Water-based ready-to-use joint compound formulated for taping, topping, and final finishing on gypsum drywall panels and ceilings. Provides superior tape bond, buttery workability, and effortless sanding for Level 4 and Level 5 finishes.',
      uses: [
        'Taping, filling, and finishing joints in gypsum drywall panels',
        'Embedding paper joint tape or fiberglass mesh tape',
        'Concealing drywall screw heads, fasteners, and corner beads',
        'Full skim-coating (Level 5 finish) on interior walls and drywall-clad ICF walls'
      ],
      steps: [
        { title: '1. Prep & Stirring', text: 'Surfaces and joints must be clean, dry, and sound. Ready to use; stir gently before applying without adding water.' },
        { title: '2. 1st Coat (Embedding Tape)', text: 'Apply a thin layer over the joint and embed the joint tape firmly with a 4"–6" taping knife.' },
        { title: '3. 2nd Coat (Filler Coat)', text: 'Once the first coat is dry, cover the tape and feather edges outward using an 8"–10" knife.' },
        { title: '4. 3rd Coat (Finish) & Sanding', text: 'Apply a thin uniform finish coat, allow to dry (12–24 h), and sand lightly with 80–120 grit sandpaper.' }
      ]
    }
  },

  // =========================================================================
  // FAMILIA 2: IMPRIMANTES E IMPERMEABILIZANTES (CUBETAS | AZUL PETRÓLEO)
  // =========================================================================
  {
    id: 'bp10',
    code: 'BP10',
    family: 'fam2',
    packagingType: 'bucket',
    weightOrVolume: '20 KG',
    normOrClass: 'Promotor de Adherencia Acrílico',
    accentColor: '#0f4c5c',
    bandGradient: 'linear-gradient(135deg, #0f4c5c 0%, #115e59 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/B-TAG-IMP1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/B-TAG-IMP1.jpg',
    es: {
      name: 'BP10 • Imprimante Acrílico de Adherencia Multiuso',
      categoryTitle: 'Familia 2: Imprimantes e Impermeabilizantes • Cubeta 20 kg',
      tagline: 'Promotor de Adherencia • Reduce Absorción • Consolida Superficies',
      packagingDetail: 'Cubeta plástica hermética de 20 kg (Líquido acrílico base agua)',
      tempRange: '10°C a 35°C',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: '8 a 10 m² por kg por capa según porosidad del sustrato',
      description: 'Imprimante acrílico base agua formulado para mejorar la adherencia y regular la absorción del sustrato antes de aplicar adhesivos cerámicos, morteros autonivelantes, repello, masillas y yeso. Penetra profundamente en los poros y consolida superficies polvorientas o débiles.',
      uses: [
        'Puente de adherencia previo a morteros autonivelantes (FL30) y adhesivos cerámicos (EA20–EA45)',
        'Sellado de porosidad en concreto, carpetas de cemento, repello y paneles de yeso',
        'Consolidación de bloques de concreto celular (AAC), ladrillo y mampostería absorbente',
        'Preparación de muros interiores y exteriores antes de masillas P30, P40 o texturizado AT60'
      ],
      steps: [
        { title: '1. Verificación del Sustrato', text: 'La superficie debe estar firme, limpia y libre de polvo, grasa, aceite o cera. Humedad en cemento menor a 4% y en yeso menor a 0.5%.' },
        { title: '2. Homogeneización sin Diluir', text: 'Revuelva bien antes de usar. No diluir con agua ni aplicar bajo condiciones de lluvia o alta humedad.' },
        { title: '3. Aplicación con Rodillo o Brocha', text: 'Aplique una capa uniforme con brocha, rodillo o escoba suave. En sustratos muy porosos aplique 2 capas dejando secar la primera.' },
        { title: '4. Tiempo de Secado', text: 'Secado al tacto en 1 a 2 horas; curado total en 24 horas. No aplicar mortero sobre el imprimante aún húmedo.' }
      ]
    },
    en: {
      name: 'BP10 • Multi-Purpose Acrylic Bonding Primer',
      categoryTitle: 'Family 2: Primers & Waterproofing • 20 kg Bucket',
      tagline: 'Adhesion Promoter • Regulates Absorption • Consolidates Weak Substrates',
      packagingDetail: '20 kg airtight plastic bucket (Water-based acrylic liquid)',
      tempRange: '10°C to 35°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: '8 to 10 m² per kg per coat depending on substrate porosity',
      description: 'Water-based acrylic primer formulated to boost adhesion and regulate substrate suction prior to applying ceramic tile adhesives, self-leveling underlayments, render, putties, and gypsum. Penetrates deep into pores and consolidates dusty surfaces.',
      uses: [
        'Bonding bridge prior to self-leveling mortars (FL30) and tile adhesives (EA20–EA45)',
        'Sealing porosity on concrete slabs, cement screeds, plaster, and drywall panels',
        'Consolidating AAC blocks, brick, and absorbent masonry',
        'Priming interior and exterior walls before P30, P40 putties or AT60 textured coating'
      ],
      steps: [
        { title: '1. Substrate Inspection', text: 'Surface must be sound, clean, and free of dust, grease, oil, or wax. Residual moisture < 4% in concrete and < 0.5% in gypsum.' },
        { title: '2. Undiluted Mixing', text: 'Stir thoroughly before use. Do not dilute with water or apply under high humidity.' },
        { title: '3. Roller or Brush Application', text: 'Apply a uniform coat with a brush, roller, or soft broom. On highly porous substrates apply 2 coats allowing the first to dry.' },
        { title: '4. Drying & Cure Time', text: 'Touch-dry in 1 to 2 hours; full cure in 24 hours. Do not apply mortar over wet primer.' }
      ]
    }
  },
  {
    id: 'wp10',
    code: 'WP10',
    family: 'fam2',
    packagingType: 'bucket',
    weightOrVolume: '20 KG',
    normOrClass: 'ASTM D6083 • Membrana Acrílica Elastomérica',
    accentColor: '#0f4c5c',
    bandGradient: 'linear-gradient(135deg, #0f4c5c 0%, #0284c7 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/B-TAG-IMP1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/B-TAG-IMP1.jpg',
    es: {
      name: 'WP10 • Impermeabilizante Acrílico Elastomérico',
      categoryTitle: 'Familia 2: Imprimantes e Impermeabilizantes • Cubeta 20 kg',
      tagline: 'Membrana Líquida Continua • Puenteo de Fisuras • Alta Reflectividad Térmica',
      packagingDetail: 'Cubeta plástica hermética de 20 kg (Membrana líquida elastomérica)',
      tempRange: '10°C a 35°C',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: '1.2 a 1.5 kg/m² en sistema de 2 a 3 capas (aprox. 14–16 m² por cubeta)',
      description: 'Impermeabilizante acrílico elastomérico base agua de alta elongación (>300%) diseñado para formar una membrana continua sin costuras sobre techos de concreto, losas planas o inclinadas, bóvedas y muros culata. Resiste el estancamiento moderado y reduce la temperatura interior.',
      uses: [
        'Impermeabilización de losas de concreto, azoteas, techos inclinados y cubiertas con sistema ICF',
        'Protección hidrófuga de muros colindantes (culatas), parapetos y canales pluviales',
        'Mantenimiento y renovación de impermeabilizaciones acrílicas o asfálticas envejecidas',
        'Reducción de ganancia térmica solar en cubiertas residenciales, comerciales e industriales'
      ],
      steps: [
        { title: '1. Limpieza y Pendientes', text: 'Limpie la losa eliminando polvo, hongos y partes sueltas. Selle grietas y chaflanes previamente con masilla elástica.' },
        { title: '2. Imprimación de Base', text: 'Aplique una mano de imprimante BP10 o una capa de WP10 diluida al 20% con agua limpia para sellar el poro.' },
        { title: '3. Aplicación Cruzada (2 Capas)', text: 'Aplique la primera capa pura con rodillo o cepillo en un sentido; tras 4–6 horas aplique la segunda capa en sentido perpendicular.' },
        { title: '4. Curado y Puesta en Servicio', text: 'En puntos críticos inserte malla de refuerzo de poliéster entre capas. Curado total en 24–48 horas.' }
      ]
    },
    en: {
      name: 'WP10 • Elastomeric Acrylic Waterproofing',
      categoryTitle: 'Family 2: Primers & Waterproofing • 20 kg Bucket',
      tagline: 'Seamless Liquid Membrane • Crack-Bridging • High Solar Thermal Reflectivity',
      packagingDetail: '20 kg airtight plastic bucket (Liquid elastomeric membrane)',
      tempRange: '10°C to 35°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: '1.2 to 1.5 kg/m² in a 2–3 coat system (approx. 14–16 m² per bucket)',
      description: 'High-elongation (>300%) water-based elastomeric acrylic waterproofing membrane engineered to form a seamless barrier over concrete roofs, flat or pitched slabs, domes, and parapet walls. Resists tropical weathering and lowers indoor temperatures.',
      uses: [
        'Waterproofing concrete roof slabs, flat roofs, pitched roofs, and ICF roof decks',
        'Weatherproofing party walls, parapets, and concrete rain gutters',
        'Refurbishing aged acrylic or modified bitumen roof coatings',
        'Solar heat reflection on residential, commercial, and industrial roofs'
      ],
      steps: [
        { title: '1. Cleaning & Detailing', text: 'Clean roof slab removing dust, algae, and loose material. Pre-seal cracks and coves with elastic sealant.' },
        { title: '2. Base Priming', text: 'Apply a coat of BP10 primer or WP10 diluted 20% with clean water to seal substrate pores.' },
        { title: '3. Cross-Coat Application', text: 'Apply the first undiluted coat in one direction; after 4–6 hours apply the second coat perpendicularly.' },
        { title: '4. Mesh Reinforcement & Cure', text: 'Embed polyester reinforcing mesh over critical joints between coats. Full cure in 24–48 hours.' }
      ]
    }
  },
  {
    id: 'k50',
    code: 'K50',
    family: 'fam2',
    packagingType: 'bucket',
    weightOrVolume: '20 KG',
    normOrClass: 'EN 14891 CM O1P • Impermeabilizante Flexible Bajo Baldosas',
    accentColor: '#115e59',
    bandGradient: 'linear-gradient(135deg, #115e59 0%, #0d9488 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/B-TAG-IMP1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/B-TAG-IMP1.jpg',
    es: {
      name: 'K50 • Membrana Impermeabilizante Cementosa Flexible',
      categoryTitle: 'Familia 2: Imprimantes e Impermeabilizantes • Cubeta 20 kg',
      tagline: 'Flexible Bajo Enchape Cerámico • Piscinas, Balcones y Duchas • Puenteo de Fisuras',
      packagingDetail: 'Cubeta plástica hermética de 20 kg (Sistema flexible polímero-cemento)',
      tempRange: '8°C a 35°C',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: 'Aprox. 1.5 kg/m² por mm de espesor (Recomendado: 2 capas = 3.0 kg/m²)',
      description: 'Revestimiento impermeabilizante flexible modificado con polímeros acrílicos diseñado para la impermeabilización segura debajo de enchapes cerámicos y porcelanatos en piscinas, balcones, terrazas, baños y cocinas industriales.',
      uses: [
        'Impermeabilización bajo revestimiento cerámico en piscinas, espejos de agua y spas',
        'Terrazas exteriores, balcones y áreas húmedas en pisos superiores sobre losa',
        'Cuartos de baño, duchas de obra y zonas húmedas sobre muros de concreto, ICF o drywall resistente a humedad',
        'Protección flexible contra filtraciones y eflorescencias salinas'
      ],
      steps: [
        { title: '1. Humectación del Sustrato', text: 'Limpie el concreto o repello y humedezca ligeramente sin dejar charcos antes de la aplicación.' },
        { title: '2. Mezclado Mecánico', text: 'Mezcle a baja revolución (400 rpm) durante 3 minutos hasta obtener una pasta tixotrópica homogénea sin grumos.' },
        { title: '3. Aplicación en 2 Capas', text: 'Aplique la primera capa de 1 mm con llana o brocha dura. Incorpore cinta impermeable en esquinas y aplique la 2ª capa tras 4 horas.' },
        { title: '4. Instalación de Cerámica', text: 'Deje curar de 24 a 48 horas antes de instalar el porcelanato directamente encima con adhesivo EA30, EA35 o EA45.' }
      ]
    },
    en: {
      name: 'K50 • Flexible Cementitious Waterproofing Membrane',
      categoryTitle: 'Family 2: Primers & Waterproofing • 20 kg Bucket',
      tagline: 'Under-Tile Flexible Barrier • Pools, Balconies & Showers • Crack-Bridging',
      packagingDetail: '20 kg airtight plastic bucket (Polymer-modified flexible system)',
      tempRange: '8°C to 35°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Approx. 1.5 kg/m² per mm thickness (Recommended 2 coats = 3.0 kg/m²)',
      description: 'Polymer-modified flexible waterproofing coating engineered for reliable under-tile waterproofing in swimming pools, balconies, terraces, bathrooms, and commercial kitchens prior to bonding ceramic or porcelain tile.',
      uses: [
        'Under-tile waterproofing in swimming pools, water features, and spas',
        'Exterior terraces, balconies, and upper-floor wet rooms over concrete slabs',
        'Walk-in showers and wet zones over concrete, ICF walls, or moisture-resistant board',
        'Flexible barrier against water seepage and efflorescence'
      ],
      steps: [
        { title: '1. Substrate Dampening', text: 'Clean concrete or render and pre-dampen to a saturated surface-dry (SSD) condition without standing water.' },
        { title: '2. Low-Speed Mixing', text: 'Mix with a low-speed drill (400 rpm) for 3 minutes until a smooth, lump-free slurry is achieved.' },
        { title: '3. Two-Coat Application', text: 'Apply first 1 mm coat with a trowel or stiff brush. Embed waterproofing tape at corners and apply 2nd coat after 4 hours.' },
        { title: '4. Direct Tile Bonding', text: 'Cure for 24 to 48 hours before bonding porcelain tile directly on top using EA30, EA35, or EA45.' }
      ]
    }
  },
  {
    id: 'rc60',
    code: 'RC60',
    family: 'fam2',
    packagingType: 'bucket',
    weightOrVolume: '20 KG',
    normOrClass: 'EN 1504-2 • Presión Hidrostática Positiva y Negativa',
    accentColor: '#0f4c5c',
    bandGradient: 'linear-gradient(135deg, #164e63 0%, #0f4c5c 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/B-TAG-IMP1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/B-TAG-IMP1.jpg',
    es: {
      name: 'RC60 • Recubrimiento Impermeable para Cisternas y Muros',
      categoryTitle: 'Familia 2: Imprimantes e Impermeabilizantes • Cubeta 20 kg',
      tagline: 'Resiste Presión Positiva y Negativa • Apto para Agua Potable • Cimentaciones e ICF',
      packagingDetail: 'Cubeta plástica hermética de 20 kg',
      tempRange: '8°C a 35°C',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: 'Aprox. 2.0 a 3.0 kg/m² en dos manos cruzadas',
      description: 'Recubrimiento impermeabilizante mineral de alta resistencia hidrostática diseñado para sellar y proteger estructuras de concreto sometidas a presión de agua positiva (cisternas y tanques) y presión negativa (sótanos, muros de contención, fosos de ascensor y cimentaciones).',
      uses: [
        'Cisternas de agua potable, tanques de almacenamiento, albercas y plantas de tratamiento',
        'Muros de contención subterráneos, sótanos, cimentaciones y paredes enterradas de sistemas ICF',
        'Fosos de elevadores, túneles, canales de riego y jardineras estructurales',
        'Barrera antihumedad por capilaridad ascendente en sobrecimientos'
      ],
      steps: [
        { title: '1. Saturación del Sustrato', text: 'Abra el poro del concreto eliminando lechada superficial y sature con agua limpia sin dejar agua libre.' },
        { title: '2. Preparación de la Mezcla', text: 'Mezcle hasta obtener una consistencia de pintura espesa o pasta trabajable con brocha de cerdas duras o llana.' },
        { title: '3. Aplicación de 2 a 3 Capas', text: 'Aplique la primera mano frotando firmemente contra el poro del concreto; aplique la segunda mano cruzada tras 4 a 6 horas.' },
        { title: '4. Curado Húmedo', text: 'Mantenga húmedo mediante rocío fino de agua durante las primeras 48 horas. Llenado de cisternas tras 7 días.' }
      ]
    },
    en: {
      name: 'RC60 • Cistern & Retaining Wall Waterproof Coating',
      categoryTitle: 'Family 2: Primers & Waterproofing • 20 kg Bucket',
      tagline: 'Positive & Negative Hydrostatic Pressure • Potable Water Safe • Foundations & ICF',
      packagingDetail: '20 kg airtight plastic bucket',
      tempRange: '8°C to 35°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Approx. 2.0 to 3.0 kg/m² in two cross-applied coats',
      description: 'High hydrostatic-resistance waterproofing coating engineered to seal and protect concrete structures subjected to positive water pressure (potable water cisterns and tanks) and negative water pressure (basements, retaining walls, elevator pits, and foundations).',
      uses: [
        'Potable water cisterns, storage tanks, reservoirs, and water treatment basins',
        'Below-grade retaining walls, basements, foundations, and buried ICF walls',
        'Elevator pits, utility tunnels, irrigation channels, and structural planters',
        'Rising damp barrier on foundation beams and plinth walls'
      ],
      steps: [
        { title: '1. Substrate Saturation', text: 'Clean concrete to open surface pores and pre-wet with clean water to a saturated surface-dry state.' },
        { title: '2. Slurry Preparation', text: 'Mix to a thick brushable slurry or trowelable consistency free of lumps.' },
        { title: '3. 2- to 3-Coat Application', text: 'Scrub the first coat firmly into the concrete pores; apply the second coat perpendicularly after 4–6 hours.' },
        { title: '4. Moist Curing', text: 'Mist cure with clean water for the first 48 hours. Allow 7 days before filling water tanks.' }
      ]
    }
  },
  {
    id: 'r50',
    code: 'R50',
    family: 'fam2',
    packagingType: 'bucket',
    weightOrVolume: '20 KG',
    normOrClass: 'ASTM C1059 Tipo II • Resina Puente de Adherencia',
    accentColor: '#115e59',
    bandGradient: 'linear-gradient(135deg, #0f766e 0%, #115e59 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/B-TAG-IMP1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/B-TAG-IMP1.jpg',
    es: {
      name: 'R50 • Resina Acrílica Puente de Adherencia y Aditivo',
      categoryTitle: 'Familia 2: Imprimantes e Impermeabilizantes • Cubeta 20 kg',
      tagline: 'Unión Concreto Nuevo a Viejo • Aditivo Mejorador de Morteros • Mayor Flexibilidad',
      packagingDetail: 'Cubeta plástica hermética de 20 kg (Emulsión polimérica concentrada)',
      tempRange: '5°C a 40°C',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: 'Como puente: 5 a 7 m²/kg • Como aditivo: 10% a 15% del peso del cemento',
      description: 'Emulsión de resina sintética de alto desempeño diseñada para funcionar como puente de adherencia monolítico entre concreto o mortero nuevo y viejo, y como aditivo mejorador de mezclas cementicias en obra para incrementar adherencia, impermeabilidad y resistencia a la abrasión.',
      uses: [
        'Puente de adherencia para unir repello, pisos o reparaciones de concreto nuevo sobre concreto existente',
        'Aditivo fortificante para morteros de repello sobre poliestireno EPS en muros AZZUL ICF',
        'Lechadas de adherencia (lechada polimérica) para nivelaciones de piso y parches estructurales',
        'Reducción de fisuración por retracción y aumento de impermeabilidad en mezclas de albañilería'
      ],
      steps: [
        { title: '1. Limpieza del Sustrato Base', text: 'Retire polvo, lechada suelta o desmoldantes del concreto antiguo y humedezca ligeramente.' },
        { title: '2. Uso como Puente de Adherencia', text: 'Aplique R50 puro o mezclado 1:1 con agua y cemento formando una lechada; vierta el mortero nuevo mientras el puente esté fresco ("fresco sobre fresco").' },
        { title: '3. Uso como Aditivo de Mezcla', text: 'Diluya 1 parte de R50 en 2 a 3 partes de agua de amasado y utilice esta solución para preparar el mortero o repello.' },
        { title: '4. Fraguado Mejorado', text: 'Aumenta en más de un 200% la adherencia a tensión y reduce drásticamente el polvo superficial.' }
      ]
    },
    en: {
      name: 'R50 • Acrylic Bonding Agent & Mortar Admixture',
      categoryTitle: 'Family 2: Primers & Waterproofing • 20 kg Bucket',
      tagline: 'New-to-Old Concrete Bond • Mortar Fortifying Admixture • Enhanced Flexibility',
      packagingDetail: '20 kg airtight plastic bucket (Concentrated polymer emulsion)',
      tempRange: '5°C to 40°C',
      shelfLife: '12 months in unopened original container',
      yieldSummary: 'Bond coat: 5 to 7 m²/kg • Admixture: 10% to 15% by cement weight',
      description: 'High-performance synthetic resin emulsion engineered both as a monolithic bonding bridge between new and existing concrete/mortar, and as a fortifying admixture for job-site cement mixes to boost tensile adhesion, water resistance, and abrasion durability.',
      uses: [
        'Bonding bridge for new render, toppings, or concrete patches over existing concrete',
        'Fortifying polymer admixture for base-coat renders applied over EPS in AZZUL ICF walls',
        'Polymer bonding slurries for floor screeds and structural patch repairs',
        'Reducing plastic shrinkage cracking and increasing water resistance in site mortars'
      ],
      steps: [
        { title: '1. Base Substrate Cleaning', text: 'Remove dust, laitance, and form-release oil from existing concrete and dampen lightly.' },
        { title: '2. As a Bonding Bridge', text: 'Apply R50 neat or mixed 1:1 with water and cement as a bonding slurry; place new mortar wet-on-wet while tacky.' },
        { title: '3. As a Mortar Admixture', text: 'Blend 1 part R50 with 2–3 parts gauging water and use this liquid to mix the cement mortar or render.' },
        { title: '4. Fortified Cure', text: 'Increases tensile bond strength by over 200% and eliminates surface dusting.' }
      ]
    }
  },

  // =========================================================================
  // FAMILIA 3: MORTEROS Y ALTA RESISTENCIA (SACOS KRAFT 20 KG | ROJO ÓXIDO)
  // =========================================================================
  {
    id: 'gp55',
    code: 'GP55',
    family: 'fam3',
    packagingType: 'sack',
    weightOrVolume: '20 KG',
    normOrClass: 'ASTM C1107 / EN 1504-6 • Precision Grout',
    accentColor: '#7f1d1d',
    bandGradient: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/C-TAG-MORT1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/C-TAG-MORT1.jpg',
    es: {
      name: 'GP55 • Mortero Sin Contracción (Grout)',
      categoryTitle: 'Familia 3: Morteros y Alta Resistencia • Saco Kraft 20 kg',
      tagline: 'Alta Fluidez • Expansión Controlada • Alta Resistencia Estructural (>55 MPa)',
      packagingDetail: 'Saco Kraft multicapa de 20 kg con barrera antihumedad',
      tempRange: '+5°C a +35°C',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: 'Aprox. 10.5 a 10.8 litros de mezcla por saco de 20 kg',
      description: 'Mortero cementoso versátil y de alta calidad que no se encoge, diseñado para aplicaciones de lechada de precisión (grouting), fijación de pernos y relleno estructural. Su expansión controlada compensa el asentamiento en la fase plástica asegurando soporte total.',
      uses: [
        'Nivelación y lechada de placas base para maquinaria pesada, columnas metálicas y turbinas',
        'Anclaje de pernos estructurales, barras de acero, pasamanos y elementos prefabricados',
        'Relleno de juntas estructurales, penetraciones de tuberías y oquedades en concreto monolítico ICF',
        'Reparación estructural de alta resistencia a compresión en puentes y naves industriales'
      ],
      steps: [
        { title: '1. Preparación y Encofrado', text: 'El sustrato debe estar limpio, sano, rugoso y saturado de agua durante 6 h previas (sin agua estancada). Selle el encofrado perimetral.' },
        { title: '2. Proporción de Mezcla', text: 'Añada el saco de 20 kg de GP55 a agua limpia: 3.0–3.5 L para consistencia plástica/llana, o 3.8–4.2 L para consistencia fluida autonivelante.' },
        { title: '3. Aplicación Continua', text: 'Vierta o bombee el mortero mezclado desde un solo lado para expulsar el aire atrapado, en secciones de 10 mm a 100 mm de espesor.' },
        { title: '4. Curado y Protección', text: 'Rendimiento: 10.5 a 10.8 L por bolsa de 20 kg. Proteja del secado rápido cubriendo con membrana o agua al menos 24 horas.' }
      ]
    },
    en: {
      name: 'GP55 • Non-Shrink Precision Grout',
      categoryTitle: 'Family 3: Mortars & High Strength • 20 kg Kraft Sack',
      tagline: 'High Flowability • Controlled Expansion • High Compressive Strength (>55 MPa)',
      packagingDetail: '20 kg multi-layer Kraft sack with moisture barrier',
      tempRange: '+5°C to +35°C',
      shelfLife: '12 months in unopened original sack',
      yieldSummary: 'Approx. 10.5 to 10.8 liters of mixed grout per 20 kg sack',
      description: 'High-strength non-shrink cementitious precision grout engineered for baseplate grouting, anchor bolt fixing, and structural void filling. Controlled positive expansion compensates for plastic-stage settlement ensuring 100% bearing area.',
      uses: [
        'Grouting under heavy machinery baseplates, structural steel columns, and crane rails',
        'Anchoring structural bolts, rebar dowels, railings, and precast concrete elements',
        'Filling structural joints, pipe penetrations, and honeycombs in monolithic ICF concrete',
        'High-compressive-strength structural repairs in bridges and industrial facilities'
      ],
      steps: [
        { title: '1. Substrate & Formwork Prep', text: 'Substrate must be clean, sound, roughened, and pre-soaked to SSD condition. Seal formwork watertight.' },
        { title: '2. Water Ratio & Mixing', text: 'Add 20 kg of GP55 to clean water: 3.0–3.5 L for trowelable consistency, or 3.8–4.2 L for flowable pouring consistency.' },
        { title: '3. Continuous Pouring', text: 'Pour or pump continuously from one side to expel trapped air in thicknesses from 10 mm to 100 mm.' },
        { title: '4. Curing & Yield', text: 'Yield: 10.5 to 10.8 L per 20 kg sack. Protect exposed surfaces from rapid drying by moist curing for at least 24 hours.' }
      ]
    }
  },
  {
    id: 'rm50',
    code: 'RM50',
    family: 'fam3',
    packagingType: 'sack',
    weightOrVolume: '20 KG',
    normOrClass: 'EN 1504-3 Clase R4 • Reparación Estructural',
    accentColor: '#7f1d1d',
    bandGradient: 'linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/C-TAG-MORT1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/C-TAG-MORT1.jpg',
    es: {
      name: 'RM50 • Mortero Estructural de Reparación',
      categoryTitle: 'Familia 3: Morteros y Alta Resistencia • Saco Kraft 20 kg',
      tagline: 'Tixotrópico sin Desprendimiento • Reforzado con Microfibras • Clase R4',
      packagingDetail: 'Saco Kraft multicapa de 20 kg',
      tempRange: '+5°C a +35°C',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: 'Aprox. 1.85 kg/m² por mm de espesor (Espesor de 5 a 50 mm por capa)',
      description: 'Mortero cementoso monocomponente tixotrópico modificado con polímeros, humo de sílice y microfibras sintéticas para la restauración y perfilado estructural de concreto armado en muros verticales, columnas, vigas y losas sin necesidad de encofrado.',
      uses: [
        'Reparación estructural de columnas, vigas, balcones y bordes de losas deteriorados por corrosión',
        'Restauración de segregaciones ("cangrejeras") y recubrimiento de acero de refuerzo',
        'Nivelación y perfilado de alta resistencia sobre muros de concreto e ICF',
        'Reconstrucción de aristas, gradas industriales y elementos prefabricados'
      ],
      steps: [
        { title: '1. Saneamiento y Pasivación', text: 'Retire el concreto deteriorado hasta llegar a base firme, limpie el óxido del acero y humedezca el sustrato a saturación.' },
        { title: '2. Mezclado con Agua', text: 'Mezcle un saco de 20 kg de RM50 con 3.2 a 3.5 litros de agua limpia durante 3–4 minutos hasta obtener una pasta cohesiva.' },
        { title: '3. Aplicación Tixotrópica', text: 'Aplique con llana presionando firmemente en espesores de 5 mm hasta 50 mm en vertical sin descolgamiento.' },
        { title: '4. Acabado y Curado', text: 'Dé acabado con flota húmeda cuando inicie el fraguado (30–45 min) y mantenga curado húmedo durante 48 horas.' }
      ]
    },
    en: {
      name: 'RM50 • Structural Repair Mortar',
      categoryTitle: 'Family 3: Mortars & High Strength • 20 kg Kraft Sack',
      tagline: 'Non-Sag Thixotropic • Micro-Fiber Reinforced • EN 1504-3 Class R4',
      packagingDetail: '20 kg multi-layer Kraft sack',
      tempRange: '+5°C to +35°C',
      shelfLife: '12 months in unopened original sack',
      yieldSummary: 'Approx. 1.85 kg/m² per mm thickness (5 to 50 mm build per layer)',
      description: 'One-component polymer-modified thixotropic cementitious mortar reinforced with silica fume and synthetic micro-fibers for overhead and vertical structural restoration of reinforced concrete columns, beams, and slabs without formwork.',
      uses: [
        'Structural repair of spalled columns, beams, balconies, and slab edges damaged by rebar corrosion',
        'Restoring concrete honeycombs and re-establishing structural rebar cover',
        'High-strength profiling and patching on monolithic concrete and ICF walls',
        'Rebuilding concrete steps, industrial curbs, and precast elements'
      ],
      steps: [
        { title: '1. Sounding & Rebar Prep', text: 'Chip away deteriorated concrete to sound substrate, clean rusted rebar, and pre-wet concrete to SSD.' },
        { title: '2. Mixing Ratio', text: 'Mix a 20 kg sack of RM50 with 3.2 to 3.5 liters of clean water for 3–4 minutes until cohesive.' },
        { title: '3. Non-Sag Application', text: 'Press firmly into the repair zone with a trowel in thicknesses from 5 mm up to 50 mm vertically without sagging.' },
        { title: '4. Finishing & Curing', text: 'Float smooth upon initial set (30–45 min) and moist-cure for at least 48 hours.' }
      ]
    }
  },
  {
    id: 'fl30',
    code: 'FL30',
    family: 'fam3',
    packagingType: 'sack',
    weightOrVolume: '20 KG',
    normOrClass: 'EN 13813 CT-C30-F7 • Autonivelante',
    accentColor: '#7f1d1d',
    bandGradient: 'linear-gradient(135deg, #7f1d1d 0%, #b91c1c 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/C-TAG-MORT1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/C-TAG-MORT1.jpg',
    es: {
      name: 'FL30 • Mortero Autonivelante de Alta Fluidez',
      categoryTitle: 'Familia 3: Morteros y Alta Resistencia • Saco Kraft 20 kg',
      tagline: 'Acabado Espejo sin Contracción • Tránsito Peatonal en 4h • Espesor 3 a 30 mm',
      packagingDetail: 'Saco Kraft multicapa de 20 kg',
      tempRange: '+10°C a +30°C',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: 'Aprox. 1.65 kg/m² por cada 1 mm de espesor nivelado',
      description: 'Mortero cementoso autonivelante de fraguado rápido diseñado para nivelar y alisar losas de concreto interiores antes de la instalación de pisos vinílicos (LVT/SPC), madera de ingeniería, alfombras, recubrimientos epóxicos o porcelanatos de gran formato.',
      uses: [
        'Nivelación milimétrica de losas de concreto irregulares en interiores residenciales y comerciales',
        'Base perfectamente plana previa a pisos laminados, vinílicos SPC, parquet y resinas epóxicas',
        'Corrección de pendientes y desniveles de 3 mm a 30 mm en una sola vaciada',
        'Renovación rápida de pisos en oficinas, hospitales, hoteles y locales comerciales'
      ],
      steps: [
        { title: '1. Imprimación Obligatoria con BP10', text: 'Limpie la losa libre de polvo y aplique una capa uniforme de imprimante acrílico BP10 para sellar poros y evitar burbujas.' },
        { title: '2. Mezclado de Alta Fluidez', text: 'Vierta 20 kg de FL30 en 4.4 a 4.6 litros de agua limpia y mezcle con taladro a 600 rpm durante 2–3 minutos.' },
        { title: '3. Vaciado y Extendido', text: 'Vierta la mezcla sobre el piso e iguale con llana dentada o rastrillo calibrador; pase rodillo de púas para liberar aire.' },
        { title: '4. Puesta en Servicio Rápida', text: 'Transitable peatonalmente en 3 a 4 horas; listo para instalar cerámica en 24 horas o pisos sensibles a humedad en 48 h.' }
      ]
    },
    en: {
      name: 'FL30 • High-Flow Self-Leveling Underlayment',
      categoryTitle: 'Family 3: Mortars & High Strength • 20 kg Kraft Sack',
      tagline: 'Mirror-Flat Finish • Walkable in 4 Hours • 3 to 30 mm Thickness',
      packagingDetail: '20 kg multi-layer Kraft sack',
      tempRange: '+10°C to +30°C',
      shelfLife: '12 months in unopened original sack',
      yieldSummary: 'Approx. 1.65 kg/m² per 1 mm of leveled thickness',
      description: 'Fast-setting self-leveling cementitious underlayment engineered to level and smooth interior concrete slabs prior to installing LVT/SPC vinyl flooring, engineered wood, carpet, epoxy coatings, or large-format porcelain tiles.',
      uses: [
        'Precision leveling of uneven interior concrete slabs in residential and commercial buildings',
        'Ultra-flat substrate prior to SPC/LVT vinyl, laminate, hardwood, and epoxy floor coatings',
        'Correcting floor undulations from 3 mm to 30 mm in a single pour',
        'Fast-track floor renovation in offices, hospitals, hotels, and retail spaces'
      ],
      steps: [
        { title: '1. Mandatory Priming with BP10', text: 'Vacuum slab thoroughly and apply an even coat of BP10 Acrylic Primer to seal pores and prevent pinholes.' },
        { title: '2. High-Flow Mixing', text: 'Add 20 kg of FL30 to 4.4–4.6 liters of clean water and mix with a 600 rpm drill paddle for 2–3 minutes.' },
        { title: '3. Pouring & Spiked Rolling', text: 'Pour ribbon-style across the floor, gauge with a rake or smoother, and roll immediately with a spiked roller.' },
        { title: '4. Fast Foot Traffic', text: 'Walkable in 3 to 4 hours; ready for ceramic tile in 24 hours or moisture-sensitive flooring in 48 hours.' }
      ]
    }
  },
  {
    id: 'cg2',
    code: 'CG2',
    family: 'fam3',
    packagingType: 'sack',
    weightOrVolume: '20 KG',
    normOrClass: 'EN 13888 CG2 WA • Boquilla / Porcelana Antihongos',
    accentColor: '#7f1d1d',
    bandGradient: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/C-TAG-MORT1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/C-TAG-MORT1.jpg',
    es: {
      name: 'CG2 • Boquilla / Porcelana Cementosa Mejorada',
      categoryTitle: 'Familia 3: Morteros y Alta Resistencia • Saco Kraft 20 kg',
      tagline: 'Baja Absorción de Agua (WA) • Alta Resistencia a la Abrasión • Antihongos y Sin Fisuras',
      packagingDetail: 'Saco Kraft multicapa de 20 kg',
      tempRange: '+5°C a +35°C',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: 'Aprox. 0.3 a 0.8 kg/m² según formato de baldosa y ancho de junta (1 a 10 mm)',
      description: 'Mortero cementoso modificado con polímeros e hidrofugantes (Norma Europea EN 13888 Clase CG2 WA) para el sellado y emboquillado decorativo de juntas entre baldosas cerámicas, porcelanato, mármol y mosaico. Colores estables libres de eflorescencia.',
      uses: [
        'Emboquillado de juntas de 1 mm a 10 mm en pisos y paredes de cerámica y porcelanato',
        'Baños, duchas, cocinas, terrazas exteriores, fachadas y piscinas residenciales',
        'Pisos comerciales de alto tránsito con requerimiento de resistencia a la abrasión y manchas',
        'Complemento ideal para instalaciones realizadas con la familia de adhesivos EA20–EA45'
      ],
      steps: [
        { title: '1. Limpieza de las Juntas', text: 'Espere al menos 24 horas tras pegar la cerámica. Verifique que las juntas estén limpias y libres de restos de adhesivo.' },
        { title: '2. Mezclado Cremoso', text: 'Mezcle 20 kg de CG2 con 5.2 a 5.6 L de agua limpia hasta lograr una pasta fina; deje reposar 3 min y remezcle.' },
        { title: '3. Relleno Diagonal con Flota de Goma', text: 'Extienda la boquilla en sentido diagonal a las juntas con llana de caucho duro, compactando totalmente las ranuras.' },
        { title: '4. Limpieza y Perfilado', text: 'Cuando la pasta pierda brillo superficial (15–30 min), limpie en diagonal con esponja húmeda sin deslavar la junta.' }
      ]
    },
    en: {
      name: 'CG2 • Polymer-Modified Tile Grout (EN 13888)',
      categoryTitle: 'Family 3: Mortars & High Strength • 20 kg Kraft Sack',
      tagline: 'Reduced Water Absorption (WA) • High Abrasion Resistance • Anti-Mold & Crack-Free',
      packagingDetail: '20 kg multi-layer Kraft sack',
      tempRange: '+5°C to +35°C',
      shelfLife: '12 months in unopened original sack',
      yieldSummary: 'Approx. 0.3 to 0.8 kg/m² depending on tile size and joint width (1 to 10 mm)',
      description: 'Polymer-modified water-repellent cementitious tile grout (European Standard EN 13888 Class CG2 WA) for filling joints between ceramic tiles, porcelain stoneware, marble, and glass mosaic. Color-fast and efflorescence-free.',
      uses: [
        'Grouting 1 mm to 10 mm joints on interior and exterior ceramic and porcelain floors and walls',
        'Bathrooms, showers, kitchens, exterior terraces, facades, and swimming pools',
        'High-traffic commercial floors requiring superior abrasion and stain resistance',
        'System companion for tile installations bonded with EA20–EA45 adhesives'
      ],
      steps: [
        { title: '1. Joint Preparation', text: 'Wait at least 24 hours after tile installation. Ensure joints are clean and raked free of adhesive residue.' },
        { title: '2. Creamy Mixing', text: 'Mix 20 kg of CG2 with 5.2–5.6 L of clean water to a smooth paste; slake for 3 minutes and remix briefly.' },
        { title: '3. Diagonal Rubber Float Application', text: 'Spread grout diagonally across joints using a hard rubber float, packing the joints completely full.' },
        { title: '4. Sponge Cleaning', text: 'Once the grout loses its surface sheen (15–30 min), wipe diagonally with a damp sponge without gouging the joint.' }
      ]
    }
  },

  // =========================================================================
  // FAMILIA 4: ADHESIVOS CERÁMICOS (SACOS KRAFT 20 KG | GRADIENTE NORMA EN 12004)
  // =========================================================================
  {
    id: 'ea20',
    code: 'EA20',
    family: 'fam4',
    packagingType: 'sack',
    weightOrVolume: '20 KG',
    normOrClass: 'Norma EN 12004 C1',
    accentColor: '#1d7a74',
    bandGradient: 'linear-gradient(135deg, #2d8a83 0%, #164e63 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/C-TAG-ADHE1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/C-TAG-ADHE1.jpg',
    es: {
      name: 'EA20 • Adhesivo Cerámico Cementoso Estándar Mejorado',
      categoryTitle: 'Familia 4: Adhesivos Cerámicos • Saco Kraft 20 kg',
      tagline: 'Norma EN 12004 C1 • Excelente Trabajabilidad • Interior y Exterior',
      packagingDetail: 'Saco Kraft multicapa de 20 kg (Gradiente Nivel 1: Verde-Azulado C1)',
      tempRange: '+5°C a +40°C',
      shelfLife: '12 meses en su saco original sin abrir',
      yieldSummary: 'Aprox. 1.25 kg/m² por cada 1 mm de espesor (3.5 a 5 kg/m² según llana)',
      description: 'Adhesivo cementoso modificado con polímeros diseñado para fijar baldosas cerámicas y de porcelanato estándar sobre concreto y repello. Proporciona adherencia confiable (≥1.0 N/mm²), consistencia cremosa y buena resistencia al deslizamiento.',
      uses: [
        'Instalación en pisos y paredes interiores o exteriores de cerámica, mosaico y porcelanato (formatos hasta 400x800 mm)',
        'Baños, cocinas, pasillos, balcones residenciales y áreas comerciales ligeras',
        'Aplicación directa sobre losas de concreto, carpetas de mortero y muros repellados',
        'Obras residenciales en serie y proyectos habitacionales con sistema AZZUL ICF'
      ],
      steps: [
        { title: '1. Preparación del Sustrato', text: 'Sustrato firme, limpio y libre de polvo, pintura o grasa; humedezca superficies muy absorbentes o imprima con BP10.' },
        { title: '2. Mezclado y Reposo', text: 'Mezcle 20 kg de EA20 en 4.8 a 5.0 L de agua limpia a baja velocidad por 3–5 min; deje reposar 5–10 min y remezcle.' },
        { title: '3. Aplicación con Llana Dentada', text: 'Extienda con llana dentada y presione la baldosa con ligero movimiento giratorio dentro del tiempo abierto (20 min). En piezas de baja absorción aplique doble encolado.' },
        { title: '4. Rendimiento y Emboquillado', text: 'Vida útil de la mezcla (Pot Life): 3 horas. Tiempo de ajuste: 20 min. Emboquillado con CG2 mínimo 24 horas después.' }
      ]
    },
    en: {
      name: 'EA20 • Improved Standard Ceramic Tile Adhesive',
      categoryTitle: 'Family 4: Ceramic Tile Adhesives • 20 kg Kraft Sack',
      tagline: 'EN 12004 C1 Standard • Creamy Workability • Interior & Exterior',
      packagingDetail: '20 kg multi-layer Kraft sack (Gradient Tier 1: Teal C1)',
      tempRange: '+5°C to +40°C',
      shelfLife: '12 months in unopened original sack',
      yieldSummary: 'Approx. 1.25 kg/m² per 1 mm thickness (3.5 to 5 kg/m² depending on trowel notch)',
      description: 'Polymer-modified cementitious adhesive engineered to bond ceramic and standard porcelain tiles over concrete and cement plaster. Delivers reliable tensile bond strength (≥1.0 N/mm²), creamy consistency, and slip resistance.',
      uses: [
        'Interior and exterior floors and walls with ceramic, mosaic, and porcelain tiles (sizes up to 400x800 mm)',
        'Bathrooms, kitchens, corridors, residential balconies, and light commercial areas',
        'Direct bonding onto concrete slabs, cement screeds, and rendered walls',
        'Residential developments and housing projects built with AZZUL ICF'
      ],
      steps: [
        { title: '1. Substrate Preparation', text: 'Ensure substrate is sound, clean, and free of dust, paint, or grease; dampen absorbent surfaces or prime with BP10.' },
        { title: '2. Mixing & Slaking', text: 'Mix 20 kg of EA20 into 4.8–5.0 L of clean water at low speed for 3–5 min; let slake 5–10 min and remix.' },
        { title: '3. Notched Trowel Application', text: 'Comb with a notched trowel and press tiles in with a slight twisting motion within the 20-min open time. Back-butter low-absorption tiles.' },
        { title: '4. Pot Life & Grouting', text: 'Pot life: 3 hours. Adjustability time: 20 min. Grout with CG2 after a minimum of 24 hours.' }
      ]
    }
  },
  {
    id: 'ea25',
    code: 'EA25',
    family: 'fam4',
    packagingType: 'sack',
    weightOrVolume: '20 KG',
    normOrClass: 'Norma EN 12004 C1T • Antideslizante',
    accentColor: '#0e7490',
    bandGradient: 'linear-gradient(135deg, #0d9488 0%, #0e7490 50%, #155e75 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/C-TAG-ADHE1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/C-TAG-ADHE1.jpg',
    es: {
      name: 'EA25 • Adhesivo Cerámico Antideslizante para Muros',
      categoryTitle: 'Familia 4: Adhesivos Cerámicos • Saco Kraft 20 kg',
      tagline: 'Norma EN 12004 C1T • Cero Deslizamiento Vertical (≤0.5 mm) • Enchape Descendente',
      packagingDetail: 'Saco Kraft multicapa de 20 kg (Gradiente Nivel 2: Cian-Turquesa C1T)',
      tempRange: '+5°C a +40°C',
      shelfLife: '12 meses en su saco original sin abrir',
      yieldSummary: 'Aprox. 1.25 kg/m² por mm de espesor (3.5 a 5.5 kg/m²)',
      description: 'Adhesivo cementoso tixotrópico modificado con polímeros (Clase C1T según EN 12004) formulado con reología antideslizante para instalar revestimientos cerámicos y porcelánicos en paredes verticales sin que las piezas se corran hacia abajo y sin requerir crucetas de soporte inferior.',
      uses: [
        'Revestimiento vertical de paredes en baños, duchas, cocinas y fachadas interiores',
        'Instalación rápida de arriba hacia abajo sin deslizamiento (deslizamiento ≤ 0.5 mm)',
        'Pegado de cerámica, azulejo, gres y fachaletas decorativas sobre muros de concreto, repello o drywall resistente a humedad',
        'Pisos y muros interiores y exteriores con formatos hasta 600x600 mm'
      ],
      steps: [
        { title: '1. Verificación de Plomo y Limpieza', text: 'Compruebe la planicidad del muro y elimine polvo, desmoldantes o restos de yeso suelto.' },
        { title: '2. Mezclado Homogéneo', text: 'Mezcle 20 kg de EA25 con 4.8 a 5.2 L de agua limpia durante 4 minutos; deje reposar 5 minutos y vuelva a batir.' },
        { title: '3. Peinado Vertical sin Deslizamiento', text: 'Extienda con llana dentada de 6x6 mm o 8x8 mm y asiente la pieza firmemente; su tixotropía sostiene la baldosa al instante.' },
        { title: '4. Limpieza y Fraguado', text: 'Tiempo de corrección: 25 min. Emboquille las juntas verticales tras 16 a 24 horas.' }
      ]
    },
    en: {
      name: 'EA25 • Non-Slip Wall & Floor Tile Adhesive',
      categoryTitle: 'Family 4: Ceramic Tile Adhesives • 20 kg Kraft Sack',
      tagline: 'EN 12004 C1T Standard • Zero Vertical Slip (≤0.5 mm) • Top-Down Wall Tiling',
      packagingDetail: '20 kg multi-layer Kraft sack (Gradient Tier 2: Cyan-Teal C1T)',
      tempRange: '+5°C to +40°C',
      shelfLife: '12 months in unopened original sack',
      yieldSummary: 'Approx. 1.25 kg/m² per mm thickness (3.5 to 5.5 kg/m²)',
      description: 'Thixotropic polymer-modified cementitious adhesive (EN 12004 Class C1T) formulated with anti-slip rheology for installing ceramic and porcelain wall tiles on vertical surfaces without downward sagging or ledger boards.',
      uses: [
        'Vertical wall tiling in bathrooms, shower enclosures, kitchens, and feature walls',
        'Fast top-down tile installation with zero vertical slip (slip ≤ 0.5 mm)',
        'Bonding ceramic tiles, subway tiles, stoneware, and decorative stone veneers on rendered or drywall walls',
        'Interior and exterior floors and walls for tile formats up to 600x600 mm'
      ],
      steps: [
        { title: '1. Plumb & Surface Check', text: 'Verify wall flatness and remove dust, form oil, or loose plaster residue.' },
        { title: '2. Homogeneous Mixing', text: 'Mix 20 kg of EA25 with 4.8–5.2 L of clean water for 4 minutes; slake for 5 minutes and remix.' },
        { title: '3. Non-Slip Vertical Combing', text: 'Comb with a 6x6 mm or 8x8 mm notched trowel and press tiles in place; thixotropic grab holds tiles immediately.' },
        { title: '4. Adjustment & Grouting', text: 'Adjustability time: 25 min. Grout wall joints after 16 to 24 hours.' }
      ]
    }
  },
  {
    id: 'ea30',
    code: 'EA30',
    family: 'fam4',
    packagingType: 'sack',
    weightOrVolume: '20 KG',
    normOrClass: 'Norma EN 12004 C2T • Especial Porcelanato',
    accentColor: '#0284c7',
    bandGradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #1e3a8a 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/C-TAG-ADHE1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/C-TAG-ADHE1.jpg',
    es: {
      name: 'EA30 • Adhesivo Especial para Porcelanato Interior/Exterior',
      categoryTitle: 'Familia 4: Adhesivos Cerámicos • Saco Kraft 20 kg',
      tagline: 'Norma EN 12004 C2T • Alta Adherencia Química (≥1.0 N/mm² Envejecido) • Baja Absorción (<0.5%)',
      packagingDetail: 'Saco Kraft multicapa de 20 kg (Gradiente Nivel 3: Azul Cerámico C2T)',
      tempRange: '+5°C a +40°C',
      shelfLife: '12 meses en su saco original sin abrir',
      yieldSummary: 'Aprox. 4.0 a 6.0 kg/m² en capa simple o doble encolado',
      description: 'Adhesivo cementoso mejorado de alta concentración polimérica (Clase C2T según EN 12004) desarrollado específicamente para garantizar anclaje químico y mecánico sobre piezas de nula o muy baja absorción de agua (<0.5%) como porcelanato técnico, gres porcelánico y mármol.',
      uses: [
        'Instalación de porcelanato rectificado, gres porcelánico y cerámica vitrificada en interiores y exteriores',
        'Pisos y muros de residencias de lujo, comercios, restaurantes y lobbies corporativos (formatos hasta 800x800 mm)',
        'Enchape sobre impermeabilizantes cementosos flexibles K50 en balcones y baños',
        'Pegado seguro sobre concreto curado, losas niveladas con FL30 y muros del sistema AZZUL ICF'
      ],
      steps: [
        { title: '1. Preparación del Soporte', text: 'El soporte debe estar limpio, plano y libre de humedad capilar ascendente. En concreto liso imprima con BP10.' },
        { title: '2. Mezclado Mecánico', text: 'Mezcle 20 kg de EA30 en 5.0 a 5.4 L de agua limpia con batidor eléctrico a bajas revoluciones hasta lograr pasta cremosa.' },
        { title: '3. Doble Encolado Recomendado', text: 'En formatos mayores a 400x400 mm aplique adhesivo con llana de 10 mm en el piso y una capa fina lisa al reverso del porcelanato.' },
        { title: '4. Asentado y Curado', text: 'Golpee suavemente con mazo de goma blanca para lograr >90% de contacto. Tránsito ligero a las 24 horas.' }
      ]
    },
    en: {
      name: 'EA30 • Specialized Porcelain Tile Adhesive (C2T)',
      categoryTitle: 'Family 4: Ceramic Tile Adhesives • 20 kg Kraft Sack',
      tagline: 'EN 12004 C2T Standard • High Chemical Bond • Low-Porosity Porcelain (<0.5%)',
      packagingDetail: '20 kg multi-layer Kraft sack (Gradient Tier 3: Ceramic Blue C2T)',
      tempRange: '+5°C to +40°C',
      shelfLife: '12 months in unopened original sack',
      yieldSummary: 'Approx. 4.0 to 6.0 kg/m² for single or back-buttered application',
      description: 'Improved high-polymer cementitious tile adhesive (EN 12004 Class C2T) specifically engineered to create a powerful chemical and mechanical bond on impervious or ultra-low-absorption tiles (<0.5%) such as rectified porcelain stoneware and natural marble.',
      uses: [
        'Interior and exterior installation of rectified porcelain, technical stoneware, and vitrified tiles',
        'Luxury residential floors, retail stores, restaurants, and corporate lobbies (formats up to 800x800 mm)',
        'Tiling directly over K50 flexible waterproofing membranes on balconies and bathrooms',
        'High-bond installation over cured concrete, FL30 leveled slabs, and AZZUL ICF walls'
      ],
      steps: [
        { title: '1. Substrate Preparation', text: 'Ensure substrate is clean, flat, and stable. Prime dense smooth concrete with BP10 primer.' },
        { title: '2. Mechanical Mixing', text: 'Mix 20 kg of EA30 into 5.0–5.4 L of clean water with a low-speed paddle mixer until creamy.' },
        { title: '3. Back-Buttering Method', text: 'For tiles larger than 400x400 mm, comb with a 10 mm notched trowel on the substrate and skim-coat the tile back.' },
        { title: '4. Bedding & Cure', text: 'Tap firmly with a white rubber mallet to achieve >90% coverage. Light foot traffic after 24 hours.' }
      ]
    }
  },
  {
    id: 'ea35',
    code: 'EA35',
    family: 'fam4',
    packagingType: 'sack',
    weightOrVolume: '20 KG',
    normOrClass: 'Norma EN 12004 C2TE • Tiempo Abierto Extendido',
    accentColor: '#1d4ed8',
    bandGradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #172554 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/C-TAG-ADHE1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/C-TAG-ADHE1.jpg',
    es: {
      name: 'EA35 • Adhesivo de Alto Desempeño y Tráfico Pesado',
      categoryTitle: 'Familia 4: Adhesivos Cerámicos • Saco Kraft 20 kg',
      tagline: 'Norma EN 12004 C2TE • Tiempo Abierto Extendido (≥30 min) • Climas Cálidos y Piscinas',
      packagingDetail: 'Saco Kraft multicapa de 20 kg (Gradiente Nivel 4: Azul Cobalto Profundo C2TE)',
      tempRange: '+5°C a +40°C (Especial para climas tropicales y viento)',
      shelfLife: '12 meses en su saco original sin abrir',
      yieldSummary: 'Aprox. 4.5 a 6.5 kg/m² (Doble encolado obligatorio en exteriores)',
      description: 'Adhesivo cementoso de alto desempeño con tiempo abierto extendido (Clase C2TE según EN 12004), formulado especialmente para obras en climas cálidos como El Salvador, piscinas, pisos industriales de tráfico intenso y porcelanatos hasta 1000x1000 mm.',
      uses: [
        'Pisos comerciales de tráfico intenso: centros comerciales, aeropuertos, supermercados y hospitales',
        'Instalación en exteriores soleados o ventilados gracias a su tiempo abierto extendido ≥ 30 minutos',
        'Revestimiento de piscinas, fuentes y fachadas expuestas a choques térmicos',
        'Pegado de porcelanato pesado, piedra natural estable, klinker y losetas industriales'
      ],
      steps: [
        { title: '1. Control del Sustrato', text: 'Verifique que la superficie esté limpia y humedezca ligeramente si está expuesta al sol directo para bajar su temperatura.' },
        { title: '2. Mezclado de Alta Retención', text: 'Mezcle 20 kg de EA35 con 5.2 a 5.6 L de agua limpia durante 4 min; repose 5 min y remezcle antes de extender.' },
        { title: '3. Extendido con Tiempo Abierto de 30 min', text: 'Peine con llana de 10x10 mm o 12x12 mm y aplique doble encolado para asegurar 100% de contacto sin oquedades.' },
        { title: '4. Puesta en Servicio', text: 'Tránsito peatonal a las 24 horas; tráfico pesado o llenado de piscinas a los 7–14 días.' }
      ]
    },
    en: {
      name: 'EA35 • High-Performance Extended Open-Time Adhesive',
      categoryTitle: 'Family 4: Ceramic Tile Adhesives • 20 kg Kraft Sack',
      tagline: 'EN 12004 C2TE Standard • Extended Open Time (≥30 min) • Hot Climates & Pools',
      packagingDetail: '20 kg multi-layer Kraft sack (Gradient Tier 4: Deep Cobalt Blue C2TE)',
      tempRange: '+5°C to +40°C (Engineered for tropical heat and breezy job sites)',
      shelfLife: '12 months in unopened original sack',
      yieldSummary: 'Approx. 4.5 to 6.5 kg/m² (Back-buttering required outdoors)',
      description: 'High-performance extended open-time cementitious tile adhesive (EN 12004 Class C2TE), specially formulated for tropical climates, swimming pools, heavy-traffic commercial floors, and porcelain tiles up to 1000x1000 mm.',
      uses: [
        'Heavy-traffic commercial floors: shopping malls, airports, supermarkets, and hospitals',
        'Warm or breezy outdoor installations thanks to ≥ 30-minute extended open time',
        'Swimming pools, fountains, and exterior facades exposed to thermal shock',
        'Bonding heavy porcelain tiles, dimensionally stable natural stone, and quarry tiles'
      ],
      steps: [
        { title: '1. Substrate Temperature Control', text: 'Ensure substrate is clean and lightly mist sun-warmed surfaces to cool them down prior to tiling.' },
        { title: '2. High-Retention Mixing', text: 'Mix 20 kg of EA35 with 5.2–5.6 L of clean water for 4 min; slake 5 min and remix briefly.' },
        { title: '3. 30-Minute Open Time Combing', text: 'Comb with a 10x10 mm or 12x12 mm trowel and back-butter every tile for 100% void-free coverage.' },
        { title: '4. Service Readiness', text: 'Foot traffic after 24 hours; heavy commercial traffic or pool filling after 7–14 days.' }
      ]
    }
  },
  {
    id: 'ea45',
    code: 'EA45',
    family: 'fam4',
    packagingType: 'sack',
    weightOrVolume: '20 KG',
    normOrClass: 'Norma EN 12004 C2TE S1 • Flexible Gran Formato',
    accentColor: '#312e81',
    bandGradient: 'linear-gradient(135deg, #3730a3 0%, #1e1b4b 60%, #0f172a 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/C-TAG-ADHE1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/C-TAG-ADHE1.jpg',
    es: {
      name: 'EA45 • Adhesivo Flexible Gran Formato y Piso sobre Piso',
      categoryTitle: 'Familia 4: Adhesivos Cerámicos • Saco Kraft 20 kg',
      tagline: 'Norma EN 12004 C2TE S1 • Deformable Elástico (≥2.5 mm) • Lajas Gigantes y Piso sobre Piso',
      packagingDetail: 'Saco Kraft multicapa de 20 kg (Gradiente Nivel 5 Tope de Gama: Azul Índigo Imperial C2TE S1)',
      tempRange: '+5°C a +40°C',
      shelfLife: '12 meses en su saco original sin abrir',
      yieldSummary: 'Aprox. 5.0 a 7.5 kg/m² en doble encolado para gran formato',
      description: 'Nuestro adhesivo cementoso tope de gama altamente polimerizado y deformable (Clase C2TE S1 según Norma Europea EN 12004). Absorbe deformaciones del sustrato y tensiones termomecánicas extremas en placas de porcelanato de gran formato (120x240 cm+), fachadas en altura e instalaciones de "Piso sobre Piso" sin demoler.',
      uses: [
        'Placas y láminas de porcelanato de gran formato (60x120 cm, 120x120 cm, 120x240 cm y piedra sinterizada)',
        'Renovación "Piso sobre Piso": pegado directo de porcelanato nuevo sobre cerámica, terrazo o mármol antiguo existente',
        'Fachadas exteriores en altura, terrazas soleadas y losas sujetas a deflexión o vibración estructural',
        'Sistemas de muros termoacústicos AZZUL ICF, paneles de fibrocemento y tableros de yeso'
      ],
      steps: [
        { title: '1. Preparación (Obra Nueva o Piso sobre Piso)', text: 'En piso sobre piso, desengrase con sosa cáustica o detergente alcalino, enjuague y verifique que las baldosas antiguas estén bien adheridas.' },
        { title: '2. Mezclado Polimérico S1', text: 'Mezcle 20 kg de EA45 en 5.4 a 5.8 L de agua limpia a baja velocidad durante 5 min; deje madurar 5 min y remezcle.' },
        { title: '3. Doble Encolado Direccional', text: 'Peine con llana de 12 mm o 15 mm en líneas rectas paralelas (nunca en remolinos) tanto en el sustrato como al reverso de la placa gigante.' },
        { title: '4. Vibrado y Nivelación', text: 'Asiente la placa con ventosas y utilice vibrador de ventosa o llana de goma desde el centro hacia los bordes para expulsar el 100% del aire.' }
      ]
    },
    en: {
      name: 'EA45 • Flexible Large-Format & Tile-over-Tile Adhesive (S1)',
      categoryTitle: 'Family 4: Ceramic Tile Adhesives • 20 kg Kraft Sack',
      tagline: 'EN 12004 C2TE S1 Standard • Deformable Flexible (≥2.5 mm) • Giant Slabs & Tile-on-Tile',
      packagingDetail: '20 kg multi-layer Kraft sack (Gradient Tier 5 Flagship: Royal Indigo C2TE S1)',
      tempRange: '+5°C to +40°C',
      shelfLife: '12 months in unopened original sack',
      yieldSummary: 'Approx. 5.0 to 7.5 kg/m² back-buttered for large-format slabs',
      description: 'Our flagship highly polymer-modified deformable cementitious adhesive (EN 12004 Class C2TE S1). Absorbs substrate deflection and extreme thermo-mechanical shear stresses in giant porcelain slabs (120x240 cm+), high-rise facades, and demolition-free "Tile-over-Tile" renovations.',
      uses: [
        'Large-format and gauged porcelain slabs (60x120 cm, 120x120 cm, 120x240 cm, and sintered stone)',
        '"Tile-over-Tile" remodeling: bonding new porcelain directly over existing glazed tile, terrazzo, or marble',
        'High-rise exterior facades, sun-drenched terraces, and suspended slabs subject to deflection or vibration',
        'AZZUL ICF thermo-acoustic wall systems, fiber-cement boards, and gypsum substrates'
      ],
      steps: [
        { title: '1. Prep (New Slab or Tile-over-Tile)', text: 'For tile-over-tile, degrease existing tiles thoroughly with alkaline cleaner, rinse, and verify old tiles are solidly bonded.' },
        { title: '2. S1 Polymer Mixing', text: 'Mix 20 kg of EA45 into 5.4–5.8 L of clean water at low speed for 5 min; slake 5 min and remix.' },
        { title: '3. Directional Back-Buttering', text: 'Comb with a 12 mm or 15 mm trowel in straight parallel ridges (never swirls) on both the substrate and the back of the slab.' },
        { title: '4. Vibrating & Leveling Clips', text: 'Set the slab using suction cups and work from center outward with a beat block or tile vibrator to expel 100% of trapped air.' }
      ]
    }
  },

  // =========================================================================
  // FAMILIA 5: ACABADOS DECORATIVOS (CUBETAS | TERRACOTA BORGOÑA)
  // =========================================================================
  {
    id: 'at60',
    code: 'AT60',
    family: 'fam5',
    packagingType: 'bucket',
    weightOrVolume: '20 KG',
    normOrClass: 'EN 15824 • Recubrimiento Texturizado Acrílico',
    accentColor: '#5b1316',
    bandGradient: 'linear-gradient(135deg, #5b1316 0%, #7f1d1d 100%)',
    mockupImage: 'assets/BUILDING PRODUCTS/B-TAG-RECUB1.jpg',
    labelImage: 'assets/BUILDING PRODUCTS/B-TAG-RECUB1.jpg',
    es: {
      name: 'AT60 • Recubrimiento Texturizado Acrílico',
      categoryTitle: 'Familia 5: Acabados Decorativos • Cubeta 20 kg',
      tagline: 'Acabado Decorativo • Resistente al Clima • Transpirable e Hidrorrepelente',
      packagingDetail: 'Cubeta plástica hermética de 20 kg (Pasta acrílica texturizada lista para usar)',
      tempRange: '10°C a 32°C (No aplicar bajo lluvia o alta humedad)',
      shelfLife: '12 meses en su empaque original sin abrir',
      yieldSummary: '1.5 a 3.0 m² por kg por capa (Seco al tacto en 30–60 min; curado total en 24 h)',
      description: 'Recubrimiento acrílico premium base agua diseñado para acabados decorativos y texturizados en paredes interiores y exteriores. Proporciona protección duradera, elasticidad frente a microfisuras, permeabilidad al vapor de agua y máxima resistencia a la intemperie.',
      uses: [
        'Paredes exteriores y fachadas arquitectónicas residenciales, hoteleras y comerciales',
        'Capa de acabado final decorativo sobre el sistema constructivo AZZUL ICF',
        'Proyectos de renovación estética e impermeabilización transpirable para superficies nuevas o antiguas',
        'Muros interiores de acento en lobbies, terrazas techadas y áreas sociales'
      ],
      steps: [
        { title: '1. Preparación del Sustrato', text: 'La superficie debe estar limpia, seca y libre de polvo o grasa. Repare grietas previamente con masilla exterior P40 e imprima con BP10.' },
        { title: '2. Homogeneización de la Pasta', text: 'Mezcle bien el contenido de la cubeta de 20 kg antes de usar hasta lograr una textura uniforme.' },
        { title: '3. Aplicación y Diseño de Textura', text: 'Aplique con llana metálica/acrílica, rodillo texturizador, brocha o pistola pulverizadora (tolva) según la textura deseada (floteado, grafiado o gota) en 2 a 3 capas.' },
        { title: '4. Secado y Rendimiento', text: 'Rendimiento: 1.5 a 3.0 m² por kg por capa. Seco al tacto en 30–60 minutos y curado total en 24 horas.' }
      ]
    },
    en: {
      name: 'AT60 • Acrylic Textured Decorative Coating',
      categoryTitle: 'Family 5: Decorative Finishes • 20 kg Bucket',
      tagline: 'Decorative Finish • Weather Resistant • Breathable & Water-Repellent',
      packagingDetail: '20 kg airtight plastic bucket (Ready-to-use textured acrylic paste)',
      tempRange: '10°C to 32°C (Do not apply under rain or high humidity)',
      shelfLife: '12 months in unopened original container',
      yieldSummary: '1.5 to 3.0 m² per kg per coat (Touch-dry in 30–60 min; full cure in 24 h)',
      description: 'Premium water-based acrylic coating engineered for decorative textured finishes on exterior facades and interior walls. Delivers long-lasting weather protection, hairline crack-bridging elasticity, and vapor breathability.',
      uses: [
        'Exterior walls and architectural facades in residential, hospitality, and commercial projects',
        'Final decorative weather-protective finish coat over AZZUL ICF wall systems',
        'Renovation and breathable weatherproofing for new or existing mineral surfaces',
        'Interior accent walls in lobbies, covered terraces, and living spaces'
      ],
      steps: [
        { title: '1. Substrate Preparation', text: 'Surface must be clean, dry, and free of dust or grease. Repair cracks with P40 exterior putty and prime with BP10.' },
        { title: '2. Paste Conditioning', text: 'Stir the 20 kg bucket thoroughly before use to ensure uniform aggregate distribution.' },
        { title: '3. Application & Texturing', text: 'Apply with a steel/plastic trowel, texture roller, brush, or hopper spray gun in 2 to 3 coats depending on desired texture.' },
        { title: '4. Drying & Coverage', text: 'Coverage: 1.5 to 3.0 m² per kg per coat. Touch-dry in 30–60 minutes and fully cured in 24 hours.' }
      ]
    }
  }
];

// =========================================================================
// RENDERIZADOR VISUAL DE EMPAQUE (CARTUCHO 3D / CUBETA PLÁSTICA / SACO KRAFT)
// =========================================================================
function renderPackagingArtwork(product, lang) {
  const t = product[lang] || product.es;
  const fam = AZZUL_BP_FAMILIES[product.family];

  // 1. Cartuchos de Silicona PRO (Imagen 3D real + insignia dual 300mL / 600mL)
  if (product.packagingType === 'cartridge') {
    return `
      <div class="bp-visual-stage bp-stage-cartridge" style="--prod-accent: ${product.accentColor};">
        <div class="bp-stage-glow"></div>
        <div class="bp-pkg-dual-pill">
          <span class="bp-pkg-dot"></span>
          <span>${lang === 'en' ? '300 mL Cartridge • 600 mL Sausage' : 'Cartucho 300 mL • Salchicha 600 mL'}</span>
        </div>
        <div class="bp-cartridge-wrap">
          <img src="${product.mockupImage}" alt="${t.name}" class="bp-cartridge-img" loading="lazy" decoding="async">
          <div class="bp-sausage-mini-badge" title="${lang === 'en' ? 'Also available in 600 mL foil sausage' : 'Disponible también en salchicha de aluminio 600 mL'}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="8" rx="4"/><line x1="2" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="22" y2="12"/></svg>
            <span>+ 600 mL</span>
          </div>
        </div>
        <div class="bp-stage-norm-tag">${product.normOrClass}</div>
      </div>
    `;
  }

  // 2. Cubetas Plásticas (Familias 1, 2 y 5 — Codificación Cromática + Mockup 3D de Cubeta con Arte B-TAG)
  if (product.packagingType === 'bucket') {
    return `
      <div class="bp-visual-stage bp-stage-bucket" style="--prod-accent: ${product.accentColor}; --prod-gradient: ${product.bandGradient};">
        <div class="bp-stage-glow"></div>
        <div class="bp-pkg-dual-pill bp-pill-bucket">
          <span class="bp-pkg-dot" style="background: ${product.accentColor};"></span>
          <span>${lang === 'en' ? `Plastic Bucket • ${product.weightOrVolume}` : `Cubeta Plástica • ${product.weightOrVolume}`}</span>
        </div>
        <div class="bp-bucket-3d" role="img" aria-label="${t.name}">
          <div class="bp-bucket-lid"></div>
          <div class="bp-bucket-Rim"></div>
          <div class="bp-bucket-handle"></div>
          <div class="bp-bucket-body" style="background: ${product.bandGradient};">
            <div class="bp-bucket-wave-pattern"></div>
            <div class="bp-bucket-brand">AZZ<span>UL</span> <small>Building Products</small></div>
            <div class="bp-bucket-code">${product.code}</div>
            <div class="bp-bucket-weight">${product.weightOrVolume}</div>
          </div>
        </div>
        <div class="bp-stage-norm-tag">${product.normOrClass}</div>
      </div>
    `;
  }

  // 3. Sacos Kraft 20 kg (Familias 3 y 4 — Mockup 3D de Saco Kraft con Banda Cromática / Gradiente EN 12004)
  return `
    <div class="bp-visual-stage bp-stage-sack" style="--prod-accent: ${product.accentColor}; --prod-gradient: ${product.bandGradient};">
      <div class="bp-stage-glow"></div>
      <div class="bp-pkg-dual-pill bp-pill-sack">
        <span class="bp-pkg-dot" style="background: ${product.accentColor};"></span>
        <span>${lang === 'en' ? `Kraft Sack • ${product.weightOrVolume}` : `Saco Kraft • ${product.weightOrVolume}`}</span>
      </div>
      <div class="bp-sack-3d" role="img" aria-label="${t.name}">
        <div class="bp-sack-top-stitch"></div>
        <div class="bp-sack-upper">
          <div class="bp-sack-side-code">${product.code}</div>
          <div class="bp-sack-main-area">
            <span class="bp-sack-norm-mini">${product.normOrClass}</span>
            <div class="bp-sack-big-code">${product.code}</div>
          </div>
        </div>
        <div class="bp-sack-lower-band" style="background: ${product.bandGradient};">
          <div class="bp-sack-brand">AZZ<span>UL</span><small>Building Products</small></div>
          <div class="bp-sack-weight">${product.weightOrVolume}</div>
        </div>
      </div>
      <div class="bp-stage-norm-tag">${product.normOrClass}</div>
    </div>
  `;
}

// =========================================================================
// MOTOR DE PESTAÑAS EXCLUSIVAS (#siliconas | #cementicios | #hogar) Y CATÁLOGO
// =========================================================================
(function initBuildingProductsCatalog() {
  const VALID_TABS = ['siliconas', 'cementicios', 'hogar'];
  let activeBpTab = 'siliconas';
  let activeCemFamily = 'all';
  let activeCemPackaging = 'all';
  let currentModalProductId = null;

  function getLang() {
    return localStorage.getItem('preferredLang') || document.documentElement.getAttribute('lang') || 'es';
  }

  function normalizeTabId(raw) {
    if (!raw) return null;
    const clean = String(raw).replace(/^#/, '').trim().toLowerCase();
    if (VALID_TABS.includes(clean)) return clean;
    if (clean === 'silicones' || clean === 'selladores') return 'siliconas';
    if (clean === 'cementitious' || clean === 'morteros' || /^fam[1-5]$/.test(clean)) return 'cementicios';
    if (clean === 'arquitectura' || clean === 'arquitectura-interior' || clean.startsWith('arch-')) return 'hogar';
    return null;
  }

  function renderProductCard(prod, lang) {
    const t = prod[lang] || prod.es;
    const usesPreview = (t.uses || []).slice(0, 2);

    return `
      <article class="bp-product-card" data-product-id="${prod.id}" data-family="${prod.family}" data-packaging="${prod.packagingType}">
        <div class="bp-card-top-bar" style="background: ${prod.bandGradient};"></div>
        ${renderPackagingArtwork(prod, lang)}
        <div class="bp-card-body">
          <div class="bp-card-header-meta">
            <span class="bp-card-code-pill" style="color: ${prod.accentColor}; border-color: ${prod.accentColor}33; background: ${prod.accentColor}12;">${prod.code}</span>
            <span class="bp-card-weight-badge">${prod.weightOrVolume}</span>
          </div>
          <h4 class="bp-card-title">${t.name}</h4>
          <p class="bp-card-tagline">${t.tagline}</p>
          <p class="bp-card-desc">${t.description}</p>

          <div class="bp-card-uses-box">
            <div class="bp-card-uses-label">${lang === 'en' ? 'Recommended Uses:' : 'Usos Recomendados:'}</div>
            <ul class="bp-card-uses-list">
              ${usesPreview.map(u => `<li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>${u}</span></li>`).join('')}
            </ul>
          </div>

          <div class="bp-card-specs-strip">
            <div>
              <small>${lang === 'en' ? 'Coverage / Yield' : 'Rendimiento'}</small>
              <strong>${t.yieldSummary}</strong>
            </div>
          </div>

          <div class="bp-card-actions">
            <button type="button" class="bp-btn-spec" data-open-product="${prod.id}">
              <span>${lang === 'en' ? 'View Technical Sheet & Guide' : 'Ver Ficha Técnica y Uso'}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function bindCardModalTriggers(container) {
    if (!container) return;
    container.querySelectorAll('[data-open-product]').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodId = btn.getAttribute('data-open-product');
        openProductModal(prodId);
      });
    });
  }

  // Renderizar Pestaña 01: Exclusivamente los 7 Selladores de Silicona PRO
  function renderSiliconesPane() {
    const mount = document.getElementById('bp-silicones-mount');
    if (!mount) return;

    const lang = getLang();
    const silicones = AZZUL_BUILDING_PRODUCTS.filter(p => p.family === 'silicones');

    mount.innerHTML = `
      <section class="bp-family-block" id="family-section-silicones" data-family-section="silicones">
        <div class="bp-products-grid">
          ${silicones.map(prod => renderProductCard(prod, lang)).join('')}
        </div>
      </section>
    `;

    bindCardModalTriggers(mount);
  }

  // Renderizar Pestaña 02: Exclusivamente los 18 Productos Cementicios y Pastas (Fam 1 a Fam 5)
  function renderCementiciosPane() {
    const mount = document.getElementById('bp-cementicios-mount');
    if (!mount) return;

    const lang = getLang();
    const cementFamilyOrder = ['fam1', 'fam2', 'fam3', 'fam4', 'fam5'];

    const filtered = AZZUL_BUILDING_PRODUCTS.filter(prod => {
      if (!cementFamilyOrder.includes(prod.family)) return false;
      if (activeCemFamily !== 'all' && prod.family !== activeCemFamily) return false;
      if (activeCemPackaging !== 'all' && prod.packagingType !== activeCemPackaging) return false;
      return true;
    });

    if (filtered.length === 0) {
      mount.innerHTML = `
        <div class="bp-empty-state">
          <h3>${lang === 'en' ? 'No products match that packaging & family combination' : 'Esta familia utiliza otro formato de empaque técnico'}</h3>
          <p>${lang === 'en' ? 'Reset filters to view all 18 cementitious and paste formulations.' : 'Restablezca el filtro de empaque para visualizar las 18 formulaciones disponibles.'}</p>
          <button type="button" class="btn btn-primary" id="bp-reset-cem-btn">
            ${lang === 'en' ? 'Show All 18 Formulations' : 'Mostrar las 18 Formulaciones'}
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('bp-reset-cem-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeCemFamily = 'all';
          activeCemPackaging = 'all';
          syncCementiciosFilterButtons();
          renderCementiciosPane();
        });
      }
      return;
    }

    let html = '';
    cementFamilyOrder.forEach(famId => {
      const famProducts = filtered.filter(p => p.family === famId);
      if (famProducts.length === 0) return;

      const fam = AZZUL_BP_FAMILIES[famId];
      const ft = fam[lang] || fam.es;

      html += `
        <section class="bp-family-block" id="family-section-${fam.id}" data-family-section="${fam.id}">
          <div class="bp-family-banner" style="--fam-color: ${fam.colorPrimary}; --fam-gradient: ${fam.gradient};">
            <div class="bp-family-banner-left">
              <div class="bp-family-meta-row">
                <span class="bp-family-badge" style="background: ${fam.gradient};">${ft.badge}</span>
                <span class="bp-family-pkg-chip">
                  <span class="bp-color-swatch" style="background: ${fam.colorPrimary};"></span>
                  ${ft.packagingLabel}
                </span>
              </div>
              <h3 class="bp-family-title">${ft.name} <span class="bp-family-count">(${famProducts.length})</span></h3>
              <p class="bp-family-subtitle">${ft.subtitle}</p>
              <p class="bp-family-desc">${ft.description}</p>
            </div>
          </div>

          <div class="bp-products-grid">
            ${famProducts.map(prod => renderProductCard(prod, lang)).join('')}
          </div>
        </section>
      `;
    });

    mount.innerHTML = html;
    bindCardModalTriggers(mount);
  }

  // Modal / Drawer de Ficha Técnica Completa (Enfoque exclusivo en Proyectos y Clientes)
  function openProductModal(productId) {
    const prod = AZZUL_BUILDING_PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    currentModalProductId = productId;
    const modal = document.getElementById('bp-tech-modal');
    const modalBody = document.getElementById('bp-tech-modal-body');
    if (!modal || !modalBody) return;

    const lang = getLang();
    const t = prod[lang] || prod.es;
    const fam = AZZUL_BP_FAMILIES[prod.family];
    const ft = fam[lang] || fam.es;

    modalBody.innerHTML = `
      <div class="bp-modal-header-band" style="background: ${prod.bandGradient};">
        <div class="bp-modal-header-badges">
          <span class="bp-modal-fam-pill">${ft.badge}</span>
          <span class="bp-modal-norm-pill">${prod.normOrClass}</span>
        </div>
        <div class="bp-modal-title-row">
          <div>
            <div class="bp-modal-big-code">${prod.code}</div>
            <h2 class="bp-modal-title" id="bp-modal-heading">${t.name}</h2>
            <p class="bp-modal-tagline">${t.tagline}</p>
          </div>
          <div class="bp-modal-weight-box">
            <span class="bp-modal-weight-val">${prod.weightOrVolume}</span>
            <span class="bp-modal-weight-lbl">${prod.packagingType === 'cartridge' ? (lang === 'en' ? 'Cartridge / Sausage' : 'Cartucho / Salchicha') : prod.packagingType === 'bucket' ? (lang === 'en' ? 'Plastic Bucket' : 'Cubeta Plástica') : (lang === 'en' ? 'Kraft Sack' : 'Saco Kraft')}</span>
          </div>
        </div>
      </div>

      <div class="bp-modal-content-grid">
        <div class="bp-modal-col-main">
          <div class="bp-modal-section">
            <h4 class="bp-modal-sec-title">${lang === 'en' ? 'Technical Description' : 'Descripción Técnica'}</h4>
            <p class="bp-modal-desc-text">${t.description}</p>
          </div>

          <div class="bp-modal-section">
            <h4 class="bp-modal-sec-title">${lang === 'en' ? 'Recommended Uses & Applications' : 'Usos Recomendados'}</h4>
            <ul class="bp-modal-uses-grid">
              ${(t.uses || []).map(use => `
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>${use}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="bp-modal-section">
            <h4 class="bp-modal-sec-title">${lang === 'en' ? 'Step-by-Step Application Method' : 'Modo de Empleo Paso a Paso'}</h4>
            <div class="bp-modal-steps-list">
              ${(t.steps || []).map((st, idx) => `
                <div class="bp-modal-step-card">
                  <div class="bp-modal-step-num" style="background: ${prod.accentColor};">0${idx + 1}</div>
                  <div class="bp-modal-step-body">
                    <h5>${st.title}</h5>
                    <p>${st.text}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="bp-modal-col-side">
          <div class="bp-modal-specs-card">
            <h4>${lang === 'en' ? 'Technical & Packaging Parameters' : 'Especificación de Empaque y Control'}</h4>
            <div class="bp-modal-spec-row">
              <span>${lang === 'en' ? 'Standard / Class' : 'Norma / Clase'}</span>
              <strong>${prod.normOrClass}</strong>
            </div>
            <div class="bp-modal-spec-row">
              <span>${lang === 'en' ? 'Packaging Presentation' : 'Presentación de Empaque'}</span>
              <strong>${t.packagingDetail}</strong>
            </div>
            <div class="bp-modal-spec-row">
              <span>${lang === 'en' ? 'Coverage / Yield' : 'Rendimiento Estimado'}</span>
              <strong>${t.yieldSummary}</strong>
            </div>
            <div class="bp-modal-spec-row">
              <span>${lang === 'en' ? 'Application Temp.' : 'Temp. de Aplicación'}</span>
              <strong>${t.tempRange}</strong>
            </div>
            <div class="bp-modal-spec-row">
              <span>${lang === 'en' ? 'Shelf Life' : 'Vida Útil / Almacenamiento'}</span>
              <strong>${t.shelfLife}</strong>
            </div>
          </div>

          <div class="bp-modal-cta-box">
            <a href="contacto.html?interest=products&product=${encodeURIComponent(prod.code)}" class="btn bp-btn-cta-primary" style="width: 100%; justify-content: center;">
              <span>${lang === 'en' ? `Request Project Quote for ${prod.code}` : `Solicitar Cotización de ${prod.code}`}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    const modal = document.getElementById('bp-tech-modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentModalProductId = null;
  }

  function syncCementiciosFilterButtons() {
    document.querySelectorAll('[data-bp-cem-filter]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-bp-cem-filter') === activeCemFamily);
    });
    document.querySelectorAll('[data-bp-cem-pkg]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-bp-cem-pkg') === activeCemPackaging);
    });
  }

  // Activar una pestaña exclusiva (solo se muestra el contenido de la pestaña activa)
  function activateBpTab(tabInput, options) {
    const opts = options || {};
    const targetTab = normalizeTabId(tabInput) || 'siliconas';
    activeBpTab = targetTab;

    // 1. Actualizar botones de la barra de pestañas
    document.querySelectorAll('[data-bp-tab]').forEach(btn => {
      const isMatch = btn.getAttribute('data-bp-tab') === targetTab;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    // 2. Actualizar tarjetas interactivas del Hero
    document.querySelectorAll('[data-bp-hero-card]').forEach(card => {
      const isMatch = card.getAttribute('data-bp-hero-card') === targetTab;
      card.classList.toggle('is-active', isMatch);
    });

    // 3. Mostrar estrictamente solo el panel activo y ocultar los demás
    document.querySelectorAll('[data-bp-pane]').forEach(pane => {
      const isMatch = pane.getAttribute('data-bp-pane') === targetTab;
      pane.classList.toggle('is-active', isMatch);
      if (isMatch) {
        pane.removeAttribute('hidden');
      } else {
        pane.setAttribute('hidden', '');
      }
    });

    // 4. Sincronizar hash en la URL si se solicita
    if (opts.updateHash) {
      const desiredHash = '#' + targetTab;
      if (window.location.hash !== desiredHash) {
        history.replaceState(null, '', desiredHash);
      }
    }

    // 5. Desplazar suavemente hacia la barra de pestañas / contenido si aplica
    if (opts.scroll) {
      const subTarget = opts.subAnchor ? document.getElementById(opts.subAnchor) : null;
      const tabsSection = subTarget || document.getElementById('bp-tabs-section');
      if (tabsSection) {
        requestAnimationFrame(() => {
          tabsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  }

  // Exponer controlador global para sincronización inmediata con navbar.js
  window.azzulActivateBpTab = activateBpTab;

  document.addEventListener('DOMContentLoaded', () => {
    const tabsWorkspace = document.getElementById('bp-tabs-section');
    if (!tabsWorkspace) return;

    // Soportar parámetros opcionales ?tab= o ?family= además del hash (#siliconas | #cementicios | #hogar)
    const params = new URLSearchParams(window.location.search);
    const famParam = params.get('family');
    const tabParam = params.get('tab');

    if (famParam && ['fam1', 'fam2', 'fam3', 'fam4', 'fam5'].includes(famParam)) {
      activeCemFamily = famParam;
    }

    syncCementiciosFilterButtons();
    renderSiliconesPane();
    renderCementiciosPane();

    // Resolver pestaña inicial desde hash o query param
    const rawHash = (window.location.hash || '').replace(/^#/, '').trim();
    const initialFromHash = normalizeTabId(rawHash);
    const initialFromQuery = normalizeTabId(tabParam || famParam);
    const initialTab = initialFromHash || initialFromQuery || 'siliconas';
    const isSubArchHash = rawHash.startsWith('arch-');

    activateBpTab(initialTab, {
      scroll: Boolean(rawHash || tabParam || famParam),
      subAnchor: isSubArchHash ? rawHash : null
    });

    // Clicks en las 3 pestañas principales
    document.querySelectorAll('[data-bp-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = btn.getAttribute('data-bp-tab');
        activateBpTab(chosen, { updateHash: true, scroll: false });
      });
    });

    // Clicks en las 3 tarjetas interactivas del Hero (Columna Derecha)
    document.querySelectorAll('[data-bp-hero-card]').forEach(card => {
      card.addEventListener('click', () => {
        const chosen = card.getAttribute('data-bp-hero-card');
        activateBpTab(chosen, { updateHash: true, scroll: true });
      });
    });

    // Sincronización con cambios de hash del navegador / botones atrás-adelante / Navbar
    window.addEventListener('hashchange', () => {
      const h = (window.location.hash || '').replace(/^#/, '').trim();
      const mapped = normalizeTabId(h);
      if (mapped) {
        activateBpTab(mapped, {
          scroll: true,
          subAnchor: h.startsWith('arch-') ? h : null
        });
      }
    });

    // Filtros internos de la Pestaña 02 (Productos Cementicios)
    document.querySelectorAll('[data-bp-cem-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCemFamily = btn.getAttribute('data-bp-cem-filter') || 'all';
        syncCementiciosFilterButtons();
        renderCementiciosPane();
      });
    });

    document.querySelectorAll('[data-bp-cem-pkg]').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCemPackaging = btn.getAttribute('data-bp-cem-pkg') || 'all';
        syncCementiciosFilterButtons();
        renderCementiciosPane();
      });
    });

    // Eventos de cierre del modal técnico
    const closeBtn = document.getElementById('bp-modal-close-btn');
    const modalOverlay = document.getElementById('bp-tech-modal');
    if (closeBtn) closeBtn.addEventListener('click', closeProductModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeProductModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && currentModalProductId) {
        closeProductModal();
      }
    });

    // Re-renderizar automáticamente al cambiar de idioma ES/EN
    window.addEventListener('azzul:languageChanged', () => {
      renderSiliconesPane();
      renderCementiciosPane();
      if (currentModalProductId) {
        openProductModal(currentModalProductId);
      }
    });
  });
})();

