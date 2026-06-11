/* ==========================================================================
   AZZUL - LÓGICA DE INTERACTIVIDAD GLOBAL
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto Scroll en la Cabecera (Navbar)
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };
    
    // Ejecutar al inicio por si la página carga ya con scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // 2. Menú Hamburguesa Móvil
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevenir scroll en el fondo cuando el menú esté abierto en móviles
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Cerrar menú al hacer clic en enlaces en móvil
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // 3. Soporte para Smooth Scroll en anclas internas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. Resaltar enlace activo en Navbar al hacer Scroll (Single Page Highlight)
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            const sectionId = current.getAttribute('id');
            
            // Mapear IDs a sus correspondientes links
            const linkMap = {
                'hero-section': 'link-inicio',
                'about': 'link-about',
                'team': 'link-team',
                'how-we-work': 'link-how-we-work',
                'what-we-do': 'link-what-we-do'
            };
            
            const linkId = linkMap[sectionId];
            if (linkId) {
                const linkElement = document.getElementById(linkId);
                if (linkElement) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
                        linkElement.classList.add('active');
                    }
                }
            }
        });
    });

    // 5. Acordeón Interactivo (Sección WHAT WE DO)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');
            const icon = header.querySelector('svg');
            const isOpen = header.getAttribute('aria-expanded') === 'true';
            
            // Cerrar todos los demás acordeones
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    const otherHeader = otherItem.querySelector('.accordion-header');
                    const otherBody = otherItem.querySelector('.accordion-body');
                    const otherIcon = otherHeader.querySelector('svg');
                    
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherBody.style.display = 'none';
                    if (otherIcon) otherIcon.style.transform = '';
                }
            });
            
            // Alternar el estado del acordeón clickeado
            if (isOpen) {
                header.setAttribute('aria-expanded', 'false');
                body.style.display = 'none';
                if (icon) icon.style.transform = '';
            } else {
                header.setAttribute('aria-expanded', 'true');
                body.style.display = 'block';
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // 6. Validación y Simulación de Envío de Formularios (Landing, Contacto y Academia)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Si es el formulario de la academia (sistema.html)
            if (form.id === 'academy-form') {
                const btnSubmit = document.getElementById('btn-submit-academy');
                const indicator = form.querySelector('.academy-submit-indicator');
                const toast = form.querySelector('.academy-success-toast');
                
                // Validación básica de campos
                let isValid = true;
                form.querySelectorAll('.form-control').forEach(input => {
                    if (!input.value.trim() && input.id !== 'academy-phone') {
                        input.classList.add('is-invalid');
                        isValid = false;
                    } else {
                        input.classList.remove('is-invalid');
                    }
                });
                
                if (!isValid) return;
                
                btnSubmit.disabled = true;
                if (indicator) indicator.classList.add('active');
                if (toast) toast.classList.remove('active');
                
                setTimeout(() => {
                    if (indicator) indicator.classList.remove('active');
                    btnSubmit.disabled = false;
                    
                    if (toast) {
                        toast.innerHTML = `¡Registro Exitoso! Bienvenido al AZZUL Training Program.`;
                        toast.classList.add('active');
                    }
                    
                    form.reset();
                    
                    // Ocultar toast después de 4s
                    setTimeout(() => {
                        if (toast) toast.classList.remove('active');
                    }, 4000);
                }, 1500);
                
                return;
            }
            
            // Formulario de Contacto general (index.html o contacto.html)
            if (form.id === 'contact-form') {
                const btnSubmit = form.querySelector('button[type="submit"]');
                const indicator = form.querySelector('.submit-indicator');
                const toast = form.querySelector('.success-message-toast');
                const originalText = btnSubmit.innerHTML;
                
                // Validación básica
                let isValid = true;
                const nameInput = form.querySelector('#name') || form.querySelector('#contact-name');
                const emailInput = form.querySelector('#email') || form.querySelector('#contact-email');
                const msgInput = form.querySelector('#message') || form.querySelector('#contact-message');
                
                [nameInput, emailInput, msgInput].forEach(input => {
                    if (input) {
                        if (!input.value.trim()) {
                            input.classList.add('is-invalid');
                            isValid = false;
                        } else {
                            input.classList.remove('is-invalid');
                        }
                    }
                });
                
                if (!isValid) return;
                
                // Cambiar a estado de carga
                btnSubmit.disabled = true;
                if (indicator) {
                    indicator.classList.add('active');
                } else {
                    btnSubmit.innerHTML = `
                        Enviando...
                        <svg class="spinner" width="20" height="20" viewBox="0 0 50 50" style="animation: spin 1s linear infinite; margin-left: 0.5rem; stroke: currentColor; fill: none; stroke-width: 4; stroke-linecap: round; display: inline-block; vertical-align: middle;">
                            <circle cx="25" cy="25" r="20" stroke="rgba(255,255,255,0.2)"></circle>
                            <path d="M25 5 A 20 20 0 0 1 45 25"></path>
                        </svg>
                    `;
                }
                
                if (toast) toast.classList.remove('active');
                
                // Simular envío con delay de 1.5s
                setTimeout(() => {
                    if (indicator) indicator.classList.remove('active');
                    
                    if (toast) {
                        toast.innerHTML = `¡Mensaje enviado con éxito! Un asesor se contactará pronto.`;
                        toast.classList.add('active');
                        btnSubmit.disabled = false;
                    } else {
                        btnSubmit.innerHTML = `¡Enviado con éxito!`;
                        btnSubmit.style.background = 'var(--eco-green)';
                        btnSubmit.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.4)';
                    }
                    
                    form.reset();
                    
                    // Restaurar botón/toast después de 3 segundos
                    setTimeout(() => {
                        if (!toast) {
                            btnSubmit.disabled = false;
                            btnSubmit.innerHTML = originalText;
                            btnSubmit.style.background = '';
                            btnSubmit.style.boxShadow = '';
                        } else {
                            toast.classList.remove('active');
                        }
                    }, 3000);
                    
                }, 1500);
            }
        });
        
        // Quitar is-invalid cuando el usuario empiece a escribir
        form.querySelectorAll('.form-control, .form-input').forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('is-invalid');
            });
        });
    });

    // 7. Visor Técnico de Capas ICF (sistema.html)
    const layerButtons = document.querySelectorAll('.layer-btn');
    const layerPanes = document.querySelectorAll('.viewer-content-pane');
    
    if (layerButtons.length > 0 && layerPanes.length > 0) {
        layerButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetLayer = btn.getAttribute('data-layer');
                
                // Desactivar todos los botones e hidear panes
                layerButtons.forEach(b => b.classList.remove('active'));
                layerPanes.forEach(p => p.classList.remove('active'));
                
                // Activar seleccionado
                btn.classList.add('active');
                const activePane = document.getElementById(`layer-pane-${targetLayer}`);
                if (activePane) activePane.classList.add('active');
            });
        });
    }

    // 8. Selector de Pestañas de Negocio (sistema.html)
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabTriggers.length > 0 && tabPanes.length > 0) {
        tabTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const targetTab = trigger.getAttribute('data-tab');
                
                // Desactivar triggers y panes
                tabTriggers.forEach(t => t.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));
                
                // Activar seleccionados
                trigger.classList.add('active');
                const activePane = document.getElementById(targetTab);
                if (activePane) activePane.classList.add('active');
            });
        });
    }

    // 9. Filtros de Portafolio Dinámicos con Animación (proyectos.html)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    if (filterButtons.length > 0 && portfolioCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.getAttribute('data-filter');
                
                // Activar botón de filtro
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filtrar tarjetas
                portfolioCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || filterValue === cardCategory) {
                        card.style.display = 'flex';
                        // Pequeña animación de fade-in
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(10px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300); // Empareja la transición CSS
                    }
                });
            });
        });
    }

    // 10. Soporte táctil / click para el Mega Menú en móvil
    const dropdownItem = document.querySelector('.nav-item-dropdown');
    if (dropdownItem) {
        const link = dropdownItem.querySelector('.nav-link');
        
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                // Prevenir navegación del link si es móvil para expandir el sub-menú
                e.preventDefault();
                dropdownItem.classList.toggle('active');
            }
        });
    }

    // 11. Soporte de Scroll Suave al cargar la página con hash (ej. #ciencia-constructiva)
    if (window.location.hash) {
        const hash = window.location.hash;
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            // Un retraso pequeño para permitir el renderizado y carga de recursos
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300);
        }
    }
});
