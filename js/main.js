$('.poll__block').on('click', function () {
    $('.poll__answer').css({'color':'#2d2d2d'});
    $('.poll__choice').prop('checked', false)
    $(this).children('.poll__answer').css({'color':'#55b2f3'});
    $(this).children('.poll__choice').prop('checked', true);
});

function openMenu() {
    $('.menu').toggleClass('menu__open');
}