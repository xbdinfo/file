$("a[href='#top']").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, "slow"), !1;
}), jQuery(window).scroll(function() {
    var a = jQuery(this).scrollTop();
    a > "200" ? $("#to-top").show() : $("#to-top").hide();
})


$(".slider .inner-slider").owlCarousel({
  loop: true,
  autoplay: false, //Set AutoPlay to 3 seconds
  items : 1,
  itemsDesktop : [1199,1],
  itemsDesktopSmall : [979,1],
  dots:false,
  nav: true,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  smartSpeed:850,
  margin: 45,
  responsive:{
        0:{
            items:1,
          
        },
        600:{
            items:2,
          
        },

        992:{
            items:3,
          
        },

        1000:{
            items:3,
        }
    }

});


$('.fb .close__btn').click(function() {
 // $(this).parent().slideDown();
  $(this).parent().hide();

})

var offset = $('main').offset().top;
var currentScroll = 0;
console.log(offset);
var _elm = $('.banner__ad.ab')
jQuery(window).scroll(function() {
    var currentScroll = jQuery(this).scrollTop();
    if(currentScroll > offset ) {
      _elm.addClass('fixed');
        _elm.removeClass('ab');

    } else {
        _elm.removeClass('fixed');
        _elm.addClass('ab');

    }
});




