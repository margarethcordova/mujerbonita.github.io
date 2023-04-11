window.onload = function(){
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