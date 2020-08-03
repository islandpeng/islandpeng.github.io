$(function () {

	// 大標進場動畫
	//	var h2P = $('h2 p')
	//	var h3P = $('h3 p')
	TweenMax.set($('h2 p'), {
		y: 400
	})
	TweenMax.set($('h3 p'), {
		y: 400
	})
	TweenMax.set($('.wCube02'), {
		scaleX: 0
	})


	// masonry 瀑布流
	// var masonryOptions = {
	// 	itemSelector: '.grid-item',
	// 	animationOptions: {
	// 		queue: true,
	// 		duration: 350
	// 	},
	// 	isAnimated: true,
	// 	columnWidth: '.grid-item',
	// 	percentPosition: true
	// }

	// var $grid = $('.grid').imagesLoaded(function () {
	// 	// init Masonry after all images have loaded
	// 	$grid.masonry(masonryOptions)
	// });

	var xhrList = []
	var srcList = [
		'../json/business_ms.json',
		'../json/business_fox.json',
		'../json/business_fox.json'
	]
	var dataList = []
	var categoryList = [
		$('.msBox'),
		$('.foxBox'),
		$('.biaoBox'),
		$('.dmBox'),
		$('.packBox'),
		$('.lgBox')
	]
	var divList = []
	var count = 3

	function callback() {
		count--
		if (count <= 0) {
			console.log('Done');
			var $grid = $('.grid').imagesLoaded(function () {
				// init Masonry after all images have loaded
				$grid.masonry(masonryOptions)
			});
			return false
		}
	}

	function appendDiv(i) {
		var cate = dataList[i].length
		// console.log(cate)
		for (var x=0; x < cate; x++) {
			divList[x] = `
			<div class="grid-item sliderImg" data-imgb="${dataList[i][x].dataImgb}">
				<div>
					<img src="${dataList[i][x].src}" alt="${dataList[i][x].alt}">
				</div>
			</div>
			`
			// console.log(divList[x])
			categoryList[i].append(divList[x])
		}
		callback()
	}

	// for (let i = 0; i < count; i++) {
	// 	xhrList[i] = new XMLHttpRequest();
	// 	xhrList[i].open('get', srcList[i], true);
	// 	xhrList[i].send(null);
	// 	xhrList[i].onload = function () {
	// 		// console.log(JSON.parse(xhrList[i].responseText));
	// 		dataList[i] = JSON.parse(xhrList[i].responseText)
	// 		vm.msBox = dataList[0]
	// 		// console.log(categoryList[i])
	// 		// appendDiv(i)
	// 		// var str = JSON.parse(xhrList[i].responseText);
	// 	}
	// }

	// var lineBtn = $('.lineBtn')
	// var grid = $('.grid')
	// var grid_item = $('.grid-item')
	// lineBtn.on('click', function () {
	// 	// console.log($(this).data('line'))
	// 	var linNu = $(this).data('line')
	// 	if (!$(this).hasClass('active')) {
	// 		$(this).addClass('active').siblings('.lineBtn').removeClass('active')
	// 		grid_item.css({
	// 			width: linNu
	// 		})
	// 		// grid.masonry('layout')
	// 	} else {
	// 		return false
	// 	}
	// })
	// var VueMasonryPlugin = window["vue-masonry-plugin"].VueMasonryPlugin
	// Vue.use(VueMasonryPlugin)

	// var vm = new Vue({
	// 	el: '#gridBlock',
	// 	data: {
	// 		msBox: [],
	// 		foxBox: [],
	// 		biaoBox: [],
	// 		dmBox: [],
	// 		packBox: [],
	// 		lgBox: []
	// 	},
	// 	methods: {
			
	// 	}
	// })

})