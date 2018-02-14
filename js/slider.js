'use strict';

$(function(){
    
    const slideShow = $('.slider');
    const sliderLgth = $('.slide').length;
    const slideWidth = 100 / sliderLgth;
    const btn = $('.arrows a');
    let margin = 100;
    let slideIndex = 1;
    
    slideShow.css('width', sliderLgth * 100 + '%');
    
    slideShow.find('.slide').each(function(index){
        $(this).css({width: slideWidth + '%', 'margin-left': index * slideWidth + '%'});
    });
    
    let interval;
    function start(){    
        interval = setInterval(function(){
            slideShow.animate({'margin-left': slideIndex * (-margin) + '%'},1500, function(){
            slideIndex++;
            if(slideIndex === sliderLgth){
                slideShow.css('margin-left', 0);
                slideIndex = 1;
            }
        });
        }, 3000);
    }
    
    btn.eq(0).on('click', function(e){
        e.preventDefault();
        slideIndex--;
        if(slideIndex < 1){
            slideIndex = sliderLgth;
                slideShow.css({'margin-left': slideIndex * (-margin) + '%'});
        }
        slideShow.css({'margin-left': '+=' + margin + '%'});
    });
    
    btn.eq(1).on('click', function(e){
        e.preventDefault();
        slideShow.css({'margin-left': '-=' + margin + '%'});
            
        slideIndex++;
        if(slideIndex === sliderLgth){
            slideShow.css('margin-left', 0);
            slideIndex = 1;
           }
    });
    
    $('.arrows').on('mouseover', function(){
       clearInterval(interval); 
    });
    
    $('.arrows').on('mouseout', function(){
        start();
    });
    start();
});
                
