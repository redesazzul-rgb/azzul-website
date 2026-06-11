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
                'sobre-azzul': 'link-about',
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

    // 12. Control de reproducción de video en Hover (Galería de Avances en Video) - Solo Escritorio
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const videoCards = document.querySelectorAll('.video-card');
    
    if (!isTouchDevice) {
        videoCards.forEach(card => {
            const video = card.querySelector('video');
            if (video) {
                card.addEventListener('mouseenter', () => {
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            console.log("Interacción de reproducción gestionada:", error);
                        });
                    }
                });
                
                card.addEventListener('mouseleave', () => {
                    video.pause();
                });
            }
        });
    } else {
        // En Móvil (Dispositivos Táctiles): Lógica Lightbox Interactivo
        // 1. Tocar un video de la galería de avances en video
        videoCards.forEach(card => {
            const video = card.querySelector('video');
            if (video) {
                // Prevenir comportamiento por defecto de hover y abrir Lightbox
                card.addEventListener('click', (e) => {
                    e.preventDefault();
                    const src = video.getAttribute('src');
                    if (src) {
                        openLightbox(src, true);
                    }
                });
            }
        });

        // 2. Tocar una foto de la comparativa de San Blas
        const comparisonWrappers = document.querySelectorAll('.comparison-wrapper');
        comparisonWrappers.forEach(wrapper => {
            const img = wrapper.querySelector('img');
            if (img) {
                wrapper.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const src = img.getAttribute('src');
                    if (src) {
                        openLightbox(src, false);
                    }
                });
            }
        });

        // Función Helper para abrir el Lightbox Modal
        function openLightbox(src, isVideo) {
            // Eliminar lightbox previo si existe
            const existing = document.querySelector('.azzul-lightbox-modal');
            if (existing) existing.remove();

            // Crear Modal
            const modal = document.createElement('div');
            modal.className = 'azzul-lightbox-modal';
            Object.assign(modal.style, {
                position: 'fixed',
                inset: '0',
                backgroundColor: 'rgba(11, 19, 41, 0.95)',
                backdropFilter: 'blur(10px)',
                webkitBackdropFilter: 'blur(10px)',
                zIndex: '99999',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: '0',
                transition: 'opacity 0.3s ease'
            });

            // Botón de Cierre "X"
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '&times;';
            Object.assign(closeBtn.style, {
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: '3rem',
                cursor: 'pointer',
                zIndex: '100000',
                padding: '0.5rem',
                lineHeight: '1'
            });

            // Contenedor de Contenido
            const container = document.createElement('div');
            Object.assign(container.style, {
                maxWidth: '90%',
                maxHeight: '80%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            });

            if (isVideo) {
                const videoEl = document.createElement('video');
                videoEl.src = src;
                videoEl.playsInline = true;
                videoEl.loop = true;
                videoEl.autoplay = true;
                videoEl.muted = false; // Queremos sonido si es a pantalla completa
                Object.assign(videoEl.style, {
                    width: '100%',
                    height: 'auto',
                    maxHeight: '70vh',
                    borderRadius: '12px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)'
                });

                // Reproducir / Pausar al tocar el video
                videoEl.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (videoEl.paused) {
                        videoEl.play();
                    } else {
                        videoEl.pause();
                    }
                });

                container.appendChild(videoEl);

                // Agregar indicador de toque/reproducción
                const hint = document.createElement('div');
                hint.innerText = "Toque el video para reproducir / pausar";
                Object.assign(hint.style, {
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.85rem',
                    marginTop: '10px',
                    fontFamily: 'sans-serif'
                });
                container.appendChild(hint);
            } else {
                const imgEl = document.createElement('img');
                imgEl.src = src;
                Object.assign(imgEl.style, {
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)'
                });

                imgEl.addEventListener('click', (e) => {
                    e.stopPropagation();
                });

                container.appendChild(imgEl);
            }

            modal.appendChild(closeBtn);
            modal.appendChild(container);
            document.body.appendChild(modal);

            // Prevenir scroll de la página de fondo
            document.body.style.overflow = 'hidden';

            // Animación Fade In
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 50);

            // Función de Cierre
            const close = () => {
                modal.style.opacity = '0';
                document.body.style.overflow = '';
                setTimeout(() => {
                    modal.remove();
                }, 300);
            };

            closeBtn.addEventListener('click', close);
            modal.addEventListener('click', close);
        }
    }
});
