// Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto slide change every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);
