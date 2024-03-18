let currentSlide = 1;

function showSlide(n) {
    const gallery = document.querySelector('.gallery');
    const slides = document.querySelectorAll('.slide');

    if (n > slides.length) {
        currentSlide = 1;
    } else if (n < 1) {
        currentSlide = slides.length;
    }

    const translateValue = -(currentSlide - 1) * (100 / 2);
    gallery.style.transform = `translateX(${translateValue}%)`;
}

function prevSlide() {
    showSlide(currentSlide -= 1);
}

function nextSlide() {
    showSlide(currentSlide += 1);
}

// Initial slide
showSlide(currentSlide);
