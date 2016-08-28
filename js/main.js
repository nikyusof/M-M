/**
 * The main JS file for the app
 */

var SCROLL_ANIMATION_TIME = 750;

/**
 * Function for the scroll animation
 * @param id
 */
function scrollNav(id) {
  $('html, body').animate({
    scrollTop: $("" + id).offset().top
  }, 'slow');
}

/**
 * Function for the next scroll bar
 */
$(function() {
  function scroll(direction) {
    var scroll,
        positions = [],
        here = $(window).scrollTop(),
        collection = $('.slide');

    collection.each(function() {
      positions.push(parseInt($(this).offset()['top'], 10));
    });

    for(var i = 0; i < positions.length; i++) {
      if (direction == 'next' && positions[i] > here) { scroll = collection.get(i); break; }
      if (direction == 'prev' && i > 0 && positions[i] >= here) { scroll = collection.get(i-1); break; }
    }

    if (scroll) {
      $.scrollTo(scroll, {
        duration: SCROLL_ANIMATION_TIME
      });
    }

    return false;
  }

  $('.js-countdown-timer').countdown('2016/12/11', function(event) {
    $(this).html(event.strftime('%D days %H:%M:%S'));
  });

  $('.js-facebook-share').click(function(e) {
    e.preventDefault();
    FB.ui({
      method: 'share',
      display: 'popup',
      quote: 'Mukmeen & Maisarah are getting married!',
      href: 'http://www.mukmeenmaisarah.com',
      hashtag: '#mukmeenmaisarah'
    }, function (response) {});
  });

  $("#next, #prev").click(function() {
    return scroll($(this).attr('id'));
  });

  $(".scrolltoanchor").click(function() {
    $.scrollTo($($(this).attr("href")), {
      duration: SCROLL_ANIMATION_TIME
    });
    return false;
  });
});

/**
 * Function for the fancy box
 */
$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function() {
    FB.init({
      appId: '1040081046111529',
      xfbml: true,
      version: 'v2.7'
    });
  });

  $("a[rel=guys-gallery]").fancybox({
    'titlePosition' : 'inside',
    'titleFormat'	: function(title) {
      return '<span id="fancybox-title-over">' + (title.length ? '' + title : '') + '</span>';
    },
    'showNavArrows': true
  });

  $("a[rel=girls-gallery]").fancybox({
    'titlePosition' : 'inside',
    'titleFormat'	: function(title) {
      return '<span id="fancybox-title-over">' + (title.length ? '' + title : '') + '</span>';
    },
    'showNavArrows': true
  });

  $('.js-getmore-info').fancybox({
    'titlePosition'	: 'inside',
    'transitionIn'	: 'elastic',
    'transitionOut'	: 'elastic',
    'showCloseButton': true,
    'showNavArrows': false
  });
});