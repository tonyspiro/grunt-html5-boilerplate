// Add main scripts here
$(function(){

	$.get({
		url : 'https://api.cosmicjs.com/v1/music/object/j-dilla'
	}).success(function(data){
		console.log(data);
	});

});