

//sticky top
$(window).scroll(function() {
    if ($(this).scrollTop() > 600){  
        $('.heading').addClass("sticky");
    }
    if ($(this).scrollTop() <= 92){
        $('.heading').removeClass("sticky");
    }
});


//scroll
$(document).ready(function() {
  $('a[href^="#"]').click(function () { 
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top - 92;
    
      $('html').animate( { scrollTop: destination }, 1100 );
    
    return false;
  });

});

//Carousels' params
$('.loop').owlCarousel({
  center: true,
  items:2,
  loop:true,
  margin:10,
  responsive:{
      0:{
        items:1
      },
      576:{
        items:2
      },
      768:{
        items:2.5
      },
      1024:{
        items:3.25
      }
  }
});

$('.gal').owlCarousel({
  loop:false,
  margin:10,
  nav:false,
  center:true,
  responsive:{
      0:{
          items:1.5
      }
  }
})

/*//auto height for text area
jQuery.fn.extend({
    autoHeight: function () {
      function autoHeight_(element) {
        return jQuery(element)
          .css({ 'height': 'auto', 'overflow-y': 'hidden' })
          .height(element.scrollHeight);
      }
      return this.each(function() {
        autoHeight_(this).on('input', function() {
          autoHeight_(this);
        });
      });
    }
  });
  
  $('textarea').autoHeight();*/