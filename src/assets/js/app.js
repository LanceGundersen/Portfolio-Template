$(document).foundation();

// //navigation off-canvas temp-fix
// $('.js-off-canvas-exit').hide();

//Slide Show
$( '#slider' ).sliderPro({
	width: '100%',
	height: 600,
	fade: true,
	arrows: false,
	buttons: true,
	fullScreen: true,
	shuffle: true,
	loop: true,
	thumbnailArrows: true,
	thumbnailHeight: 90,
	imageScaleMode: 'contain',
	autoplay: true,
	lazyLoad : true
});
