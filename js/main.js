$(document).ready(function(){
    
    console.log($(".gallery_dog"));
    
    $(".gallery_dog").clone().appendTo(".slider-wrapper").addClass("slider");
    // $( ".hello" ).clone().appendTo( ".goodbye" );
    

    
    
    SliderGallery.init();
        
});

var SliderGallery = (function () {
   
    var DOM = {};
    
    
    /* =================== private methods ================= */
    // cache DOM elements
    function cacheDom() {
        DOM.$navTab = $('.nav-tab_list-item');
        DOM.$slider = $(".slider .gallery_container");
    }
    
    // bind events
    function bindEvents() {
        DOM.$navTab.on("click", changeSlider($(this)));
    }
    
    function initSlider() {
        // to init slider we have to clone the first set of the gallery
        
        
        $('.slider').slick({});
    }
    
    // handle click events
    function changeSlider(button) {
        
        // destroy slide
        
        // re-init new slider
    
        cloneGalleryToSlider(button);
    }
    
    function cloneGalleryToSlider(button) {
        
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