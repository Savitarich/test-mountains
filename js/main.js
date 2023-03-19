$(function () {
    $(".header__slider-row").slick({
        arrows: true,
        slidesToShow: 1,
    });
});

$(".header__slider-row").on("init", function (event, slick) {
    var totalSlides = slick.slideCount;
    $(".total-slides").text(totalSlides);
});

$(".header__slider-row").on(
    "afterChange",
    function (event, slick, currentSlide) {
        var currentSlideNumber = currentSlide + 1;
        $(".current-slide").text(currentSlideNumber);
    }
);
const burgerMenu = document.querySelector(".nav__burger-menu");
const navList = document.querySelector(".nav__list");

burgerMenu.addEventListener("click", function () {
    navList.classList.toggle("active");
    burgerMenu.classList.toggle("active");
});

navList.addEventListener("click", function () {
    navList.classList.remove("active");
    burgerMenu.classList.remove("active");
});
