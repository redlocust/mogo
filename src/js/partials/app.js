$(function ($) {

    $('.counter').counterUp({
        delay: 100,
        time: 3000
    });


    $('#waypoint').waypoint(function () {
        $('').addClass('animated').addClass('bounce').addClass('infinite');
    }, {
        triggerOnce: true,
        offset: '90%'
    });

    $('.js-accordion-trigger').bind('click', function (e) {
        jQuery(this).parent().siblings().find('.submenu').slideUp('700');
        jQuery(this).parent().siblings().removeClass('is-expanded');
        jQuery(this).parent().find('.submenu').slideToggle('700');
        jQuery(this).parent().toggleClass('is-expanded');
        e.preventDefault();
    });
});