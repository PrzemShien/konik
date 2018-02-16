'use strict';

var modal = document.querySelectorAll('.modal');

var img = document.querySelectorAll('.myImg');

var modalImg = document.querySelectorAll('.modalImg');
for(let i = 0; i < img.length; i ++){
    img[i].addEventListener('click', function(){
        modal[i].style.display = "block";
        modalImg[i].src = this.src;
    }, true);
}

var span = document.querySelectorAll('.close');
for(let i = 0; i < span.length; i++){
span[i].addEventListener('click', function(){
        modal[i].style.display = "none";
    }, true);
}

$(function(){
    const tabSec = Array();
    $('section').each(function(){
        tabSec.push($(this).offset().top);
    });
    let i = 0;
    
    function pagePosition(){
        const Yoffset = $(window).scrollTop();
         console.log(Yoffset);
         for(let j = 0; j<tabSec.length; j++){
            if(Yoffset < tabSec[j]){i++}
            console.log(i);
        }
    }
    
    $(window).on('keydown', function(e){
        const key = e.keyCode;  
//        pagePosition();
            
        if(key === 40){
            if(i >= tabSec.length){
                i = 6;
            }else{$('html').animate({
                    scrollTop: tabSec[i] -40
                },1000);
                i++;}
            }

        if(key === 38){
            console.log(i);
            let upPosition = 0;
            i--;
            if(i < 0){
                i = 0;
            }else{
                upPosition = tabSec[i] - tabSec[i-1];
                $('html').animate({
                    scrollTop: tabSec[i] - upPosition
                }, 1000);
//                $(window).scrollTop(tabSec[i] - upPosition);
            }
        }
    });
});