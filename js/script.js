

let aboutOffsetTop = $("#about").offset().top;

$(window).scroll(function () {

    let wScroll = $(window).scrollTop();

    // ........................ de elgzaya ele5saa bl navbar scroll ..........................
    if (wScroll > aboutOffsetTop - 600) {


        $("#navb").css("padding", "10px 30px");

        $("#navb").css({ "backgroundColor": "white", "boxShadow": "0px 0px 2px #e6dada", "color": "black" });

        $(".collapse .navbar-nav .nav-item .nav-link").css({ "color": "black", "fontWeight": "700" });
        $(".navbar-brand img").attr("src", "images/logo-dark.png");
        $("#navb").removeClass("py-2").addClass("py-0");
        $(".navbar-dark .icons a").removeClass("text-light").addClass("text-dark");

        $('head').append('<style>.navbar-dark .navbar-nav li a {color:gray}</style>');
        $(".navbar-toggler").css({ "backgroundColor": "black" });

    }
    else {

        $("#navb").css("padding", "5px 5px");

        $("#navb").css({ "backgroundColor": "transparent", "boxShadow": "none" });

        $(".collapse .navbar-nav .nav-item .nav-link").css({ "color": "white", "fontWeight": "500" });

        $(".navbar-brand img").attr("src", "images/logo-light.png");
        $("#navb").removeClass("py-0").addClass("py-2");
        $(".navbar-dark .icons a").removeClass("text-dark").addClass("text-light");

        $('head').append('<style>.navbar-dark .navbar-nav li a{color:black}</style>');
        $(".navbar-toggler").css({ "backgroundColor": "transparent" });
    }

    if (wScroll > aboutOffsetTop) {
        $("header .lay1,header .lay2").removeClass("d-block").addClass("d-none");
    }
    else {
        $(".lay1,.lay2").removeClass("d-none").addClass("d-block");
    }


});

$("a[class^='nav-link']").click(function () {
    let aHref = $(this).attr("href");
    let sectionOffsetDown = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffsetDown - 40 }, 1900);
});

$(document).ready(function () {

    var typed = new Typed('.letter', {
        // Waits 1000ms after typing "First"
        strings: [' apps ', ' websites ', 'softwares'],//دى الاسترنجات اللى هيكتبها ويبدل مابينهم
        loop: true, typeSpeed: 70, backSpeed: 70, shuffle: true,// ده عشان الوقت اللى هيكتب فيه الاسترنج
    });

    $("#loading").fadeOut(1000, function () {
        $("body").css("overflow-y", "auto");
    });
});


// Navigation active state on scroll
// دى حتة لما اجى اعمل اسكرول السيشن اللى واقف عليه هو اللى يكون اكتيف فوق وتحت اسمه لاين
// .............................................
var nav_sections = $('section');
var main_nav = $('.collapse');
$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
        var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            if (cur_pos <= bottom) {
                main_nav.find('li').removeClass('active');
            }
            main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
            $(".collapse ul:first li:first").addClass('active');
        }
    });
});

// .......................................
// Init AOS
function aos_init() {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
    });
}
$(window).on('load', function () {
    aos_init();
});