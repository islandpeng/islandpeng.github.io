
$(function(){
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
	
//	$('.loadingBox').delay(1500).fadeOut(300)
	
	
})