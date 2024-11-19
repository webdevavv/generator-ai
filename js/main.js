(function () {

    function scrollHorizontally(e) {

        var scrollPos = this.scrollLeft;  // Сколько прокручено по горизонтали, до прокрутки (не перемещать эту строку!)

        // Горизонтальная прокрутка
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        this.scrollLeft -= (delta * 100); // Multiplied by 10

        var widthElem = this.scrollWidth; // Ширина всего элемента
        var widthBrowser = document.documentElement.clientWidth;  // Ширина окна минус размер вертикального скролла


        // Прокрутка вверх, но элемент уже в крайней левой позиции, то двигаемся вверх
        if ((delta == 1) && (this.scrollLeft == 0)) return;
        // Прокрутка вниз, но элемент виден полностью. Или элемент до конца прокручен в правый край
        if ((widthBrowser >= widthElem) || (scrollPos == this.scrollLeft)) return;

        e.preventDefault(); // запрещает прокрутку по вертикали

    }

    var elems = document.querySelectorAll('.whom__list');
    for (var a = 0; a < elems.length; a++) {
        elems[a].addEventListener("mousewheel", scrollHorizontally, false);     // IE9, Chrome, Safari, Opera
        elems[a].addEventListener("DOMMouseScroll", scrollHorizontally, false); // Firefox
    }

})();

var faq = document.querySelectorAll('.faq__item').forEach((faq, i) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let swiperInstance = null;

    const initSwiper = () => {
        const screenWidth = window.innerWidth;
        const swiperContainer = document.querySelector('.other__swiper');
        
        if (screenWidth < 980 && !swiperInstance) {
            swiperInstance = new Swiper(swiperContainer, {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                    },
                    980: {
                        slidesPerView: 2,
                    },
                },
            });
        } else if (screenWidth >= 980 && swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    };

    initSwiper();

    window.addEventListener('resize', initSwiper);
});



