$(function(){
	
	//視差
	var $scene = $('#scene');
	$scene.parallax();
	
	// 錨點
	$('a.anchor').on('click', function(){
		// 讓捲軸用動畫的方式移動到 #header 的 top 位置
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		var anchor = $($(this).attr('href'))
		
		$body.animate({
			scrollTop: anchor.offset().top
		}, 500);
 
		return false;
	})
	
	var goTopBtn = $('.goTopBtn')
	$(window).on('scroll', function(){
		var winTop = $(this).scrollTop()
//		console.log(winTop)
		if(winTop<=500 && !goTopBtn.hasClass('atTop')){
			goTopBtn.addClass('atTop')
		}else if(winTop>500 && goTopBtn.hasClass('atTop')){
			goTopBtn.removeClass('atTop')
		}
	}).scroll()
	
	// 大標進場動畫
//	var h2P = $('h2 p')
//	var h3P = $('h3 p')
	TweenMax.set($('h2 p'), { y:400})
	TweenMax.set($('h3 p'), { y:400})

})
