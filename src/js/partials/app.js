$(function () {

  //open first panel of accordeon
  $('.submenu:first').show();
  $('.submenu').perfectScrollbar();


  $('.quote__slider').slick({
    //setting-name: setting-value
  });

  $('.testimonial__slider').slick({
    //setting-name: setting-value
  });

  //roll numbers
  $('.counter').counterUp({
    delay: 100,
    time: 3000
  });

  //$('#waypoint').waypoint(function () {
  //  $('').addClass('animated').addClass('bounce').addClass('infinite');
  //}, {
  //  triggerOnce: true,
  //  offset: '90%'
  //});

  $('.js-accordion-trigger').bind('click', function (e) {
    jQuery(this).parent().siblings().find('.submenu').slideUp('600');
    jQuery(this).parent().siblings().removeClass('is-expanded');
    jQuery(this).parent().find('.submenu').slideToggle('600');
    jQuery(this).parent().toggleClass('is-expanded');

    if ($(this).parent().find('.service2__arrow-icon').hasClass('icon--arrow-up')) {
      $(this).parent().find('.service2__arrow-icon').removeClass('icon--arrow-up').addClass('icon--arrow-down');
    } else {
      $(this).parent().find('.service2__arrow-icon').removeClass('icon--arrow-down').addClass('icon--arrow-up');
      $(this).parent().siblings().find('.service2__arrow-icon').removeClass('icon--arrow-up').addClass('icon--arrow-down');
    }

    e.preventDefault();
  });
});