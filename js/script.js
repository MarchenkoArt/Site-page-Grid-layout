$(document).ready(function() {
    $('.first-screen__burger').click(function() {
        $('.first-screen__burger').toggleClass('open-menu');
        $('.first-screen__menu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});