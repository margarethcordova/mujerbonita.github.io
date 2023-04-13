window.onload = function () {
    alert('cargo la pagina completamente');
    $('#loading').fadeOut();
    $('body').removeClass('hidden');
};

$(document).ready(function () {
    $('.menu-burger').click(function () {
        $('.menu-burger').toggleClass('active')
        $('nav').toggleClass('active')
    })

    var swiper = new Swiper('.carrusel-list', {
        slidesPerView: 4,
        spaceBetween: 50,
        loop: true,
        centerSlide: 'true',
        fade:'true',
        grapCursor: 'true',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});

// //cart
// let cartIcon = document.querySelector("cart-icon");
// let cart = document.querySelector(".cart")
// let closeCart= document.querySelector("#close-cart")

// //open cart
// carTIcon.onclick =() => {
//     cart.classList.add("active");
// };
// //close cart
// closeCart.onclick = () =>{
//     cart.classList.remove("active");
// };