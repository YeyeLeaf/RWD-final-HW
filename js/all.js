$(document).ready(function () {
    $('.bar-menu').click(function (e) { 
        e.preventDefault();
        $('.menu').slideToggle();
    });
});