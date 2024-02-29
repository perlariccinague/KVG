const carouselContainer = document.querySelector('.slides');
const carouselItems = document.querySelectorAll('.slide');
const totalItems = carouselItems.length;
let currentIndex = 0;
const singleSlideWidth = document.querySelector(".slide").getBoundingClientRect().width;
const dotsContainer = document.querySelector('.dots');

console.log(singleSlideWidth)

function showSlide(index) {
    if (index < 0) {
        index = totalItems-1;
    } else if (index >= totalItems) {
        index = 0;
    }

    const offset = -index * singleSlideWidth; // Adjust 300 to your item width
    carouselContainer.style.transform = `translateX(${offset}px)`;
    currentIndex = index;
    updateDots();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function createDots() {
    for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
         dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => showSlide(i));
    }
    updateDots();
}

function dotClick(index) {
    if (index === showSlide){
        return false;
    }
}
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
createDots();


