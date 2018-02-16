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

let i = 0;
$(window).on('keydown', function testKey(e){
    const key = e.keyCode;
    var tabSec = Array();
    $('section').each(function(){
        tabSec.push($(this).offset().top);
    });
        if(key === 40){
            window.scrollTo(0, tabSec[i]);
            console.log(tabSec[i] - tabSec[i - 1]);
            i++;
    }
    if(key === 38){
        window.scrollTo(0,0);
    }
});
    


