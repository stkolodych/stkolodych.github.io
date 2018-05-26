$("document").ready(function($) {
    
    
    // video
    var videoEl = document.getElementsByTagName('video')[0];
    
    $('#video').click(function(event){
        if (videoEl.paused) {
                $('.video-bg').css('opacity', 0);
                videoEl.play();
            } else {
                $('.video-bg').css('opacity', 1);
                videoEl.pause();
            }
    });// end video
    
    
    // data
    function formatDate(date) {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.20' + yy;
    }        
    
    var currentDate = new Date();
    
    function getCreditTime(crDays) {
        var credDuration = new Date(crDays * 3600 * 24 * 1000);
        var credReturnDay = new Date(currentDate.getTime() + credDuration.getTime());
        return(credReturnDay);
    }
    
    $('#return-data').text(formatDate(getCreditTime(11)));
    // end data
    
    
    
    var _persent = 0.015;
    var sumDays = 11;
    var sumCash = 7000;
    
    function getReturnCash(cash, persent, days) {
        var bonus = +cash * _persent * days;
        var sum = +cash + bonus;
        $('#return-cash').text(sum.toFixed(0) + ' грн');
    }
    
    getReturnCash(sumCash, _persent, sumDays);
    
    
    // range    
    $('#r1').on("input", function() {
        sumCash = this.value;
        $('#input-1').val(this.value);
        $('#get-cash').text(this.value + ' грн');
        getReturnCash(sumCash, _persent, sumDays);
    });
    
    $('#input-1').on("input", function() {
        sumCash = this.value;
        $('#r1').val(this.value);
        $('#get-cash').text(this.value + ' грн');
        getReturnCash(sumCash, _persent, sumDays);
    });
    
    
    $('#r2').on("input", function() {
        sumDays = this.value;
        $('#input-2').val(this.value);
        $('#return-data').text(formatDate(getCreditTime(this.value)));
        getReturnCash(sumCash, _persent, sumDays);
    });
    
    $('#input-2').on("input", function() {
        sumDays = this.value;
        $('#r2').val(this.value);
        $('#return-data').text(formatDate(getCreditTime(this.value)));
        getReturnCash(sumCash, _persent, sumDays);
    });// end range
        
    
});


(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);