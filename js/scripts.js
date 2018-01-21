'use strict';

var modal = document.querySelectorAll('.modal');
console.log(modal);

var img = document.querySelectorAll('.myImg');
console.log(img);

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

$(function($)
		{
			//zresetuj scrolla
			$.scrollTo(0);
			
			$('#link1').click(function() { $.scrollTo($('#o_nas'), 500); });
			$('#link2').click(function() { $.scrollTo($('#konie'), 600); });
			$('#link3').click(function() { $.scrollTo($('#noclegi'), 700); });
			$('#link4').click(function() { $.scrollTo($('#atrakcje'), 800); });
			$('#link5').click(function() { $.scrollTo($('#cennik'), 900); });
			$('#link6').click(function() { $.scrollTo($('#kontakt'), 1000); });
            $('#gora').click(function() { $.scrollTo($('body'), 1000); });
		}
		);
		$(window).scroll(function()
		{
			if($(this).scrollTop()>300) $('#gora').fadeIn();
			else $('#gora').fadeOut();		
		}
		);
