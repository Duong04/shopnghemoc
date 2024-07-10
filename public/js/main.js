$(document).ready(function(){
    $('.products-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            { 
            breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            { 
            breakpoint: 370,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.review-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
        responsive: [
            {
            breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
            breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.brand-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
            breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
            breakpoint: 390,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
});
            

const goToTop = document.querySelector('.go-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        goToTop.style.display = 'block';
    } else if (window.scrollY < 200) {
        goToTop.style.display = 'none';
    }
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.innerWidth <= 992) {
        if (window.scrollY >= 85) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        }
    } else {
        header.classList.remove('header-fixed');
    }
});

const contactActive = document.querySelector('.contact-active');
const contact = document.querySelector('.contact')
contactActive.addEventListener('click', (e) => {
    e.preventDefault();
    contact.classList.toggle('active');
    contactActive.classList.toggle('active');
});

const modalMain = document.querySelector('.modal-categories');
const categoryActive = document.querySelector('.categories-active');
const bodyMain = document.querySelector('body');

categoryActive.addEventListener('click', (e) => {
    e.preventDefault();
    modalMain.classList.toggle('active');
    bodyMain.classList.toggle('active');
    categoryActive.classList.toggle('active');
});