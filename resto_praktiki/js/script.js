$(document).ready(function() {
    
    //animation
    $('.features .item-info').addClass('wow fadeInUp');
    $('.features .item-num').addClass('wow fadeInUp');
    $('.profi .profi-item').addClass('wow fadeInUp');
    
    //add animation if width > 1024px
    if ($(window).width() > 1024 ) {
        wow = new WOW({
            boxClass:     'wow',      
            animateClass: 'animated', 
            offset:       0,          
            mobile:       false,      
            live:         true      
        })
        wow.init();
    }// end animation
    
    
    //menu listener
    $('#menu-toggle').click(function(){
        $(this).toggleClass('open'); 
        $('#mobile-menu').toggleClass('show');
    });//end menu listener
    
    
    // slider-1
    var autoplaySlider = $('#slider-1').lightSlider({
        auto:true,
        loop:true,
        pauseOnHover: true,
        controls: false,
        slideMargin: 70,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        },
        responsive : [
            {
                breakpoint:1441,
                settings: {
                    slideMargin:50
                  }
            },
            {
                breakpoint:1378,
                settings: {
                    slideMargin:30
                  }
            },
            {
                breakpoint:1281,
                settings: {
                    slideMargin:15
                  }
            },
            {
                breakpoint:1025,
                settings: {
                    item:2,
                    slideMargin:15
                  }
            },
            {
                breakpoint:769,
                settings: {
                    item:1,
                    slideMargin:10
                  }
            }
        ]
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());
    
    $('.slider-control-1 .next').click(function() {
        autoplaySlider.goToNextSlide();
    });
    
    $('.slider-control-1 .prev').click(function() {
        autoplaySlider.goToPrevSlide();
    }); // slider-1
    
    
     // slider-2
     var autoplaySlider2 = $('#slider-2').lightSlider({
        item:1,
        auto:true,
        loop:true,
        controls:false,
        mode:'fade',
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current-2').text(el.getCurrentSlideCount());
        } 
    });
    $('#total-2').text(autoplaySlider2.getTotalSlideCount());
    
    $('.slider-control-2 .next').click(function() {
        autoplaySlider2.goToNextSlide();
    });
    
    $('.slider-control-2 .prev').click(function() {
        autoplaySlider2.goToPrevSlide();
    }); // slider-2
    
    
     // slider-3
    var autoplaySlider3 = $('#slider-3').lightSlider({
        item:2,
        auto:true,
        loop:true,
        controls:false,
        pauseOnHover: true,
        slideMargin: 70,
        onBeforeSlide: function (el) {
            $('#current-3').text(el.getCurrentSlideCount());
        },
        responsive : [
            {
                breakpoint:1441,
                settings: {
                    slideMargin:30
                  }
            },
            {
                breakpoint:1281,
                settings: {
                    slideMargin:20
                  }
            },
            {
                breakpoint:769,
                settings: {
                    item: 1
                  }
            }
        ]
    });
    $('#total-3').text(autoplaySlider3.getTotalSlideCount());
    
    $('.slider-control-3 .next').click(function() {
        autoplaySlider3.goToNextSlide();
    });
    
    $('.slider-control-3 .prev').click(function() {
        autoplaySlider3.goToPrevSlide();
    }); // slider-3
    
});





















