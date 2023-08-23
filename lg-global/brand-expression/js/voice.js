function onlyMobileSlide() {
    let ww = window.innerWidth;
    let futureSwiper = [];
    let target = '.slideOnlyMo';
    const targetEL = document.querySelectorAll(target);

    for (let i = 0; i < targetEL.length; i++) {
        futureSwiper[i] = undefined;
    }

    function initSwiper() {
        targetEL.forEach(function (el, idx) {
            if (ww < 769 && futureSwiper[idx] == undefined) {
                el.classList.add(`slide-mo-${idx}`);

                futureSwiper[idx] = new Swiper(`.slide-mo-${idx}`, {
                    slidesPerView: 1,
                    simulateTouch: true,
                    navigation: {
                        nextEl: `.slide-mo-${idx} + .slide-contorller button.next`,
                        prevEl: `.slide-mo-${idx} + .slide-contorller button.prev`,
                    },
                });
            } else if (ww >= 769 && futureSwiper[idx] != undefined) {
                futureSwiper[idx].destroy();
                futureSwiper[idx] = undefined;
            }
        });
    }

    window.addEventListener('resize', function () {
        ww = window.innerWidth;

        initSwiper();
    });

    initSwiper();
}


function outOfHomeSlider() {
    const slider = document.querySelector('.bring-it-to-life__slide')
    const slideTag = document.querySelector('.bring-it-to-life .index-text')
    const tag = ['Out of home', '.com', 'Mobile experience', 'Social']

    const swiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 20,
        easing: 'cubic-bezier(0.56, 0, 0.28, 1)',
        navigation: {
            prevEl: '.bring-it-to-life__slide__controller .prev-btn',
            nextEl: '.bring-it-to-life__slide__controller .next-btn',
        },
    })

    swiper.on('activeIndexChange', ()=> {
        let idx = swiper.activeIndex
        let idxTag = tag[idx]

        slideTag.textContent = idxTag
    })
} 

window.addEventListener('DOMContentLoaded', () => {
    onlyMobileSlide()
    outOfHomeSlider()
})
