$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:3000,
		autoplaySpeed:800,
		draggable:true,
		swipe:true,
		variableWidth:false,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
                    slidesToShow:1,
                    arrows:false,
				}
			}
		]
	});
	
});