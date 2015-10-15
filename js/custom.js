$(document).ready(function() {
  // Activate page scrolling library
  $('#fullpage').fullpage({
    menu: '#menu',
    lockAnchors: false,
    anchors: ['top', 'product', 'availability', 'order', 'footer'],    
    navigation: true,
    navigationPosition: 'right',
  });

  // hide right nav for small screens
  $('#fp-nav').addClass('hide-on-small-only');
  
  $('blockquote.animated').addClass('light-border');
  setInterval(function(){
    $('.flipbox').toggleClass('flip');
    $('blockquote.animated').toggleClass('light-border');
  }, 7000);

  // countdown
  var launch = new Date($('.countdown').attr('until'));
  setInterval(function(){
    $('.countdown').html(get_countdown_text(launch));
  }, 1000);

  $('select').material_select();

});

function get_countdown_text(until) {
  var now = Date.now();  
  var diff = Math.floor((until - now)/1000);

  var M_TO_S = 60;
  var H_TO_S = 3600;
  var D_TO_S = 86400;

  var diff_day = Math.floor(diff / D_TO_S);
  var diff = diff - diff_day * D_TO_S;

  var diff_hour = Math.floor(diff / H_TO_S);
  var diff = diff - diff_hour * H_TO_S;

  var diff_minute = Math.floor(diff / M_TO_S);
  var diff = diff - diff_minute * M_TO_S;

  return diff_day + ' <small>days</small> ' + diff_hour + ' <small>hours</small> ' + diff_minute + ' <small>minutes</small> ' + diff + ' <small>seconds</small> ';
}