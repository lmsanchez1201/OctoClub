// ========================================
// VARIABLES GLOBALES
// ========================================
let currentSlide = 0;
let currentTestimonial = 0;
const slideDuration = 5000; // 5 segundos

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initHeroCarousel();
    initTestimonialCarousel();
    initScrollAnimations();
    initFAQ();
    initSmoothScroll();
    
    // Auto-play carruseles
    setInterval(nextSlide, slideDuration);
    // No auto-play para testimonios, solo manual
});

// ========================================
// NAVEGACIÓN
// ========================================
function initNavbar() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Toggle menú móvil
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        // Actualizar atributo ARIA
        navToggle.setAttribute('aria-expanded', navToggle.classList.contains('active'));
    });
    
    // Cerrar menú al hacer click en un link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            // Asegurar atributo ARIA en estado cerrado
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// HERO CAROUSEL
// ========================================
function initHeroCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    
    // Crear indicadores
    slides.forEach((slide, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Touch events para móvil
    let touchStartX = 0;
    let touchEndX = 0;
    
    const carousel = document.querySelector('.carousel-container');
    
    carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide();
        }
    }
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (n >= slides.length) {
        currentSlide = 0;
    }
    if (n < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

// ========================================
// TESTIMONIAL CAROUSEL
// ========================================
function initTestimonialCarousel() {
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevTestimonial);
        nextBtn.addEventListener('click', nextTestimonial);
    }
    
    // Touch events para móvil
    const carousel = document.querySelector('.testimonials-wrapper');
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (carousel) {
        carousel.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        carousel.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleTestimonialSwipe();
        });
    }
    
    function handleTestimonialSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextTestimonial();
        }
        if (touchEndX > touchStartX + 50) {
            prevTestimonial();
        }
    }
}

function updateTestimonials() {
    const wrapper = document.getElementById('testimonialsWrapper');
    const cards = document.querySelectorAll('.testimonial-card');
    
    if (!wrapper || cards.length === 0) return;
    
    // Calcular el desplazamiento
    const isMobile = window.innerWidth <= 768;
    const cardWidth = cards[0].offsetWidth;
    const gap = 16; // var(--spacing-sm) en pixels
    
    if (isMobile) {
        // En móvil, mostrar una tarjeta a la vez
        const offset = currentTestimonial * (cardWidth + gap);
        wrapper.style.transform = `translateX(-${offset}px)`;
    } else {
        // En desktop, mostrar dos tarjetas y mover de una en una
        const offset = currentTestimonial * (cardWidth + gap);
        wrapper.style.transform = `translateX(-${offset}px)`;
    }
}

function nextTestimonial() {
    const cards = document.querySelectorAll('.testimonial-card');
    const isMobile = window.innerWidth <= 768;
    const maxSlide = isMobile ? cards.length - 1 : cards.length - 2;
    
    if (currentTestimonial < maxSlide) {
        currentTestimonial++;
    } else {
        currentTestimonial = 0;
    }
    updateTestimonials();
}

function prevTestimonial() {
    const cards = document.querySelectorAll('.testimonial-card');
    const isMobile = window.innerWidth <= 768;
    const maxSlide = isMobile ? cards.length - 1 : cards.length - 2;
    
    if (currentTestimonial > 0) {
        currentTestimonial--;
    } else {
        currentTestimonial = maxSlide;
    }
    updateTestimonials();
}

// Recalcular posición al cambiar tamaño de ventana
window.addEventListener('resize', updateTestimonials);

// ========================================
// ANIMACIONES AL SCROLL
// ========================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Una vez mostrado, dejar de observar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ========================================
// FAQ ACCORDION
// ========================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        // Inicializar aria-expanded
        if (question) question.setAttribute('aria-expanded', 'false');

        question.addEventListener('click', function() {
            // Cerrar otros items y actualizar aria
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle item actual
            item.classList.toggle('active');
            // Actualizar aria-expanded del botón
            const isActive = item.classList.contains('active');
            question.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar links vacíos o solo con #
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Altura del navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// UTILIDADES
// ========================================

// Lazy loading de imágenes
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Contador animado para las estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isPlus = target.includes('+');
        const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
        
        let current = 0;
        const increment = numericValue / 50;
        
        const updateCounter = () => {
            if (current < numericValue) {
                current += increment;
                if (isPercentage) {
                    counter.textContent = Math.ceil(current) + '%';
                } else if (isPlus) {
                    counter.textContent = '+' + Math.ceil(current);
                } else {
                    counter.textContent = Math.ceil(current);
                }
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Iniciar animación cuando el elemento sea visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Llamar a las funciones de utilidad
document.addEventListener('DOMContentLoaded', function() {
    lazyLoadImages();
    animateCounters();
});

// ========================================
// EFECTOS ADICIONALES
// ========================================

// Parallax effect para hero
window.addEventListener('scroll', function() {
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        heroCarousel.style.transform = `translateY(${parallax}px)`;
    }
});

// Cambiar color del WhatsApp button al scroll
window.addEventListener('scroll', function() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        if (window.scrollY > 300) {
            whatsappBtn.style.opacity = '1';
        } else {
            whatsappBtn.style.opacity = '0.7';
        }
    }
});

// Prevenir que el usuario haga scroll mientras el menú móvil está abierto
const navToggle = document.getElementById('navToggle');
const body = document.body;

if (navToggle) {
    navToggle.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });
}

// Cerrar menú móvil al cambiar tamaño de ventana
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        if (navMenu && navToggle) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = 'auto';
        }
    }
});

// ========================================
// PRELOADER (OPCIONAL)
// ========================================
window.addEventListener('load', function() {
    // Si quieres agregar un preloader más tarde
    document.body.classList.add('loaded');
});

// Console logs removed for production
