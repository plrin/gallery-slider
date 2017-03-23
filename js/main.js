$(document).ready(function(){
    
    SliderGallery.init();
        
});

var SliderGallery = (function () {
   
    var DOM = {};
    
    
    /* =================== private methods ================= */
    // cache DOM elements
    function cacheDom() {
        DOM.$navTab = $('.nav-tab_link');
        DOM.$slider = $(".slider .gallery_container");
        DOM.$galleryItem = $(".gallery_item");
    }
    
    // bind events
    function bindEvents() {
        DOM.$navTab.on("click", function () {
            var $button = $(this);
    
            changeGallery($button);
            changeSlider($button);
        });
        
        DOM.$galleryItem.on("click", function () {
            var $slide = $(this);
            goToSlide($slide);
        });
    }
    
    function initSlider() {
        // to init slider we have to clone the first set of the gallery
        $(".gallery_dogs").clone().appendTo(".slider-wrapper").addClass("slider");
        
        $('.slider').slick();
    }
    
    
    
    // handle click events
    function changeSlider($button) {
        var gallery = $button.data("gallery");
        
        // destroy slide
        $('.slider').slick("unslick");
        
        // remove old slider markup
        $(".slider-wrapper").empty();
        
        // clone content from that nav tab
        $("." + gallery).clone().appendTo(".slider-wrapper").addClass("slider");
        
        // re-init new slider
        $('.slider').slick();
    }
    
    function changeGallery($button) {
        var gallery = $button.data("gallery");
        
        $(".gallery_wrapper .gallery_container").each(function (index) {
            $(this).css("display", "none");
            console.log(index + $(this) );
        });
        $(".gallery_wrapper ." + gallery).css("display", "block");
    }
    
    function goToSlide($slide) {
        var slideNumber = $slide.data("slide-number");
        console.log(slideNumber);
        $(".slider").slick("slickGoTo", slideNumber, false);
    }

    
    
    /* =================== public methods ================== */
    // main init method
    function init() {
        cacheDom();
        bindEvents();
        initSlider();
    }
    
    /* =============== export public methods =============== */
    return {
        init: init
    };
    
}());