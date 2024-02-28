const prevBtn = document.querySelector(".prev-slider");
const nextBtn = document.querySelector(".next-slider");
let cCarouselInner = document.querySelector(".slides");
let leftValue = 0;

/*let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

const totalMovementSize =
    parseFloat(
        document.querySelector(".cCarousel-item").getBoundingClientRect().width,
        10
    ) +
    parseFloat(
        window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
        10
    );

next.addEventListener("click", () => {
    const carouselVpWidth = carouselVp.getBoundingClientRect().width;
    if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
        leftValue -= totalMovementSize;
        cCarouselInner.style.left = leftValue + "px";
    }
});*/
