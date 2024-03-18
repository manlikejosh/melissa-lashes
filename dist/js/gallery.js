// Declare a variable to keep track of the current slide
let currentSlide = 1;

// Function to show the current slide
function showSlide(n) {
    // Get the gallery container and all slides
    const gallery = document.querySelector('.gallery');
    const slides = document.querySelectorAll('.slide');
    console.log(slides);
    console.log(slides.length)

    // If n is greater than the total number of slides, set currentSlide to 1
    // set length to -1 for two pics per slide
    if (n > (slides.length)) {
        currentSlide = 1;
        // If n is less than 1, set currentSlide to the last slide
    } else if (n < 1) {
        currentSlide = slides.length;
    }

    // Calculate the translate value based on the current slide
    const translateValue = -(currentSlide - 1) * (100); // divide 100 by two for two pictures per slide
    // Apply the transform to the gallery container to show the current slide
    gallery.style.transform = `translateX(${translateValue}%)`;
}

// Function to show the previous slide
function prevSlide() {
    showSlide(currentSlide -= 1);
}

// Function to show the next slide
function nextSlide() {
    showSlide(currentSlide += 1);
}

// Initial slide setup
showSlide(currentSlide);
