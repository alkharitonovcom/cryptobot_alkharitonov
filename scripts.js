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
     function getCookie(name) {
          let cookie = {};
          document.cookie.split(';').forEach(function(el) {
            let [key,value] = el.split('=');
            cookie[key.trim()] = value;
          })
          return cookie[name];
        }
        var theme = getCookie("theme");
     if (theme == 'dark') {
          $("#mode").addClass('dark_on');
          $('body').addClass('dark');
          $('.header_right .btn').addClass('secondary2');
        }
     console.log(theme);

     $("#mode").on("click", function () {
          if ($('body').hasClass('dark')) {
               $(this).removeClass('dark_on');
               $('body').removeClass('dark');
               $('.header_right .btn').removeClass('secondary2');
               document.cookie = "theme=light;max-age=2629743";
          } else {
               $(this).addClass('dark_on');
               $('body').addClass('dark');
               $('.header_right .btn').addClass('secondary2');
               document.cookie = "theme=dark;max-age=2629743";
          }

     });
});