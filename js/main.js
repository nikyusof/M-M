/**
 * The main JS file for the app
 */

var SCROLL_ANIMATION_TIME = 750;

/**
 * Function for the scroll animation
 * @param id
 */
function scrollNav(id){
  $('html, body').animate({
    scrollTop: $(""+id).offset().top
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
      positions.push(parseInt($(this).offset()['top'],10));
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
  $("a[rel=story-gallery]").fancybox({
    'titlePosition' : 'inside',
    'titleFormat'	: function(title, currentArray, currentIndex, currentOpts) {
      return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
    }
  });

  $("a[rel=guys-gallery]").fancybox({
    'titlePosition' : 'inside',
    'titleFormat'	: function(title, currentArray, currentIndex, currentOpts) {
      return '<span id="fancybox-title-over">' + (title.length ? '' + title : '') + '</span>';
    }
  });

  $("a[rel=girls-gallery]").fancybox({
    'titlePosition' : 'inside',
    'titleFormat'	: function(title, currentArray, currentIndex, currentOpts) {
      return '<span id="fancybox-title-over">' + (title.length ? '' + title : '') + '</span>';
    }
  });

  $("#getmore-info").fancybox({
    'titlePosition'	: 'inside',
    'transitionIn'	: 'none',
    'transitionOut'	: 'none'
  });
});