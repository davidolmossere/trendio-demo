
$('.column').click(function() {
  // Move columns horizontally
  if ($(this).hasClass('carousel-item')) {
    var $slide = $('.active-column').width();
    if ($(this).hasClass('next-column')) {
      $(this).parent().parent().stop(false, true).animate({
        left: '-=' + $slide
      },200);
    } else if ($(this).hasClass('prev-column')) {
      $(this).parent().parent().stop(false, true).animate({
        left: '+=' + $slide
      },200);
    }
  }

  // Clear and prepare columns 
  $(this).parent().children().removeClass('prev-column active-column next-column');
  $(this).addClass('active-column');
  $(this).prev().addClass('prev-column');
  $(this).next().addClass('next-column');
});

$('.row').click(function() {
  // Move rows vertically
  if ($(this).hasClass('next-row') && $(this).hasClass('row-carousel')) {
    $(this).parent().parent().stop(false, true).animate({
      scrollTop: $(this).offset().top - $(this).parent().parent().offset().top + $(this).parent().parent().scrollTop()
    },300);
  } else if ($(this).hasClass('prev-row') && $(this).next().hasClass('row-carousel')) {
    $(this).parent().parent().stop(false, true).animate({
      scrollTop: $(this).offset().top - $(this).parent().parent().offset().top + $(this).parent().parent().scrollTop()
    },300);
  }
  
  // Clear and prepare rows
  $(this).parent().find('.row-carousel').animate({left: 0},300);
  $(this).parent().children().removeClass('prev-row active-row next-row');
  $(this).addClass('active-row');
  $(this).prev().addClass('prev-row');
  $(this).next().addClass('next-row');
  
  // Clear and prepare columns
  $('.row .column').removeClass('prev-column active-column next-column');
  $(this).find('.column').first().addClass('active-column').next().addClass('next-column');
  
  // Home effect
  $('.row:not(:first-child).active-row').closest('.wrapper').addClass('full');
  $('.row:first-child.active-row').closest('.wrapper').removeClass('full');

  // Catalog video sound
  $('video').prop("volume", 1);
  if ($('#catalog-page .row-carousel.active-row').length) {
    $('video').prop("volume",.1);
  }
});


$(document).ready(function() {
  $(window).trigger('resize');
  
  // Methods
  $('body').on("keydown", function(event) {
    switch (event.key) {
      case "ArrowDown":
        $('.active-row').next().on("click", function(e) {
          e.stopImmediatePropagation();
        });
        $('.active-row').next().trigger('click');
        break;
      case "ArrowUp":
        $('.active-row').prev().on("click", function(e) {
          e.stopImmediatePropagation();
        });
        $('.active-row').prev().trigger('click');
        break;
      case "ArrowLeft":
        $('.active-column').prev().on("click", function(e) {
          e.stopImmediatePropagation();
        });
        if ($('.app-menu .active-column a').length) {
          $('.app-menu .prev-column a').get(0).click();
          return;
        }
        $('.active-column').prev().trigger('click');
        break;
      case "ArrowRight":
        $('.active-column').next().on("click", function(e) {
          e.stopImmediatePropagation();
        });
        if ($('.app-menu .active-column a').length) {
          $('.app-menu .next-column a').get(0).click();
          return;
        }
        $('.active-column').next().trigger('click');
        break;
      case "Enter":
        if ($('.active-column a').length) {
          var destino = $('.active-column a').attr('data-source');
          setCookie('videoTarget',destino,7);
          $('.active-column a').get(0).click();
        }
        break;
      case "Escape":
        escAction();
        break;
      case " ":
        escAction();
        break;
      default:
        return;
    }
  });
});