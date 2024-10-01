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

    var swiper = new Swiper(".testimonial-slider-active", {
        effect: "fade",
        slidesPerView: 1,
        clickable: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, customPagination) {
                const images = [
                    'assets/images/testimonial/testimonial-1.png',
                    'assets/images/testimonial/testimonial-2.png',
                    'assets/images/testimonial/testimonial-3.png'
                ];
            
                // Check if the index is within the range of available images
                if (index < images.length) {
                    return `
                        <div class="slick-custom-dot ${customPagination}">
                            <div class="testimonial-img-horizontal">
                                <img class="w-100" src="${images[index]}" alt="testimonial image ${index + 1}">
                            </div>
                        </div>
                    `;
                }
            
                return ''; // Return an empty string if index exceeds the number of images
            }
            
          }
    });

    var swiper = new Swiper(".gallery-slider-active", {
        loop: true,
        speed: 500,
        slidesPerView: 6,
        spaceBetween: 0,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1300: {
                slidesPerView: 6,
            },
            768: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 3,
            },
            345: {
                slidesPerView: 2,
            },
            0:{
                slidesPerView: 1,
            }
        },
    })
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
