'use strict';

$(function(){

    $("a[href^='#']").on('click', function(e){
        
        var target = $($(this).attr('href'));
        console.log(target);
        if(target.length > 0){
            e.preventDefault();
            $('html').animate({
                scrollTop: target.offset().top - 20
            }, 1000);   
        } 
    });
});

