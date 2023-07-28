// script.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const indicators = document.querySelectorAll('.indicator');
const slideCount = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function updateIndicators(index) {
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    updateIndicators(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
    updateIndicators(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(currentSlide);
    updateIndicators(currentSlide);
}

// Set up automatic slide change every 5 seconds (adjust as needed)
setInterval(nextSlide, 10000);

// Initialize the slider and indicators
showSlide(currentSlide);
updateIndicators(currentSlide);