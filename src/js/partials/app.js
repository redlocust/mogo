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

});