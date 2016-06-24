$(function($) {

  $('.counter').counterUp({
    delay: 100,
    time: 3000
  });


  $('#waypoint').waypoint(function() {
    $('').addClass('animated').addClass('bounce').addClass('infinite');
  },{
    triggerOnce: true,
    offset: '90%'
  });

  $('.js-accordion-trigger').bind('click', function(e){
    jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
    jQuery(this).parent().toggleClass('is-expanded');
    e.preventDefault();
  });

});