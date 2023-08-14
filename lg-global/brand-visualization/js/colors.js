function getSiblingsByClass(element, className) {
    const siblings = Array.from(element.parentElement.getElementsByClassName(className));
    const index = siblings.indexOf(element);
    if (index !== -1) {
        siblings.splice(index, 1);
    }
    return siblings;
}

function setClass(el, currentClass) {
    let element = el
    
    const getFirstClass = (element) => {return element.classList[0]}
    const getSibs = getSiblingsByClass(el, getFirstClass(el))

    el.classList.add(currentClass)
    getSibs.forEach(sib => {
        sib.classList.remove(currentClass)
    })
}

function btmdotSlider() {
    const slideContainer = document.querySelector('.btmdot-slide__container')
    const slideWrap = slideContainer.querySelector('.btmdot-slide__slider')
    const slideTag = slideContainer.querySelector('.btmdot__tag')
    const slideIndex = slideContainer.querySelector('.btmdot-slide__index span')

    const settings = new Map([
        ['light', 'Light Mode Usage Only'],
        ['light-dark', 'Dark Background'],
        ['dark-light', 'Dark Gradient'],
        ['dark', 'Dark Mode Usage Only'],
        ['dark', 'Dark Mode Usage Only'],
        ['dark', 'Dark Mode Usage Only'],
    ]);

    const swiper = new Swiper(slideWrap, {
        slidesPerView: 1,
        spaceBetween: 30,
        easing: 'cubic-bezier(0.56, 0, 0.28, 1)',
        effect : 'fade',
        speed: 500,
        pagination: {
            el: ".btmdot-slide__pagination",
            clickable: true,
            bulletClass: 'btmdot-slide__pagination__btn',
            bulletActiveClass: 'btmdot-slide__pagination__btn--active',
            renderBullet: function (index, className) {
                return `<button class="${className} ${className}--${Array(...settings.keys())[index]}"></button>`;
            },
        },
    });

    swiper.on('activeIndexChange', ()=> {
        let index = swiper.activeIndex
        let currentClass = Array(...settings.keys())[index]
        let currentText = Array(...settings.values())[index]

        slideContainer.dataset.typeSet = currentClass
        slideTag.textContent = currentText
        slideIndex.textContent = index <= 9 ? '0' + Number(index + 1) : Number(index + 1)
    })
}

function copyHexCode() {
    const btnHexAll = document.querySelectorAll('.btn-copy-hexcode')


    btnHexAll.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault()
            let href = this.getAttribute('href');

            navigator.clipboard.writeText(href).then(function() {
                // alert('Link copied to clipboard!');
            }).catch(function(err) {
                // alert('Failed to copy link: ', err);
            });

        })
    })
}

function colorSystemSlide() {
    const colorChartWrap = document.querySelector('.colour-system')
    const colorSlide = colorChartWrap.querySelector('.colour-system__slide-wrap')
    const colorIdxText = colorChartWrap.querySelector('.colour-system__index')
    const colorChip = colorChartWrap.querySelector('.color-chip')

    const swiper = new Swiper(colorSlide, {
        slidesPerView: 1,
        spaceBetween: 40,
        easing: 'cubic-bezier(0.56, 0, 0.28, 1)',
        speed: 500,
        navigation: {
            nextEl: '.colour-system .swiper-button-next',
            prevEl: '.colour-system .swiper-button-prev',
        }
    });

    swiper.on('activeIndexChange', () => {
        let textIdx = '0' + Number(swiper.activeIndex + 1)

        setIndex(textIdx)
        setChart(textIdx)
    })

    function setIndex(idx) {
        colorIdxText.textContent = idx
    }

    function setChart(idx) {
        colorChip.dataset.colorChart = 'chart-' + idx
    }
}

function brandElememtsSlider() {
    const brandElements = document.querySelector('.our-identity__slider')

    const swiper = new Swiper(brandElements, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        easing: 'cubic-bezier(0.56, 0, 0.28, 1)',
        navigation: {
            nextEl: '.brand-elements__controller .swiper-button-next',
            prevEl: '.brand-elements__controller .swiper-button-prev',
        },
        scrollbar: {
            el: '.our-identity__progressbar',
            draggable: true
        },
        breakpoints: {
            1279: {
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
            
        }
    });

}


window.addEventListener('DOMContentLoaded', () => {
    btmdotSlider() 
    copyHexCode()
    colorSystemSlide()
    brandElememtsSlider()

})

