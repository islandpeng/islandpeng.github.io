$(function () {

	// 大標進場動畫
	//	var h2P = $('h2 p')
	//	var h3P = $('h3 p')
	TweenMax.set($('h2 p'), { y: 400 })
	TweenMax.set($('h3 p'), { y: 400 })

	$('.wbLbImg').mCustomScrollbar({
		theme: 'minimal-dark'
	});

	var wbLB = $('.wbLB')
	var wbLayout = $('.wbLayout')

	$('.wbList').on('click', function(){
		wbLB.fadeIn(500)
		wbLayout.css({opacity:1})
		var wbLink = $(this).data('wblink'),
		imgSrc = $(this).find('img.wbSrc').attr('src'),
		wbLbName = $(this).find('.wbName').text()
		
		$('.wbLbImg img').attr('src', imgSrc)
		$('.wbLbName').text(wbLbName)

		if(wbLink !=""){
			$('.wbLbLink').show()
			$('.wbLbLink').attr('href', wbLink)
		}else{
			$('.wbLbLink').hide()
		}

	})
	$('.closeWB, .closeWbBtn').on('click', function(){
		wbLayout.css({opacity:0})
		wbLB.delay(300).fadeOut(300)
	})

})
