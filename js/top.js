'use strict';

$(function(){

      const pageHeight = $(window).height() / 2;
    $(window).on('scroll', function(){
        const Yoffset = $(window).scrollTop();
       if(Yoffset > pageHeight) {$('#gora').fadeIn(1000)}
       else{$('#gora').fadeOut(1000)}
    });
});
