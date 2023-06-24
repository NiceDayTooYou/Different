$(document).ready(function () {
  viewPortHeight = window.innerHeight;
    $(window).scroll( function(){
        $('.hideme').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var top_of_object = $(this).offset().top - (viewPortHeight/20);
          var top_of_window = document.documentElement.scrollTop
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > top_of_object){
                $(this).addClass('showme');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('showme');
            }
        });
    });
});