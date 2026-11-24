/* ==========================================================================
   AZZUL BUILDING PRODUCTS — ARQUITECTURA INTERIOR, MOBILIARIO & ACABADOS
   Editorial Dark Mode Showcase • 5 Curated Galleries + Fullscreen Lightbox
   ========================================================================== */

(function initArquitecturaInterior() {
  const PDF_URL = 'assets/AZZUL_INDESIGN_READY/CATALOGO_MAESTRO_AZZUL_WEB.pdf';

  const ARCH_AREAS = [
    {
      id: 'arch-cocinas',
      num: '01',
      layout: 'bento',
      es: {
        shortNav: '01 Cocinas',
        title: 'Cocinas Integrales',
        subtitle: 'Islas en piedra natural, acero inoxidable H6, maderas nobles y laca Skin-Feel.',
        highlights: [
          'Puertas Laca Super-Matt 22 mm y Nogal Canaletto',
          'Encimeras de 20 mm (Calacatta, Dekton, Acero H6)',
          'Cuerpo estructural europeo 18 mm con sellado PUR',
          'Herrajes y rieles de cierre suave Blum (Austria)'
        ],
        captions: [
          'Cocina integral en Nogal Canaletto con isla monolítica e iluminación LED integrada',
          'Isla arquitectónica con encimera de 20 mm y frentes en laca Skin-Feel Super-Matt',
          'Distribución contemporánea con torres de hornos empotrados y barra desayunador',
          'Diseño minimalista con cuerpo estructural de 18 mm y sellado perimetral PUR',
          'Combinación de piedra natural, vitrinas iluminadas y herrajes Blum de extracción total',
          'Acabados arquitectónicos de precisión para proyectos residenciales de alta gama'
        ]
      },
      en: {
        shortNav: '01 Kitchens',
        title: 'Integral Kitchens',
        subtitle: 'Natural stone islands, H6 stainless steel, noble woods, and Skin-Feel lacquer.',
        highlights: [
          '22 mm Super-Matt Lacquer & Canaletto Walnut doors',
          '20 mm countertops (Calacatta, Dekton, H6 Steel)',
          '18 mm European structural carcass with PUR sealing',
          'Blum (Austria) soft-close hinges & drawer systems'
        ],
        captions: [
          'Canaletto Walnut integral kitchen with monolithic island and integrated LED lighting',
          'Architectural island with 20 mm countertop and Skin-Feel Super-Matt lacquer fronts',
          'Contemporary layout with built-in oven towers and breakfast bar',
          'Minimalist design with 18 mm structural carcass and invisible PUR edge sealing',
          'Natural stone pairing, illuminated display cabinets, and full-extension Blum hardware',
          'Precision architectural finishes for high-end residential developments'
        ]
      },
      images: [
        'assets/AZZUL_INDESIGN_READY/01_Cocinas/AZZ-COC-001.png',
        'assets/AZZUL_INDESIGN_READY/01_Cocinas/AZZ-COC-002.png',
        'assets/AZZUL_INDESIGN_READY/01_Cocinas/AZZ-COC-003.png',
        'assets/AZZUL_INDESIGN_READY/01_Cocinas/AZZ-COC-004.png',
        'assets/AZZUL_INDESIGN_READY/01_Cocinas/AZZ-COC-005.png',
        'assets/AZZUL_INDESIGN_READY/01_Cocinas/AZZ-COC-012.png'
      ]
    },
    {
      id: 'arch-banos',
      num: '02',
      layout: 'editorial',
      es: {
        shortNav: '02 Baños',
        title: 'Cuartos de Baño & Vanities',
        subtitle: 'Muebles flotantes resistentes a humedad directa, encimeras monolíticas y espejos LED.',
        highlights: [
          'Sellado perimetral invisible PUR 100% antihumedad',
          'Anclajes estructurales Fischer (Alemania) para concreto e ICF',
          'Cajones técnicos de extracción total con cierre suave',
          'Acabados hidrófugos y espejos LED integrados'
        ],
        captions: [
          'Vanity flotante doble lavabo en madera noble con encimera monolítica blanca',
          'Mueble suspendido con anclaje Fischer de alta carga y cajones de extracción total',
          'Diseño contemporáneo con espejo LED perimetral y sellado hidrófugo PUR',
          'Composición arquitectónica de baño principal resistente a vapor y humedad directa',
          'Vanity minimalista con almacenaje oculto y acabados europeos de alta durabilidad'
        ]
      },
      en: {
        shortNav: '02 Bathrooms',
        title: 'Bathrooms & Vanities',
        subtitle: 'Floating vanities built for direct humidity, monolithic tops, and LED mirrors.',
        highlights: [
          '100% waterproof invisible PUR perimeter sealing',
          'Fischer (Germany) structural anchors for concrete & ICF',
          'Full-extension soft-close technical drawers',
          'Moisture-resistant finishes & integrated LED mirrors'
        ],
        captions: [
          'Double-basin floating vanity in noble wood with monolithic white countertop',
          'Wall-hung vanity with heavy-duty Fischer anchors and full-extension drawers',
          'Contemporary design with backlit LED mirror and waterproof PUR edge sealing',
          'Master bathroom architectural suite engineered for direct steam and humidity',
          'Minimalist vanity with concealed storage and durable European finishes'
        ]
      },
      images: [
        'assets/AZZUL_INDESIGN_READY/02_Banos/AZZ-BAN-003.png',
        'assets/AZZUL_INDESIGN_READY/02_Banos/AZZ-BAN-004.png',
        'assets/AZZUL_INDESIGN_READY/02_Banos/AZZ-BAN-005.png',
        'assets/AZZUL_INDESIGN_READY/02_Banos/AZZ-BAN-007.png',
        'assets/AZZUL_INDESIGN_READY/02_Banos/AZZ-BAN-009.png'
      ]
    },
    {
      id: 'arch-closets',
      num: '03',
      layout: 'bento-5',
      es: {
        shortNav: '03 Closets',
        title: 'Walk-in Closets & Dormitorios',
        subtitle: 'Cristal reflectante fumé, perfilería de aluminio anodizado e islas joyero en cuero.',
        highlights: [
          'Puertas en vidrio templado fumé con marco Moka / Negro',
          'Iluminación LED certificada UL/cUL E472360',
          'Organizadores de accesorios e islas joyero en cuero',
          'Tableros ecológicos certificados E0 / ENF'
        ],
        captions: [
          'Walk-in closet arquitectónico con puertas de vidrio templado fumé e iluminación LED cálida',
          'Sistema modular abierto con perfilería anodizada y gavetas organizadoras',
          'Vestidor de alta gama con tableros ecológicos E0/ENF y acabado madera texturizada',
          'Diseño de suite principal con vitrinas iluminadas e isla central multifunción',
          'Distribución a medida con accesorios en cuero y rieles silenciosos de precisión'
        ]
      },
      en: {
        shortNav: '03 Closets',
        title: 'Walk-in Closets & Bedrooms',
        subtitle: 'Smoked reflective glass, anodized aluminum frames, and leather jewelry islands.',
        highlights: [
          'Tempered smoked glass doors with Mocha / Black frames',
          'UL/cUL E472360 certified integrated LED lighting',
          'Leather accessory organizers & central jewelry islands',
          'E0 / ENF certified low-emission eco-friendly boards'
        ],
        captions: [
          'Architectural walk-in closet with smoked tempered glass doors and warm LED lighting',
          'Open modular wardrobe system with anodized profiles and organizer drawers',
          'Luxury dressing room crafted with E0/ENF eco boards and textured wood finishes',
          'Master suite wardrobe design with illuminated glass cabinets and central island',
          'Bespoke layout featuring leather organizers and whisper-quiet drawer slides'
        ]
      },
      images: [
        'assets/AZZUL_INDESIGN_READY/03_Closets_Dormitorios/AZZ-CLO-003.png',
        'assets/AZZUL_INDESIGN_READY/03_Closets_Dormitorios/AZZ-CLO-001.png',
        'assets/AZZUL_INDESIGN_READY/03_Closets_Dormitorios/AZZ-CLO-002.png',
        'assets/AZZUL_INDESIGN_READY/03_Closets_Dormitorios/AZZ-CLO-006.png',
        'assets/AZZUL_INDESIGN_READY/03_Closets_Dormitorios/AZZ-CLO-007.png'
      ]
    },
    {
      id: 'arch-puertas',
      num: '04',
      layout: 'editorial',
      es: {
        shortNav: '04 Puertas & Interior',
        title: 'Puertas & Arquitectura Interior',
        subtitle: 'Puertas arquitectónicas insonorizadas, paneles murales y mobiliario fijo coordinado.',
        highlights: [
          'Colecciones libres de pintura con núcleo acústico insonorizado',
          'Revestimientos arquitectónicos Wall Paneling coordinados',
          'Centros de entretenimiento y mobiliario fijo a medida',
          'Acabados y lacas importadas ICA (Italia)'
        ],
        captions: [
          'Integración arquitectónica de sala, comedor y cocina con acabados coordinados',
          'Revestimiento Wall Paneling y mobiliario fijo con lacas italianas ICA',
          'Espacio social contemporáneo con carpintería de precisión piso-techo',
          'Centro de entretenimiento y paneles murales en tonos cálidos y piedra natural',
          'Continuidad material entre puertas arquitectónicas, paneles y mobiliario de sala'
        ]
      },
      en: {
        shortNav: '04 Doors & Interior',
        title: 'Doors & Interior Architecture',
        subtitle: 'Soundproof architectural doors, wall paneling, and coordinated fixed millwork.',
        highlights: [
          'Paint-free architectural door collections with acoustic core',
          'Coordinated floor-to-ceiling Wall Paneling systems',
          'Custom entertainment centers & built-in millwork',
          'Imported ICA (Italy) lacquers & premium finishes'
        ],
        captions: [
          'Architectural integration of living, dining, and kitchen spaces with coordinated finishes',
          'Wall Paneling and fixed millwork finished with imported Italian ICA coatings',
          'Contemporary social area featuring floor-to-ceiling precision cabinetry',
          'Custom entertainment wall combining warm wood tones and natural stone',
          'Material continuity across acoustic doors, wall panels, and living room millwork'
        ]
      },
      images: [
        'assets/AZZUL_INDESIGN_READY/04_Sala_Comedor_Integral/AZZ-INT-001.png',
        'assets/AZZUL_INDESIGN_READY/04_Sala_Comedor_Integral/AZZ-INT-004.png',
        'assets/AZZUL_INDESIGN_READY/04_Sala_Comedor_Integral/AZZ-INT-005.png',
        'assets/AZZUL_INDESIGN_READY/04_Sala_Comedor_Integral/AZZ-INT-006.png',
        'assets/AZZUL_INDESIGN_READY/04_Sala_Comedor_Integral/AZZ-INT-008.png'
      ]
    },
    {
      id: 'arch-ingenieria',
      num: '05',
      layout: 'tech',
      es: {
        shortNav: '05 Ingeniería & Materiales',
        title: 'Ingeniería, Materiales & Herrajes',
        subtitle: 'Tecnología europea en cada componente: espesor real de 18 mm, canteado PUR y certificación UL.',
        highlights: [
          'Espesor estructural real de 18 mm (vs. 9/16 mm convencional)',
          'Canteado hermético PUR impermeable (vs. pegamento EVA)',
          'Bisagras y rieles de precisión Blum (Austria)',
          'Anclajes Fischer (Alemania), Laca ICA (Italia) y LED UL/cUL'
        ],
        techCards: [
          { metric: '18 mm', label: 'Espesor Real', detail: 'Cuerpo y respaldo de 18 mm reales con tablero ecológico E0/ENF (vs. 9–16 mm estándar).' },
          { metric: 'PUR', label: 'Sellado Impermeable', detail: 'Canteado invisible termoestable 100% resistente a humedad y calor (vs. EVA que se despega).' },
          { metric: 'Blum', label: 'Herrajes Austria', detail: 'Bisagras de montaje rápido y rieles de cierre suave probados para más de 200,000 ciclos.' },
          { metric: 'Fischer', label: 'Anclaje Alemania', detail: 'Sistemas de fijación estructural diseñados para concreto sólido, mampostería y muros ICF.' },
          { metric: 'ICA + UL', label: 'Italia & Certificación', detail: 'Recubrimientos importados ICA sin olor y luminarias LED certificadas UL/cUL E472360.' }
        ],
        captions: [
          'Comparativa estructural: panel posterior y cuerpo de 18 mm real con sustrato ecológico E0/ENF',
          'Recubrimiento italiano ICA, encimera de 20 mm, sellado invisible PUR y bisagras Blum',
          'Rieles Blum, anclajes alemanes Fischer, niveladores en PP virgen y certificado LED UL/cUL E472360',
          'Muestrario oficial de acabados: lacas mate/brillo, chapas de madera noble y melaminas europeas'
        ]
      },
      en: {
        shortNav: '05 Engineering & Materials',
        title: 'Engineering, Materials & Hardware',
        subtitle: 'European technology in every component: true 18 mm thickness, PUR edgebanding, and UL certification.',
        highlights: [
          'True 18 mm structural thickness (vs. 9/16 mm standard)',
          'Waterproof invisible PUR edgebanding (vs. EVA glue)',
          'Blum (Austria) soft-close hinges & precision slides',
          'Fischer (Germany) anchors, ICA (Italy) lacquer & UL LEDs'
        ],
        techCards: [
          { metric: '18 mm', label: 'True Thickness', detail: 'Full 18 mm carcass & back panel with E0/ENF low-emission board (vs. 9–16 mm standard).' },
          { metric: 'PUR', label: 'Waterproof Seal', detail: 'Invisible moisture-proof & heat-resistant edgebanding (vs. EVA prone to peeling).' },
          { metric: 'Blum', label: 'Austria Hardware', detail: 'Quick-install soft-close hinges and drawer slides tested for 200,000+ cycles.' },
          { metric: 'Fischer', label: 'Germany Anchors', detail: 'Heavy-duty structural wall-mounting systems engineered for concrete and ICF walls.' },
          { metric: 'ICA + UL', label: 'Italy & Certified LED', detail: 'Imported odor-free ICA Italian lacquers and UL/cUL E472360 certified LED lighting.' }
        ],
        captions: [
          'Structural benchmark: true 18 mm back panel and carcass with E0/ENF eco-friendly substrate',
          'Imported Italian ICA coating, 20 mm countertop, invisible PUR edgebanding, and Blum hinges',
          'Blum drawer slides, German Fischer anchors, virgin PP feet, and UL/cUL E472360 LED compliance',
          'Official finishings palette: matte/gloss lacquers, noble wood veneers, and European melamines'
        ]
      },
      images: [
        'assets/AZZUL_INDESIGN_READY/05_Materiales_Herrajes_Calidad/AZZ-TEC-046.png',
        'assets/AZZUL_INDESIGN_READY/05_Materiales_Herrajes_Calidad/AZZ-TEC-047.png',
        'assets/AZZUL_INDESIGN_READY/05_Materiales_Herrajes_Calidad/AZZ-TEC-058.png',
        'assets/AZZUL_INDESIGN_READY/05_Materiales_Herrajes_Calidad/AZZ-TEC-059.png'
      ]
    }
  ];

  let lbAreaIndex = 0;
  let lbImgIndex = 0;
  let lbIsOpen = false;

  function getLang() {
    return localStorage.getItem('preferredLang') || document.documentElement.getAttribute('lang') || 'es';
  }

  function renderArchAreas() {
    const mount = document.getElementById('arch-areas-mount');
    if (!mount) return;
    const lang = getLang();

    mount.innerHTML = ARCH_AREAS.map((area, areaIdx) => {
      const t = area[lang] || area.es;

      const techCardsHtml = t.techCards ? `
        <div class="arch-tech-specs-grid">
          ${t.techCards.map(tc => `
            <div class="arch-tech-spec-card">
              <div class="arch-tech-metric">${tc.metric}</div>
              <div class="arch-tech-label">${tc.label}</div>
              <p class="arch-tech-detail">${tc.detail}</p>
            </div>
          `).join('')}
        </div>
      ` : '';

      const galleryClass =
        area.layout === 'bento' ? 'arch-gallery-grid arch-grid-bento-6' :
        area.layout === 'bento-5' ? 'arch-gallery-grid arch-grid-bento-5' :
        area.layout === 'tech' ? 'arch-gallery-grid arch-grid-tech-4' :
        'arch-gallery-grid arch-grid-editorial-5';

      return `
        <article class="arch-area-section" id="${area.id}" data-arch-area="${areaIdx}">
          <div class="arch-area-header">
            <div class="arch-area-title-group">
              <div class="arch-editorial-num-row">
                <span class="arch-editorial-num">${area.num}</span>
                <span class="arch-dual-bar" aria-hidden="true">
                  <i class="arch-bar-blue"></i>
                  <i class="arch-bar-gold"></i>
                </span>
                <span class="arch-area-eyebrow">AZZUL ARCHITECTURAL &amp; HOME SOLUTIONS</span>
              </div>
              <h3 class="arch-area-title">${t.title}</h3>
              <p class="arch-area-subtitle">${t.subtitle}</p>
            </div>

            <div class="arch-area-highlights">
              ${t.highlights.map(h => `
                <div class="arch-highlight-chip">
                  <span class="arch-chip-dot"></span>
                  <span>${h}</span>
                </div>
              `).join('')}
            </div>
          </div>

          ${techCardsHtml}

          <div class="${galleryClass}">
            ${area.images.map((imgSrc, imgIdx) => {
              const cap = (t.captions && t.captions[imgIdx]) || `${t.title} ${imgIdx + 1}`;
              return `
                <figure class="arch-photo-card ${imgIdx === 0 ? 'arch-photo-featured' : ''}" tabindex="0" role="button" aria-label="${lang === 'en' ? 'Expand image:' : 'Ampliar imagen:'} ${cap}" data-arch-open-lb="${areaIdx}:${imgIdx}">
                  <img src="${imgSrc}" alt="${cap}" loading="lazy" decoding="async" class="${area.layout === 'tech' ? 'arch-img-tech' : ''}">
                  <figcaption class="arch-photo-overlay">
                    <span class="arch-photo-index">${area.num} / 0${imgIdx + 1}</span>
                    <p class="arch-photo-caption">${cap}</p>
                    <span class="arch-photo-zoom-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
                    </span>
                  </figcaption>
                </figure>
              `;
            }).join('')}
          </div>
        </article>
      `;
    }).join('');

    // Bind Lightbox open handlers
    mount.querySelectorAll('[data-arch-open-lb]').forEach(el => {
      const trigger = () => {
        const [aIdx, iIdx] = el.getAttribute('data-arch-open-lb').split(':').map(Number);
        openLightbox(aIdx, iIdx);
      };
      el.addEventListener('click', trigger);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger();
        }
      });
    });
  }

  function updateLightboxView() {
    const area = ARCH_AREAS[lbAreaIndex];
    if (!area) return;
    const lang = getLang();
    const t = area[lang] || area.es;
    const src = area.images[lbImgIndex];
    const cap = (t.captions && t.captions[lbImgIndex]) || t.title;

    const imgEl = document.getElementById('arch-lb-img');
    const areaEl = document.getElementById('arch-lb-area');
    const captionEl = document.getElementById('arch-lb-caption');
    const counterEl = document.getElementById('arch-lb-counter');
    const pdfBtn = document.getElementById('arch-lb-pdf-btn');

    if (imgEl) {
      imgEl.src = src;
      imgEl.alt = cap;
    }
    if (areaEl) areaEl.textContent = `${area.num} · ${t.title}`;
    if (captionEl) captionEl.textContent = cap;
    if (counterEl) counterEl.textContent = `${lbImgIndex + 1} / ${area.images.length}`;
    if (pdfBtn) {
      pdfBtn.href = PDF_URL;
      const lbl = pdfBtn.querySelector('span');
      if (lbl) lbl.textContent = lang === 'en' ? 'Open Full Catalog (PDF)' : 'Abrir Catálogo Completo (PDF)';
    }
  }

  function openLightbox(areaIdx, imgIdx) {
    lbAreaIndex = areaIdx;
    lbImgIndex = imgIdx;
    lbIsOpen = true;
    const lb = document.getElementById('arch-lightbox');
    if (!lb) return;
    updateLightboxView();
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lbIsOpen = false;
    const lb = document.getElementById('arch-lightbox');
    if (!lb) return;
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function stepLightbox(delta) {
    const area = ARCH_AREAS[lbAreaIndex];
    if (!area) return;
    lbImgIndex = (lbImgIndex + delta + area.images.length) % area.images.length;
    updateLightboxView();
  }

  // Vincular navegación rápida interna a las 5 subáreas sin alterar el hash #hogar
  function bindSubareaJumps() {
    document.querySelectorAll('[data-arch-subjump]').forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = pill.getAttribute('data-arch-subjump');
        if (typeof window.azzulActivateBpTab === 'function') {
          window.azzulActivateBpTab('hogar', { scroll: false });
        }
        const sec = targetId ? document.getElementById(targetId) : null;
        if (sec) {
          sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderArchAreas();
    bindSubareaJumps();

    const lb = document.getElementById('arch-lightbox');
    const closeBtn = document.getElementById('arch-lb-close');
    const prevBtn = document.getElementById('arch-lb-prev');
    const nextBtn = document.getElementById('arch-lb-next');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', () => stepLightbox(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => stepLightbox(1));

    if (lb) {
      lb.addEventListener('click', (e) => {
        if (e.target === lb) closeLightbox();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!lbIsOpen) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') stepLightbox(1);
      else if (e.key === 'ArrowLeft') stepLightbox(-1);
    });

    // Re-render on ES/EN switch
    window.addEventListener('azzul:languageChanged', () => {
      renderArchAreas();
      if (lbIsOpen) updateLightboxView();
    });
  });
})();
