$(document).ready(main);

var contador=0;
var dHeight = $(this).height()-$(window).height();


var angulo = 0;
var angulo2=0;
setInterval(function(){
      angulo+=2;
      angulo2+=-3;
     $(".medio_circulo_principal").rotate(angulo);
     $(".medio_circulo_principal2").rotate(angulo2);
},10);




function main(){
	$('.menu_sandwich_seleccion').click(function(){
		//$('nav').toggle()


		if(contador==1){
			$('.menu_sandwich_btns').animate({
				top:'-270px'
			});
			$('.menu_sandwich ul .a').css("margin-left", "0px");
			$('.menu_sandwich ul .b').css("margin-left", "0px");
			$('.menu_sandwich ul .c').css("margin-left", "0px");
			contador=0;
		}else
		{
			$('.menu_sandwich_btns').animate({
					
				top:'68px'
			});

			$('.menu_sandwich ul .a').css("margin-left", "100px");
			$('.menu_sandwich ul .b').css("margin-left", "100px");
			$('.menu_sandwich ul .c').css("margin-left", "100px");

			contador=1;
		}
		
	});
}
