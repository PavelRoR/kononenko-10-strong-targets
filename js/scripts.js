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
    // $('#sertificats').owlCarousel({
    //     loop: true,
    //     margin: 20,
    //     nav: true,
    //     navText: ["", ""],
    //     dots: false,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         400: {
    //             items: 2
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 4
    //         }
    //     }
    // });
    // $('#reviews').owlCarousel({
    //     loop: true,
    //     margin: 20,
    //     nav: true,
    //     navText: ["", ""],
    //     dots: false,
    //     items: 1,
    //     autoHeightClass: 'owl-height',
    //     autoHeight: true
    // })
    /*Fancybox*/
    $(function () {
        $("[data-fancybox]").fancybox({
            speed: 330,
            opacity: "auto",
            closeBtn: !0
        });
    });
    /* Видео */
    $(".video_wrapper").click(function () {
        var a = $(this).attr("data-youtube");
        $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1" frameborder="0" class="img-thumbnail" allowfullscreen></iframe>')
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