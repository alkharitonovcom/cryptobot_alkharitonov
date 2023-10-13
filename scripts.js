$(document).ready(function(){
     $('.usecases_slider').slick({
          dots: true,
          arrows: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          appendDots:$('.dots'),
          dotsClass: 'slick-dots',
          customPaging: function (slider, i) {
               $('.usecases_nav .all').text('0' + slider.slideCount);
          },
     });
     $('.usecases_slider').on('afterChange', function () {
          var dataId = $('.slick-current').attr("data-slick-index");
          let num = Number(dataId) + 1;
          $('.usecases_nav .current').text('0' + num);
     });
     $("a[href^='#']").on("click", function (event) {
		if (!$(this).hasClass("fancybox-inline")) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 500);
		}
	});
});