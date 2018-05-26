$(document).ready(function() {
    
    
    //animation
    $('.mobile-img>img').addClass('wow fadeInRight'); 
    $('.trait').addClass('wow fadeInLeft'); 
    $('.scroll-down').addClass('wow fadeInUp');
    $('.feature-item').addClass('wow fadeInLeft');
    $('.blog-item').addClass('wow fadeInLeft');
    $('.team-item').addClass('wow fadeInLeft');
    $('.main-content h1, .main-content p').addClass('wow fadeIn');
    
    
    //menu scroll
    $('nav a').click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
    $('.scroll-down').click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    
    //burger-button
    $('.menu-trigger').click(function() {
        $('nav').slideToggle(500);
        $(this).toggleClass('is-active');
    });
    
    $(window).resize(function() {
        if ($(window).width() > 640 ) {
            $('nav').removeAttr('style');
            $('.menu-trigger').removeClass('is-active');
        } 
    });
        
});

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
} 


$(function() {
 
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
 
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
 
});


