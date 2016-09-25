document.documentElement.style.fontSize = innerWidth/16 + 'px';
window.onresize = function(){
	document.documentElement.style.fontSize = innerWidth/16 + 'px';
}



$(function(){
	var mySwiper = new Swiper(".swiper-container",{  
        direction:"horizontal",  
        loop:true,
        pagination:".swiper-pagination",
        paginationElement:"li"
        // autoplay:100
   	})

   	setInterval(function(){
   		var targetDate = new Date(2016,8,30);
		var currentDate = new Date();
		var remainTime = targetDate - currentDate;
		//天数
		remainDay = parseInt(remainTime/1000/60/60/24);
		//小时数
		remainHours = parseInt(remainTime/1000/60/60%24);
		//分钟
		remainMinutes = parseInt(remainTime/1000/60%60);
		//秒
		remainSeconds = parseInt(remainTime/1000%60);

		$('#find_time p').text("剩余" +remainDay + "天"+remainHours+"小时"+remainMinutes+"分钟"+remainSeconds+"秒")

   	},1000)
	
   	$('#find_color_box').find('p').on('touchstart',function(){
   		$('#find_color_box').find('p').css({
   			background:'#fff',
   			color:'#666'
   		});
   		$(this).css({
   			background:'red',
   			color:'#fff'
   		})
   	})

   	$('.lazy').lazyload({
   		effect:'fadeIn'
   	});
   	var num = 0;
   	$('#find_car').on('touchstart',function(){
   		num++;
   		$('#find_bottom_2').find('i').show();
   		$('#find_bottom_2').find('i').text(num);
   	})


   	$('#find_return_top').on('touchstart',function(){
   		$('body').scrollTop(0) ;
   	})
   	$('#find_buy_top').find('span').on('click',function(){
   		console.log()
   		$('#find_buy').hide();
   		$('body').css({
   			overflow:'scroll'
   		})
   	})
   	$('#find_cars').on('touchstart',function(){
   		$('#find_buy').show();
   		$('body').css({
   			overflow:'hidden'
   		})
   	})




})


	var app = angular.module('myapp',[])
	.filter('test',function(){
		return function(in2){
			return in2.toFixed(2);
		}
	})
	.controller('myconroller',function($scope){
			$scope.num = 1;
	})






