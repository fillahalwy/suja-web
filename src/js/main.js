// Contact to WhatsApp
const WHATSAPP_CONFIG = {
    phone: '6289504456062',
    message: 'Halo Suja Web, saya tertarik dengan layanan pembuatan website Anda.'
};

document.addEventListener('DOMContentLoaded', function() {
  const whatsappLink = `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`;
  
  // Update semua link "Get Started" dan "Kirim Pesan"
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    link.href = whatsappLink;
    link.target = '_blank';
  });

  // Run Typewriter effect
  initTypewriter();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle (Fix for navigation selectors)
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav-menu-mobile');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            // Morph hamburger lines to X
            hamburger.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            hamburger.children[1].style.opacity = '0';
            hamburger.children[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            // Reset hamburger lines
            hamburger.children[0].style.transform = 'none';
            hamburger.children[1].style.opacity = '1';
            hamburger.children[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-menu-mobile .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            // Reset hamburger lines
            if (hamburger) {
                hamburger.children[0].style.transform = 'none';
                hamburger.children[1].style.opacity = '1';
                hamburger.children[2].style.transform = 'none';
            }
        }
    });
});

// Active nav link highlighting on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Button interactions - Ripple Effect
document.querySelectorAll('.btn, button[type="submit"], [data-whatsapp]').forEach(button => {
    button.addEventListener('click', function(e) {
        // Ensure relative positioning for ripple containment
        const computedStyle = window.getComputedStyle(this);
        if (computedStyle.position === 'static') {
            this.style.position = 'relative';
        }
        this.style.overflow = 'hidden';

        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        // Calculate coordinates relative to the button container
        const x = (e.clientX ? e.clientX : rect.left + size / 2) - rect.left - size / 2;
        const y = (e.clientY ? e.clientY : rect.top + size / 2) - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // Styling ripple
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
        ripple.style.transform = 'scale(0)';
        ripple.style.pointerEvents = 'none';
        ripple.style.transition = 'transform 0.6s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.6s ease';
        
        this.appendChild(ripple);

        // Animate ripple scale
        setTimeout(() => {
            ripple.style.transform = 'scale(3)';
            ripple.style.opacity = '0';
        }, 10);

        // Remove ripple element after animation finishes
        setTimeout(() => {
            ripple.remove();
        }, 650);
    });
});

// Form validation and submission
const contactForm = document.querySelector('#contact form');
const submitBtn = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

if (submitBtn && contactForm) {
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const nameInput = contactForm.querySelector('input[placeholder*="nama lengkap"]');
        const emailInput = contactForm.querySelector('input[placeholder*="email bisnis"]');
        const messageInput = contactForm.querySelector('textarea');

        if (nameInput && emailInput && messageInput) {
            if (nameInput.value.trim() && emailInput.value.trim() && messageInput.value.trim()) {
                // Show success message
                alert('Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera.');
                
                // Reset form inputs
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
            } else {
                alert('Mohon isi semua field terlebih dahulu.');
            }
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for smooth fade-in effects
document.querySelectorAll('.expertise-card, .pricing-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(card);
});

// Navbar background styling adjustment on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md', 'bg-white/95', 'border-gray-200/50');
            navbar.classList.remove('bg-white/80', 'border-gray-100/80');
        } else {
            navbar.classList.remove('shadow-md', 'bg-white/95', 'border-gray-200/50');
            navbar.classList.add('bg-white/80', 'border-gray-100/80');
        }
    }
});

// Testimonials Carousel
class TestimonialsCarousel {
    constructor() {
        this.carousel = document.querySelector('.testimonials-carousel');
        this.slides = this.carousel ? this.carousel.querySelectorAll('.grid') : [];
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        
        if (this.carousel && this.totalSlides > 0) {
            this.init();
        }
    }

    init() {
        // Setup prev/next buttons
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        const dots = document.querySelectorAll('.carousel-dot');

        if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Auto play
        this.autoPlay();
    }

    updateCarousel() {
        const offset = -this.currentSlide * 100;
        this.carousel.style.transform = `translateX(${offset}%)`;

        // Update navigation dots
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            if (index === this.currentSlide) {
                dot.classList.add('bg-emerald-500');
                dot.classList.remove('bg-gray-300');
            } else {
                dot.classList.remove('bg-emerald-500');
                dot.classList.add('bg-gray-300');
            }
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    autoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 6000);
    }

    resetAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.autoPlay();
    }
}

// Initialize carousel
const carousel = new TestimonialsCarousel();

// FAQ Accordion Interactivity
document.querySelectorAll('.faq-item').forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon i');
    
    if (toggle && content) {
        toggle.addEventListener('click', () => {
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
            
            // Close all other FAQ items first to make it clean
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                const otherContent = otherItem.querySelector('.faq-content');
                const otherIcon = otherItem.querySelector('.faq-icon i');
                if (otherContent) {
                    otherContent.style.maxHeight = '0px';
                    otherItem.classList.remove('border-emerald-500/20', 'shadow-md');
                }
                if (otherIcon) {
                    otherIcon.className = 'fas fa-plus';
                }
            });
            
            // Toggle current item
            if (isOpen) {
                content.style.maxHeight = '0px';
                if (icon) icon.className = 'fas fa-plus';
                item.classList.remove('border-emerald-500/20', 'shadow-md');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) icon.className = 'fas fa-minus';
                item.classList.add('border-emerald-500/20', 'shadow-md');
            }
        });
    }
});

// Typewriter effect for Hero Headline
function initTypewriter() {
    const textElement = document.getElementById('headline-text');
    if (!textElement) return;
    
    const textToType = "Belum punya website?, serahkan pada Kami";
    let index = 0;
    
    // Clear text before starting
    textElement.textContent = "";
    
    function type() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 75); // Typing speed in ms
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 300);
}

console.log('Suja Web Landing Page Loaded');