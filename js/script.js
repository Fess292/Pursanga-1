$(document).ready(function(){	
	var selector;
	var sliderItem;

	// $('.slider-comment').on('init', function(){
	// 	setTimeout(function(){
	// 		sliderItem = $('[data-slick-index]');
	// 		var next = sliderItem.filter('[data-slick-index="0"]');
	// 		next.prev().addClass('dop-right').prev().addClass('dop-right2').prev().addClass('dop-right3');
	// 		next.next().addClass('dop-left').next().addClass('dop-left2').next().addClass('dop-left3');
	// 	},0)
	// });

	$('.slider-comment').on('setPosition', function(){
		sliderItem = $('[data-slick-index]');
		sliderItem.removeClass('dop-left dop-right dop-left2 dop-right2 dop-left3 dop-right3');
		var next = sliderItem.filter('.slick-current');
		next.prev().addClass('dop-right').prev().addClass('dop-right2').prev().addClass('dop-right3');
		next.next().addClass('dop-left').next().addClass('dop-left2').next().addClass('dop-left3');
	});

	$('.slider-comment').on('beforeChange', function(event, { slideCount: count }, currentSlide, nextSlide){
		var id = [nextSlide, nextSlide - count, nextSlide + count];

		for(var i = 0; i < id.length; i++){
			if(i === 0) {
				selector = '[data-slick-index="' + id[i] + '"]';
			} else {
				selector += ',[data-slick-index="' + id[i] + '"]';
			}
		}

		var next = $(selector);
		
		next.addClass('active');
		sliderItem.removeClass('dop-left dop-right dop-left2 dop-right2 dop-left3 dop-right3');
		next.prev().addClass('dop-right').prev().addClass('dop-right2').prev().addClass('dop-right3');
		next.next().addClass('dop-left').next().addClass('dop-left2').next().addClass('dop-left3');
	  });

	  $('.slider-comment').on('afterChange', function(){
		$(selector).removeClass('active');
	  });
	  $('.slider-comment').slick({
		dots: true,
		speed: 600,
		responsive: [
		{

			breakpoint: 990,
			settings: {
			centerMode: true,
			// centerPadding: '40px',
			variableWidth: true,
			slidesToShow: 1
			}
		},
		{
			breakpoint: 1200,
			settings: {
			centerMode: true,
			slidesToShow: 3,
			swipe: false,
			variableWidth: true,
			
			}
		},
		{
			breakpoint: 4096,
			settings: {
			centerMode: true,
			slidesToShow: 5,
			swipe: false,
			variableWidth: true

			}
			
		}
		]
	});

// $(document).ready(function(){
// 	$('.bxslider2').bxSlider({
// 		pager: true,	
// 		controls: true, 
//     	// mode: 'fade',  
// 		slideMargin: 8,
// 		maxSlides: 4,
// 		minSlides: 1,
// 		moveSlides: 1,
// 		speed: 50,
// 		slideWidth: 304
// 	});
// });
// });

$('.bxslider2').slick({
	dots: true,
	speed: 600,
	draggable: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
			// centerMode: true,
			// centerPadding: '40px',
			// variableWidth: true,
			slidesToShow: 1
			}
		},
		{
			breakpoint: 990,
			settings: {
			// centerMode: true,
			// centerPadding: '40px',
			variableWidth: true,
			slidesToShow: 2
			}
		},
		{
			breakpoint: 1200,
			settings: {
			// centerMode: true,
			slidesToShow: 2,
			variableWidth: true,
			}
		},
		{
			breakpoint: 1400,
			settings: {
			// centerMode: true,
			slidesToShow: 3,
			// swipe: false,
			variableWidth: true

			},
		
			breakpoint: 9999,
			settings: {
			// centerMode: true,
			slidesToShow: 4,
			// swipe: false,
			variableWidth: true

			}
			
		}
		]
	});

	$('.bxslider3').slick({
		dots: false,
		slidesToShow: 1,
		speed: 600,
		// centerMode: true,
		// adaptiveHeight: true,
		// fade: true
		});
});


// start
// $(document).ready(function(){
// 	sliderResize();
//   });
  
//   $(window).resize(function(){
// 	sliderResize();
//   });
  
//   function sliderResize() {
// 	var slider = $('.bxslider2').bxSlider({
// 		pager: true,	
// 		controls: true,
// 		mode: 'fade',
// 	});
  
// 	if ($(window).width()<900 && $(window).width()>900) {
// 	  slider.reloadSlider({
// 		mode:'horizontal',
// 		slideMargin: 8,
// 		maxSlides: 4,
// 		minSlides: 4,
// 		moveSlides: 1,
// 		speed: 50,
// 		slideWidth: 304
// 	  });
// 	} else if ($(window).width()<900) {
// 	  slider.reloadSlider({
// 		mode:'horizontal',
// 		slideMargin: 8,
// 		maxSlides: 4,
// 		minSlides: 4,
// 		moveSlides: 1,
// 		speed: 50,
// 		slideWidth: 304
// 	  });
// 	};
//   }
// end




// $(document).ready(function(){
// 	$('.bxslider3').bxSlider({
// 		pager: false,	
// 		controls: true, 
//     	mode: 'fade'  
// 		// auto: true,
// 		// pause: 10000,
// 		// minSlides: 1,
// 		// maxSlides: 1
// 	});
// });

  $(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top-100},);
            return false;
    });
});

// jQuery(function($) {
// 	$(window).scroll(function(){
// 		if($(this).scrollTop()>140){
// 			$('#nav').addClass('fixed');
// 		}
// 		else if ($(this).scrollTop()<140){
// 			$('#nav').removeClass('fixed');
// 		}
// 	});
// });

// $(function(){
// 	$nav = $('.fixed-div');
// 	$nav.css('width', $nav.outerWidth());
// 	$window = $(window);
// 	$h = $nav.offset().top;
// 	$window.scroll(function(){
// 		if ($window.scrollTop() > $h){
// 			$nav.addClass('fixed');
// 		} else {
// 			$nav.removeClass('fixed');
// 		}
// 	});
// });

// var form = $('.dirt');
//   var html = $("html, body");

//   $("a").on('click' ,function(){
//     html.animate({scrollTop: form.offset().top + "px"}, 500);
//     return false;
//   });



// $('#girl').click(function() {
//   $('#girl').css({
//       'background-color': 'red',
//       'color': 'white',
//       'font-size': '44px',
//       // 'transition-duration': '0.3s',
//       // 'box-shadow': 'none' ,
//       // 'height': '25.3px',
//       // 'width': '31.5px',
//   });
// });

// $(function() {
    
//   $("#girl-2").on("click", function() {
//       if ($("#girl-2").css("box-shadow") == "0 0 0 185px rgba(0, 0, 0, 0.80) inset")
//           ;
      
//       else {
//           $("#girl-2").css("box-shadow", "none");
//           $("#girl-2").css("transition-duration", "0.5s");
//           $("#girl-2").css("height", "25.3px");
//           $("#girl-2").css("width", "31.5px");
//           $("p").css("display", "none");
//       }
//   });
// });

// jQuery.fn.toggleClick = function(a, b) {
//   return this.on("click", function(ev) { [b, a][this.$_io ^= 1].call(this, ev) })};
// $(function() {
//   $('#girl-2').click(function() {

//     $(this).toggleClass("girl").toggleClass("girl2");

// });
// });

