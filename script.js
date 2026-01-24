// Mobile Navigation Toggle + Click-outside-to-close (improved for mobile)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle menu when clicking/tapping hamburger
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();           // Prevent the click from closing the menu immediately
    navLinks.classList.toggle('active');
});

// Close menu when clicking/tapping any menu link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking/tapping anywhere outside the menu or hamburger
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});
// Hero Slideshow
const heroSlides = document.querySelectorAll('.hero-slide');
let heroIndex = 0;
setInterval(() => {
    heroSlides[heroIndex].classList.remove('active');
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add('active');
}, 5000);

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});

// Memories Slideshow
let memIndex = 0;
const memSlides = document.querySelectorAll('.memory-slide');
const memDots = document.querySelectorAll('.dot');

function memShowSlides(n) {
    if (n >= memSlides.length) memIndex = 0;
    if (n < 0) memIndex = memSlides.length - 1;

    memSlides.forEach(s => s.classList.remove('active'));
    memDots.forEach(d => d.classList.remove('active'));

    memSlides[memIndex].classList.add('active');
    memDots[memIndex].classList.add('active');
}

function memChangeSlide(n) {
    memShowSlides(memIndex += n);
}

function memCurrentSlide(n) {
    memShowSlides(memIndex = n);
}

// Auto-advance memories slideshow
setInterval(() => {
    memChangeSlide(1);
}, 5000);

// Initialize

memShowSlides(memIndex);
