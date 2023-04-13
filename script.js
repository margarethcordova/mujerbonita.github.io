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