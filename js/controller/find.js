document.documentElement.style.fontSize = innerWidth/16 + 'px';
window.onresize = function(){
	document.documentElement.style.fontSize = innerWidth/16 + 'px';
}
window.onload = function(){

	var iscroll = new IScroll('#find_aside');

	

	$('#find_aside').find('li').on('touchstart',function(){
		$('#find_aside').find('li').css({
			borderLeft: '2px solid #f9f9f9',
			background:'#f9f9f9'
		});
		$('#find_aside').find('li').find('a').css({
			color:'#4a4a4a'
		});
		$(this).css({
			borderLeft: '2px solid red',
			background:'white'
		});
		$(this).find('a').css({
			color:'red'
		});
	})


	



}


var app = angular.module('find_myApp',[]);

app.controller('mycontrol',function($scope,$http){

    $http.get('../../json/find_1.json').success(function(res){
 
        $scope.data = res.data.goods;

    });
})