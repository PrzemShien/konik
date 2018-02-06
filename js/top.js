'use strict';

$(function(){

      const pageHeight = $(window).height() / 2;
//    console.log(pageHeight);
    $(window).on('scroll', function(){
        const Yoffset = $(window).scrollTop();
//        console.log(Yoffset);
       if(Yoffset > pageHeight) {$('#gora').fadeIn(1000)}
       else{$('#gora').fadeOut(1000)}
    });
});
