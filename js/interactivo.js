function clearElements(element){
	$(".Element").css('opacity', '0.3');
	$("."+element.className).css('opacity','1');
}

function restoreElements(){
	$(".Element").css('opacity','1');
}