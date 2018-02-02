'use strict';

$(function(){
    
    const linkColor = 'black';
    const selector = 'nav a';
    
    var tabSec = Array();
    
    $('section').each(function(){
        tabSec.push($(this).offset().top);
    });
    console.log(tabSec);
    
    function activeMenu(position){
        $(selector).css('color', 'inherit');
        $(selector + ':eq("' + position + '")').css('color', linkColor);
    }
    
    $(window).on('scroll', function(){
        $(selector).css('color', 'inherit');
    
    
    const Yoffset = $(window).scrollTop();
    console.log(Yoffset);
    const navHeight = 40;
    
    for(let i = 0; i<tabSec.length; i++){
        if(Yoffset >= tabSec[i] - navHeight){
            activeMenu(i);
            console.log(i);
        }
    }
    });
});
