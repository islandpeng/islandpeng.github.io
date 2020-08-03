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
	
	
	
	// masonry 瀑布流
	var masonryOptions = {
		itemSelector: '.grid-item',
		animationOptions: { queue: true, duration: 350 },
		isAnimated: true,
		columnWidth: '.grid-item',
		percentPosition: true
	}
	
	var $grid = $('.grid').imagesLoaded( function() {
			// init Masonry after all images have loaded
			$grid.masonry(masonryOptions)
	});
	
	// 頁籤切換
	var activeType = $($('.workTab.active').data('pictype'))
	activeType.addClass('show')

	var workTab = $('.workTab')
	var gridBox = $('.gridBox')

	workTab.on('click touchend', function(){
		
			var showGrid = $($(this).data('pictype'))
			if(!$(this).hasClass('active')){
					workTab.removeClass('active')
					$(this).addClass('active')
					gridBox.removeClass('show')
					showGrid.addClass('show')
			}
	})
	/*workTab.on('mouseenter focus', function(){
		$(this).addClass('hover')
		console.log('in')
	}).on('mouseleave blur', function(){
		$(this).removeClass('hover')
		console.log('out')
	})*/
	
	
	// row 數切換
	var masonryBox = $('.masonryBox')
	var lineBtn = $('.lineBtn')
	var grid = $('.grid')
	var grid_item = $('.grid-item')
	
//	alert(wdh)
	function rowChange(){
		var wdh = $(window).width()
		var grdW = grid_item.width()/grid.width()
//		console.log(grdW)
		
		if(wdh<=768){
//			if(0.9 <= grdW || grdW <= 0.21){
			if(0.9 <= grdW || grdW <= 0.21){
				grid_item.css({width: ''})
				$('.line1').addClass('active').siblings('.lineBtn').removeClass('active')
			}
		}else if(wdh>768){
//			if(grdW <= 0.21 || 0.9 <= grdW){
			if(grdW <= 0.34 || 0.9 <= grdW){
				grid_item.css({width: ''})
				$('.line3').addClass('active').siblings('.lineBtn').removeClass('active')
			}
		}
	}
	
	
	lineBtn.on('click', function(){
		var linNu = $(this).data('line')
		if(!$(this).hasClass('active')){
			$(this).addClass('active').siblings('.lineBtn').removeClass('active')
			grid_item.css({width: linNu})
			$grid.masonry('layout')
			// grid_item.addClass('wth10')
		}else{
			return false
		}
		
	})
	
	
	// lightBox slider
	var lightSlideBox = $('.lightSlideBox')
	var SD = $('.SD')
	var slider = $('.slider')
	var newTabBtn = $('.newTabBtn')
	var picName = $('.picName')
	var nowPage = $('.nowPage')
	var allPage = $('.allPage')
	var closeDiv = $('.slideMsk, .closeBtn')
	var startSlider
	
	function sliderStart(){
		slider.slick({
			arrows: true,
			dots: false,
			infinite: true,
			initialSlide: startSlider,
			speed: 500,
			adaptiveHeight: true
		})
	}
	
	slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var nowP = nextSlide+1
		var imgNextLink = $('.SD.show').find(sliderImg).eq(nextSlide).find('img').attr('src')
		
		nowPage.html(nowP)
		picName.html($('.SD.show').find(sliderImg).eq(nextSlide).find('img').attr('alt'))
		newTabBtn.attr('href', imgNextLink)
	})
	
	grid_item.on('click', function(){
		var sdShow = $($(this).parent(grid).data('sd'))
		var imgLink = $(this).find('img').attr('src')
//		console.log(imgLink)
		
		sdShow.addClass('show').show()
		
		startSlider = $(this).index()
		allPage.html('/'+ $(this).parent(grid).find(grid_item).length)
		nowPage.html(startSlider+1)
		picName.html($(this).find('img').attr('alt'))
		newTabBtn.attr('href', imgLink)
		lightSlideBox.addClass('open')
		sliderStart()
		slick_rwd()
	})
	
	closeDiv.on('click', function(){
		lightSlideBox.removeClass('open')
		slider.slick('unslick')
		SD.removeClass('show').hide()
//		slider.html('')
	})
	
	gridBox.each(function(){
//		var BItem = $(this).find('.grid').html()
		var _sd = $($(this).children('.grid').data('sd'))
//		console.log($(this).children('.grid').data('sd'))
		_sd.find(slider).html($(this).find('.grid').html())
	})
	slider.find('div').removeClass('grid-item')
	
	
	var sliderImg = $('.lightSlideBox .sliderImg')
	var tooLong
	
	function slick_rwd(){
			// var winH = $(window).height()
			// var winW = $(window).width()
			var winH = $('.sliderBox').height()
			var winW = $('.sliderBox').width()
			var slicH = $('.sliderBox').height()
//			console.log(slicH)
			sliderImg.each(function(){
				var slickImgI = $(this).find('img')
				tooLong = slickImgI.height()/slickImgI.width()
				// console.log(tooLong)
				var VH = $(this).data('imgb')
				$(this).css({height: slicH})
				
				if(winW > winH){
						if(VH == 'vertical'){
								slickImgI.css({ height: '100%', width: 'auto'})
						}else{
								slickImgI.css({ height: 'auto', width: '100%'})
						}
				}else{
						if(VH == 'horizon'){
								slickImgI.css({ height: 'auto', width: '100%'})
						}else{
								if(tooLong>=1.26){
									slickImgI.css({ height: '100%', width: 'auto'})
								}else{
									slickImgI.css({ height: 'auto', width: '100%'})
								}
						}  
				}
			})
	}

	$(window).resize(function(){
		slick_rwd()
		rowChange()
	}).resize()
	    
})

