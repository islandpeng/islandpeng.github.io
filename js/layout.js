
$(function(){
	// $('a[title="Godzilla Gallery"]').on('click', function(){
	// 	alert('Coming soon.')
	// 	return false
	// })
	
	
	//nav 開合
	var contentBord = $('.contentBord')
	var navBtn = $('.navBtn')

	navBtn.on('click', function(){
			if(!$(this).hasClass('open')){
					$(this).addClass('open')
					contentBord.addClass('navOpen')
			}else{
					$(this).removeClass('open')
					contentBord.removeClass('navOpen')
			}
	})
	
	// loading page動畫
	var afterLine = $('.afterLine')
	TweenMax.set(afterLine, { scaleX: 0})
	var tl_loading = new TimelineLite();
	tl_loading.to(afterLine, 0.6, {scaleX: 1},'+=1.2')
	
})

$(window).on('load', function(){
	var timeSec = 1.5
	
	$('.loadingBox').delay(timeSec*1000).fadeOut(300)
	
	
	// 大標進場動畫_index
	var tl_index = new TimelineLite();
	tl_index.to('.textTop', 1, {opacity:1, x:0},'+='+(timeSec+0.6))
			.to('.textBottom', 1, {opacity:1, x:0}, '-=0.8')
			.to('.textTB', 1, {skewX:0}, '-=0.8')
	
	
	// 大標進場動畫_business
	var tl_business = new TimelineLite();
	
	tl_business.to($('h2 p'), 0.8, {y:0}, '+='+timeSec)
		.to($('h3 p'), 1, {y:0},'-=0.7')
		.to($('.wCube02'), 1, {scaleX:1},'-=0.5')
	
	
	// 大標進場動畫_graphic
	var tl_graphic = new TimelineLite()
	tl_graphic.to($('h2 p'), 0.8, {y:0}, '+='+timeSec)
		.to($('h3 p'), 1, {y:0},'-=0.7')
	
})