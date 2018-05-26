$("document").ready(function($){
    
    //animation 
    $('.feature-item').addClass('wow fadeInUp');
    $('.work-wrapper').addClass('wow fadeInLeft');
    $('.work-wrapper.fromRight').addClass('wow fadeInRight');
    $('.team-wrap').addClass('wow fadeInUp');
    $('.button').addClass('wow jackInTheBox');
 
	//menu scroll
    $('nav a').click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
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