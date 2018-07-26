$(document).ready(function () {
    /* Якорь */
    $(function () {
        $("a[href^='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500, "swing")
        });
    });
    /* owl-carousels */
    $('#certs_carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["", ""],
        dots: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $('#video_reviews').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["", ""],
        dots: false,
        items: 2,
        autoHeightClass: 'owl-height',
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 2
            }
        }
    });
    $('#text_reviews').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["", ""],
        dots: false,
        items: 1,
        autoHeightClass: 'owl-height',
        autoHeight: true
    });
    /*Fancybox*/
    $(function () {
        $("[data-fancybox]").fancybox({
            speed: 330,
            opacity: "auto",
            closeBtn: !0
        });
    });
    /* Видео */
    $(".video_wrapper img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>')
    });
    /* Таймер */
 var clock;
 var futureDate = new Date("July 31, 2018 00:00 AM UTC+3");
 var currentDate = new Date();
 var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

 function dayDiff(first, second) {
     return (second - first) / (1000 * 60 * 60 * 24);
 }
 if (dayDiff(currentDate, futureDate) < 100) {
     $('.clock').addClass('twoDayDigits');
 } else {
     $('.clock').addClass('threeDayDigits');
 }
 if (diff < 0) {
     diff = 0;
     $('.clock-stop').addClass("alert-danger");
     $('.clock-stop').html("Скидка сгорела!");
     $('.price_sale, .price_today').remove();
     $('#link').attr("href", "https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=1926&clean=true&lg=ru");

 }
 clock = $('.clock').FlipClock(diff, {
     clockFace: 'HourlyCounter',
     countdown: true,
     language: 'ru',
     callbacks: {
         stop: function () {
             $('.clock-stop').addClass("alert-danger");
             $('.clock-stop').html("Скидка сгорела!");
             $('.price_sale, .price_today').remove();
             $('#link').attr("href", "https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=1926&clean=true&lg=ru");
         }
     },
 });
    /*Старые браузеры*/
    var yaBrowserUpdater = new ya.browserUpdater.init({
        "lang": "ru",
        "browsers": {
            "yabrowser": "15.10",
            "chrome": "52",
            "ie": "10",
            "opera": "40",
            "safari": "8",
            "fx": "47",
            "iron": "35",
            "flock": "Infinity",
            "palemoon": "25",
            "camino": "Infinity",
            "maxthon": "4.5",
            "seamonkey": "2.3",
            "theme ": "blue"
        }
    });
    /*Конец документа*/
});