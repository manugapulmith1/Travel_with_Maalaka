// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
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