/*---------------------------------------------------------
    Index Of Script
-----------------------------------------------------------
    
    @version         : 1.1.0
    @Template Name   : Bisxcox
    @Template author : Biscox
    
    :: Swiper Slider Active         :: Nice Scroll js             
    :: Fancy box                    :: Hover Tilt Effect        
    :: Search box                   :: Select 2                                  
    :: Mobile Menu                  :: Slick Nav       
    :: Animation                    :: Wow Animation      
    :: Sticky And Scroll Up         :: JS Year
    :: JS for Price Range slider    :: Play video Slider
    
------------------------------------------------------------
    End-of Script
------------------------------------------------------------*/

(function ($) {
    "use strict";

    /*----------------------------------------------
        :: Sticky And Scroll Up
    -----------------------------------------------*/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".header-sticky").removeClass("sticky-bar");
            $("#back-top").fadeOut(300);
        } else {
            $(".header-sticky").addClass("sticky-bar");
            $("#back-top").fadeIn(300);
        }
    });

    /*----------------------------------------------
        :: Swiper Slider Active
    ----------------------------------------------*/
    var swiper = new Swiper(".h1-Hero-active", {
        effect: "fade",
        loop: true,
        slidesPerView: 1,
        speed: 4000,
        clickable: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: false,
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".swiper-pagination",
        },
    });
    var swiper = new Swiper(".testimonialTwo-active", {
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: false,
        },
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper = new Swiper(".testimonialThree-active", {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    });
    var swiper = new Swiper(".tourSwiper-active", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 24,
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
        },
    });
    var swiper = new Swiper(".favSwiper-active", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
        },
    });
    var swiper = new Swiper(".brandSwiper-active", {
        centeredSlides: true,
        loop: true,
        speed: 500,
        slidesPerView: 2,
        spaceBetween: 40,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            992: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 3,
            },
        },
    });
    var swiper = new Swiper(".whySwiper-active", {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
        },
    });
    var swiper = new Swiper(".bulletLeftSwiper-active", {
        allowTouchMove: true,
        slidesPerView: 1,
        speed: 6000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
            reverseDirection: true,
            pauseOnMouseEnter: true,
        },
        spaceBetween: 24,
        breakpoints: {
            1400: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
        },
    });
    var swiper = new Swiper(".bulletRightSwiper-active", {
        allowTouchMove: true,
        slidesPerView: 1,
        speed: 6000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        spaceBetween: 24,
        breakpoints: {
            1400: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
        },
    });
    var swiper = new Swiper(".destinationSwiper-active", {
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        fade: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });

    /*-----------------------------------------------
        :: Slick Nav [ Mobile Menu ]
    -----------------------------------------------*/
    var slickNavInitialized = false;
    $(document).ready(function () {
        if (!slickNavInitialized) {
            var menu = $("#navigation");
            var filterMenu = $("#filterMenu");
            if (menu.length) {
                menu.slicknav({
                    prependTo: ".mobile_menu",
                    closedSymbol: "+",
                    openedSymbol: "-",
                });
                slickNavInitialized = true;
            }
            if (filterMenu.length) {
                filterMenu.slicknav({
                    label: "Filter",
                    duplicate: true,
                    duration: 200,
                    easingOpen: "swing",
                    easingClose: "swing",
                    closedSymbol: "&#9658;",
                    openedSymbol: "&#9660;",
                    prependTo: ".filter_menu",
                });
                slickNavInitialized = true;
            }
        }
    });

    /*-----------------------------------------------
        :: Search box
    -----------------------------------------------*/
    var $searchIcon = $(".search-bar");
    var $searchContainer = $(".search-container");
    var $searchOverlay = $(".search-overlay");

    function closeSearch() {
        $searchContainer.hide();
        $searchOverlay.hide();
    }
    $(document).on("click", ".hamburger-icon", function () {
        closeSearch();
    });
    $(document).on("click", ".search-bar", function () {
        $searchContainer.toggle();
        $searchOverlay.toggle();
        $("body").addClass("no-scroll");
    });
    $(document).on("click", "#closeSearch", function () {
        closeSearch();
        $("body").removeClass("no-scroll");
    });
    $(document).on("click", function (event) {
        if (!$(event.target).closest($searchIcon).length && !$(event.target).closest($searchContainer).length) {
            closeSearch();
            $("body").removeClass("no-scroll");
        }
    });
    $(document).on("keydown", function (event) {
        if (event.key === "Escape") {
            closeSearch();
            $("body").removeClass("no-scroll");
        }
        if ((event.ctrlKey || event.metaKey) && event.key === "k") {
            $searchContainer.show();
            $searchOverlay.show();
            $("body").addClass("no-scroll");
        }
    });

    /*-------------------------------------------------
        :: WOW active
    -------------------------------------------------*/
    new WOW().init();

    /*-------------------------------------------------
        :: Hover Tilt Effect
    -------------------------------------------------*/
    $(".tilt-effect").tilt({
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
    });

    /*-------------------------------------------------
        :: Animated Counter
    -------------------------------------------------*/
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = `${(target / 1000).toFixed(0)}k+`;
            }
        };
        updateCounter();
    });

    /*-------------------------------------------------
        :: Text Rotation
    -------------------------------------------------*/
    const text = document.querySelector(".rotate-text");
    text.innerHTML = text.innerText
        .split("")
        .map((char, i) => `<span style="transform:rotate(${i * 12.3}deg)">${char}</span>`)
        .join("");

    /*-------------------------------------------------
        :: Back To Top
    -------------------------------------------------*/
    (function () {
        var scrollToTopButton = document.querySelector(".progressParent");
    
        if (scrollToTopButton) {
            scrollToTopButton.addEventListener("click", function (event) {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        } else {
            console.error('Element with class "progressParent" not found!');
        }
    })();
    
})(jQuery);
