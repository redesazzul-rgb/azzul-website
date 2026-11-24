/* ==========================================================================
   AZZUL — COMPONENTE REUTILIZABLE DE NAVBAR GLOBAL (UNIFICADO EN TODO EL SITIO)
   Sticky #192126 + Backdrop Blur + Borde #2D3F49 + Acceso Directo a los 4 Pilares
   ========================================================================== */

(function initAzzulGlobalNavbar() {
  const PDF_CATALOG_URL = 'assets/hogar/CATALOGO_MAESTRO_AZZUL_WEB.pdf';

  function getCurrentPageKey() {
    const rawPath = (window.location.pathname || '').toLowerCase();
    const file = rawPath.split('/').pop() || 'index.html';
    const params = new URLSearchParams(window.location.search);
    const tab = (params.get('tab') || '').toLowerCase();

    if (file === '' || file === 'index.html') return 'inicio';
    if (file === 'sistema.html' && tab === 'training') return 'certificacion';
    if (file === 'icf.html' || file === 'sistema.html' || file === 'docs.html' || file === 'matriz.html') return 'icf';
    if (file === 'productos.html') return 'productos';
    if (file === 'rentas.html' || file === 'detalle.html' || file === 'ebook.html') return 'rentas';
    if (file === 'proyectos.html') return 'proyectos';
    if (file === 'nosotros.html') return 'nosotros';
    if (file === 'contacto.html') return 'contacto';
    return '';
  }

  function buildNavbarMarkup(activeKey) {
    const isActive = (key) => (activeKey === key ? ' active' : '');

    return `
      <div class="container azzul-navbar-inner">
        <!-- 1. IZQUIERDA: LOGO OFICIAL AZZUL -> PORTAL PRINCIPAL -->
        <a href="index.html" class="logo azzul-nav-logo" id="main-logo" aria-label="AZZUL - Ir al Portal Principal">
          <img src="assets/logo/logo.png" alt="AZZUL Logo">
        </a>

        <!-- 2. CENTRO: ENLACES PERSISTENTES CUBRIENDO LOS 4 PILARES + DROPDOWNS -->
        <nav class="azzul-nav-menu" id="nav-menu" aria-label="Navegación Global AZZUL">
          <a href="index.html" class="nav-link${isActive('inicio')}" id="link-inicio" data-i18n="nav_inicio">Inicio</a>

          <!-- Pilar Construccción: AZZUL ICF (+ Submenú técnico) -->
          <div class="azzul-nav-dropdown" id="nav-icf-dropdown">
            <div class="azzul-nav-dropdown-head">
              <a href="icf.html" class="nav-link azzul-bp-trigger${isActive('icf')}" id="link-icf-portal">
                <span data-i18n="nav_icf">AZZUL ICF</span>
                <svg class="azzul-chevron-desktop" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <button type="button" class="azzul-bp-mobile-toggle" id="icf-mobile-dropdown-btn" aria-expanded="false" aria-label="Abrir submenú de AZZUL ICF">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            <div class="azzul-bp-dropdown-menu" role="menu" aria-label="Secciones de AZZUL ICF">
              <a href="icf.html" class="azzul-bp-drop-item" role="menuitem">
                <span class="azzul-drop-dot" style="background: #38BDF8;"></span>
                <span class="azzul-drop-text">
                  <strong data-i18n="nav_icf_sub_main">Construcción &amp; Tecnología ICF</strong>
                  <small data-i18n="nav_icf_sub_main_desc">Sistema monolítico R-22+ y desarrollo</small>
                </span>
              </a>
              <a href="sistema.html" class="azzul-bp-drop-item" role="menuitem">
                <span class="azzul-drop-dot" style="background: #1FABE2;"></span>
                <span class="azzul-drop-text">
                  <strong data-i18n="nav_ciencia">Ciencia Constructiva</strong>
                  <small data-i18n="nav_icf_sub_science_desc">Visor interactivo de capas y bloques ICF</small>
                </span>
              </a>
              <a href="proyectos.html" class="azzul-bp-drop-item" role="menuitem">
                <span class="azzul-drop-dot" style="background: #10B981;"></span>
                <span class="azzul-drop-text">
                  <strong data-i18n="nav_icf_sub_projects">Portafolio &amp; AZZUL San Blas</strong>
                  <small data-i18n="nav_icf_sub_projects_desc">Obras ejecutadas y avances en video</small>
                </span>
              </a>
              <a href="docs.html" class="azzul-bp-drop-item" role="menuitem">
                <span class="azzul-drop-dot" style="background: #94A3B8;"></span>
                <span class="azzul-drop-text">
                  <strong data-i18n="nav_icf_sub_docs">Documentación Técnica</strong>
                  <small data-i18n="nav_icf_sub_docs_desc">Memorias estructurales, OPAMSS e Intertek</small>
                </span>
              </a>
            </div>
          </div>

          <!-- Pilar Productos: Building Products (+ Dropdown de las 3 Divisiones + PDF) -->
          <div class="azzul-nav-dropdown" id="nav-bp-dropdown">
            <div class="azzul-nav-dropdown-head">
              <a href="productos.html" class="nav-link azzul-bp-trigger${isActive('productos')}" id="link-bp-catalog">
                <span data-i18n="nav_bp_catalog">Building Products</span>
                <svg class="azzul-chevron-desktop" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <button type="button" class="azzul-bp-mobile-toggle" id="bp-mobile-dropdown-btn" aria-expanded="false" aria-label="Abrir submenú de Building Products">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            <div class="azzul-bp-dropdown-menu" role="menu" aria-label="Divisiones de AZZUL Building Products">
              <a href="productos.html#siliconas" class="azzul-bp-drop-item" data-bp-tab-link="siliconas" role="menuitem">
                <span class="azzul-drop-dot" style="background: #1FABE2;"></span>
                <span class="azzul-drop-text">
                  <strong data-i18n="nav_bp_sub_siliconas">Selladores de Silicona</strong>
                  <small data-i18n="nav_bp_sub_siliconas_desc">7 Selladores PRO Elastoméricos</small>
                </span>
              </a>

              <a href="productos.html#cementicios" class="azzul-bp-drop-item" data-bp-tab-link="cementicios" role="menuitem">
                <span class="azzul-drop-dot" style="background: #14B8A6;"></span>
                <span class="azzul-drop-text">
                  <strong data-i18n="nav_bp_sub_cementicios">Productos Cementicios</strong>
                  <small data-i18n="nav_bp_sub_cementicios_desc">18 Fórmulas en 5 Familias Cromáticas</small>
                </span>
              </a>

              <a href="productos.html#hogar" class="azzul-bp-drop-item is-editorial" data-bp-tab-link="hogar" role="menuitem">
                <span class="azzul-drop-dot" style="background: #D4C29F;"></span>
                <span class="azzul-drop-text">
                  <strong data-i18n="nav_bp_sub_hogar">Arquitectura Interior &amp; Hogar</strong>
                  <small data-i18n="nav_bp_sub_hogar_desc">Cocinas, Baños, Closets y Herrajes Blum</small>
                </span>
              </a>

              <div class="azzul-bp-drop-divider" role="separator"></div>

              <a href="${PDF_CATALOG_URL}" target="_blank" rel="noopener noreferrer" class="azzul-bp-drop-item is-pdf" id="nav-bp-pdf-link" role="menuitem">
                <span class="azzul-drop-pdf-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </span>
                <span class="azzul-drop-text">
                  <strong data-i18n="nav_bp_sub_pdf">Catálogo Digital Hogar (PDF)</strong>
                  <small data-i18n="nav_bp_sub_pdf_desc">Edición 2026/2027 · Nueva pestaña</small>
                </span>
              </a>
            </div>
          </div>

          <!-- Pilar Certificación: AZZUL Certification -->
          <a href="sistema.html?tab=training" class="nav-link${isActive('certificacion')}" id="link-certificacion" data-i18n="nav_certificacion">Certificación</a>

          <!-- Pilar Gestión & Rentas: AZZUL Management -->
          <a href="rentas.html" class="nav-link${isActive('rentas')}" id="link-rentas" data-i18n="nav_rentas">Rentas &amp; Management</a>

          <a href="proyectos.html" class="nav-link${isActive('proyectos')}" id="link-proyectos" data-i18n="nav_proyectos">Proyectos</a>
          <a href="nosotros.html" class="nav-link${isActive('nosotros')}" id="link-about" data-i18n="nav_nosotros">Nosotros</a>

          <!-- Acciones visibles dentro del drawer móvil -->
          <div class="azzul-nav-mobile-footer">
            <a href="contacto.html" class="azzul-nav-cta azzul-nav-cta-mobile" data-i18n="nav_quote_cta">Solicitar Cotización</a>
            <div class="lang-selector azzul-lang-mobile">
              <button type="button" class="lang-btn active" data-lang="es">ES</button>
              <span class="lang-divider">/</span>
              <button type="button" class="lang-btn" data-lang="en">EN</button>
            </div>
          </div>
        </nav>

        <!-- 3. DERECHA: SELECTOR IDIOMA + BOTÓN CTA #1FABE2 + HAMBURGUESA MÓVIL -->
        <div class="azzul-nav-actions">
          <div class="lang-selector azzul-lang-desktop">
            <button type="button" class="lang-btn active" data-lang="es">ES</button>
            <span class="lang-divider">/</span>
            <button type="button" class="lang-btn" data-lang="en">EN</button>
          </div>

          <a href="contacto.html" class="azzul-nav-cta" id="link-contacto" data-i18n="nav_quote_cta">Solicitar Cotización</a>

          <button type="button" class="burger" id="burger-menu" aria-label="Abrir menú de navegación" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div class="azzul-nav-backdrop" id="azzul-nav-backdrop" aria-hidden="true"></div>
    `;
  }

  function closeMobileDrawer() {
    const burger = document.getElementById('burger-menu');
    const menu = document.getElementById('nav-menu');
    const backdrop = document.getElementById('azzul-nav-backdrop');
    if (burger) {
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    }
    if (menu) menu.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  function mountNavbar() {
    let header = document.getElementById('header');
    if (!header) {
      header = document.querySelector('header.header');
    }
    if (!header) return;

    const activeKey = getCurrentPageKey();
    header.id = 'header';
    header.classList.add('header', 'azzul-global-header');
    header.dataset.azzulNavbarManaged = 'true';
    header.innerHTML = buildNavbarMarkup(activeKey);

    const burger = document.getElementById('burger-menu');
    const menu = document.getElementById('nav-menu');
    const backdrop = document.getElementById('azzul-nav-backdrop');
    const bpDropdown = document.getElementById('nav-bp-dropdown');
    const bpMobileBtn = document.getElementById('bp-mobile-dropdown-btn');
    const icfDropdown = document.getElementById('nav-icf-dropdown');
    const icfMobileBtn = document.getElementById('icf-mobile-dropdown-btn');

    if (burger && menu) {
      burger.addEventListener('click', (e) => {
        e.stopPropagation();
        const willOpen = !menu.classList.contains('active');
        burger.classList.toggle('active', willOpen);
        burger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        menu.classList.toggle('active', willOpen);
        if (backdrop) backdrop.classList.toggle('active', willOpen);
        document.body.style.overflow = willOpen ? 'hidden' : '';
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeMobileDrawer);
    }

    if (bpMobileBtn && bpDropdown) {
      bpMobileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const open = !bpDropdown.classList.contains('is-open');
        bpDropdown.classList.toggle('is-open', open);
        bpMobileBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    if (icfMobileBtn && icfDropdown) {
      icfMobileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const open = !icfDropdown.classList.contains('is-open');
        icfDropdown.classList.toggle('is-open', open);
        icfMobileBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    // Sincronización SPA / Hash instantánea cuando el usuario ya está en Building Products
    header.querySelectorAll('[data-bp-tab-link]').forEach((item) => {
      item.addEventListener('click', (e) => {
        const targetTab = item.getAttribute('data-bp-tab-link');
        closeMobileDrawer();
        if (bpDropdown) bpDropdown.classList.remove('is-open');

        if (activeKey === 'productos' && targetTab) {
          e.preventDefault();
          if (window.location.hash !== '#' + targetTab) {
            history.pushState(null, '', '#' + targetTab);
          }
          if (typeof window.azzulActivateBpTab === 'function') {
            window.azzulActivateBpTab(targetTab, { scroll: true });
          } else {
            window.dispatchEvent(new HashChangeEvent('hashchange'));
          }
        }
      });
    });

    header.querySelectorAll('a[href]').forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileDrawer();
        if (bpDropdown) bpDropdown.classList.remove('is-open');
        if (icfDropdown) icfDropdown.classList.remove('is-open');
      }
    });

    if (typeof setLanguage === 'function') {
      const savedLang = localStorage.getItem('preferredLang') || 'es';
      setLanguage(savedLang);
    }
  }

  function mountFooterLegalAndCookies() {
    const CONSENT_KEY = 'azzul_cookie_consent';

    // 1. Asegurar enlaces legales en todos los footers del sitio
    document.querySelectorAll('a[data-i18n="footer_privacy"]').forEach((a) => {
      a.setAttribute('href', 'privacidad.html');
    });
    document.querySelectorAll('a[data-i18n="footer_terms"]').forEach((a) => {
      a.setAttribute('href', 'terminos.html');
    });

    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom && !footerBottom.querySelector('a[href="privacidad.html"]')) {
      const legalNav = document.createElement('div');
      legalNav.className = 'azzul-footer-legal-links';
      legalNav.innerHTML = `
        <a href="privacidad.html" data-i18n="footer_privacy_full">Política de Privacidad y Uso de Cookies</a>
        <a href="terminos.html" data-i18n="footer_terms_full">Términos y Condiciones de Uso</a>
      `;
      footerBottom.appendChild(legalNav);
    }

    // 2. Montar Banner de Consentimiento de Cookies (Paleta Editorial AZZUL)
    let banner = document.getElementById('azzul-cookie-banner');
    if (!banner) {
      banner = document.createElement('aside');
      banner.id = 'azzul-cookie-banner';
      banner.className = 'azzul-cookie-banner';
      banner.setAttribute('role', 'region');
      banner.setAttribute('aria-label', 'Consentimiento de Cookies');
      banner.innerHTML = `
        <div class="azzul-cookie-copy">
          <span class="azzul-cookie-eyebrow" data-i18n="cookie_eyebrow">PRIVACIDAD Y COOKIES · AZZUL</span>
          <p data-i18n="cookie_body_html">
            Utilizamos cookies técnicas esenciales y analíticas propias para optimizar la velocidad, recordar su idioma y mejorar su experiencia de navegación en <strong>azzulsv.com</strong>. Consulte nuestra <a href="privacidad.html">Política de Privacidad y Cookies</a>.
          </p>
        </div>
        <div class="azzul-cookie-actions">
          <button type="button" class="azzul-cookie-btn-essential" id="cookie-btn-essential" data-i18n="cookie_btn_essential">Solo esenciales</button>
          <button type="button" class="azzul-cookie-btn-accept" id="cookie-btn-accept-all" data-i18n="cookie_btn_accept">Aceptar todas</button>
        </div>
      `;
      document.body.appendChild(banner);
    }

    const saveConsent = (level) => {
      try {
        localStorage.setItem(CONSENT_KEY, JSON.stringify({ level, savedAt: new Date().toISOString() }));
      } catch {}
      banner.setAttribute('hidden', '');
    };

    let existingConsent = null;
    try {
      existingConsent = localStorage.getItem(CONSENT_KEY);
    } catch {}

    if (existingConsent) {
      banner.setAttribute('hidden', '');
    } else {
      banner.removeAttribute('hidden');
    }

    const btnAccept = document.getElementById('cookie-btn-accept-all');
    const btnEssential = document.getElementById('cookie-btn-essential');
    if (btnAccept) btnAccept.onclick = () => saveConsent('accepted_all');
    if (btnEssential) btnEssential.onclick = () => saveConsent('essential_only');

    // Botón opcional en privacidad.html para reconfigurar preferencias
    const resetBtn = document.getElementById('reset-cookie-prefs-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        try { localStorage.removeItem(CONSENT_KEY); } catch {}
        banner.removeAttribute('hidden');
      });
    }

    if (typeof setLanguage === 'function') {
      const savedLang = localStorage.getItem('preferredLang') || 'es';
      setLanguage(savedLang);
    }
  }

  if (document.getElementById('header') || document.querySelector('header.header')) {
    mountNavbar();
  } else {
    document.addEventListener('DOMContentLoaded', mountNavbar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountFooterLegalAndCookies);
  } else {
    mountFooterLegalAndCookies();
  }
})();
