var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

$(function(){
	
  //KV視差
	var $scene = $('#scene');
	$scene.parallax();
	
	// 錨點
	$('a.anchor').on('click', function(){
		var anchor = $($(this).attr('href'))
		$body.animate({
			scrollTop: anchor.offset().top
		}, 500);
		return false;
	})
	// goTopBtn
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

})


if(window.Vue){

/** VUE ********************************************** */
var _this
// masonry 瀑布流 屬性設定
var masonryOptions = {
	itemSelector: '.grid-item',
	animationOptions: { queue: true, duration: 350 },
	isAnimated: true,
	columnWidth: '.grid-item',
	percentPosition: true
}
var Vm = new Vue({
	el: '.wrapper',
  data: {
		loadingFinished: false,
		category: [],
		grid: null,
		gridDone: false,
		swiper: null,
		swiperDone: false,
		tabIndex: null,
		initRowNum: 3,
		initRowNum_m: 1,
		rowNum: 0,
		linNu: '',
  },
	beforeMount(){
		_this = this
		_this.category = category
	},
  mounted() {
    this.$nextTick(() => {
			var query_init = Modernizr.mq('(max-width: 768px)');
			_this.init(query_init)
      $(window).on('resize', () => {
				var winW = $(window).width()
				var query = Modernizr.mq('(max-width: 768px)');
				_this.rwd_ROW(winW, query)
      }).resize()
    })
  },
  methods: {
		init(query){ // 一進網頁狀態
			$('.line'+_this.rowNum).addClass('active')
			try{
        var prevRow = sessionStorage.getItem('isp_nowRow')
        if(prevRow != null){
          _this.rowNum = prevRow
        }else{
					if(query){
						_this.rowNum = _this.initRowNum_m
					}else{
						_this.rowNum = _this.initRowNum
					}
				}

      }catch(error){
        console.log('Get Value Fail.')
        console.log(error)
      }
			
		},
		reMasonry(){ //重建瀑布流
			_this.grid = $('.box'+_this.tabIndex).find('.grid').imagesLoaded( function() {
				// init Masonry after all images have loaded
				_this.grid.masonry(masonryOptions)
				$('.grid-item').css({'width': _this.linNu})
				_this.grid.masonry('layout')
				_this.gridDone = true
				_this.loadingFinished=true
			});
		},
		changeTabBox(e, cid){ // 頁籤切換
			_this.grid.masonry('destroy')
			_this.loadingFinished = false
			if(!_this.category[cid].loading){
				_this.category[cid].loading = true
			}
			_this.category.forEach((item, index)=>{
				if(index==cid){
					item.active=true
				}else{
					item.active=false
				}
			})
		},
		changeRow(num){
			_this.rowNum = num
			try{
        var nowRow = JSON.stringify(_this.rowNum)
        sessionStorage.setItem('isp_nowRow', nowRow)

      }catch(error){
        console.log('Set Value Fail.')
        
      }
		},
		popUpShow(cid){
			$('.lightSlideBox').stop(true).fadeIn(300)
			if(!_this.swiperDone){
				_this.buildSwiper(cid)
			}else{
				_this.swiper.slideTo(cid+1)
			}
			
		},
		popUpClose(){
			$('.lightSlideBox').stop(true).fadeOut(200)
		},
		buildSwiper(index){ // 建立輪播
      _this.swiper = new Swiper('.swiper-container', {
        initialSlide: index,
        loop: true,
        navigation: {
          nextEl: '.swpB_R',
          prevEl: '.swpB_L',
        },
        on: {
					init: function(e){
						_this.swiperDone = true
					},
          slideChange: function(e){
            // console.log(e.activeIndex)
						var x = e.activeIndex
						if(x<=0){
							x = _this.category[_this.tabIndex].imgList.length
						}else if(x > _this.category[_this.tabIndex].imgList.length){
							x = 1
						}
						$('.nowPage').text(x)
						$('.picName').text(_this.category[_this.tabIndex].imgList[x-1].imgAlt)
						$('.newTabBtn').attr('href', _this.category[_this.tabIndex].imgList[x-1].imgUrl)
          },
        },
      });
    },
		/* RWD ----------------------*/
		rwd_ROW(winW, query){
			if(query && _this.rowNum==5){
				_this.rowNum = 3
			}else if(!query && _this.rowNum == 1){
				_this.rowNum = 3
			}
		},
	},
	watch:{
		loadingFinished(e){
      if(e){
        $('.loadingBox').stop(true).fadeOut(350)
      }else{
        $('.loadingBox').stop(true).fadeIn(150)
      }
    },
		category:{
			handler: function(e){
				e.forEach((item, index)=>{
					if(item.active){
						_this.tabIndex = index
					}
				})
			},
			deep: true,
		},
		rowNum:{
			handler: function(e){
				$('.lineBtn').removeClass('active')
				$('.line'+e).addClass('active')
				switch(Number(e)){
					case 1:
						_this.linNu = '100%'
						break;
					case 3:
						_this.linNu = '33.333%'
						break;
					case 5:
						_this.linNu = '20%'
						break;
					default:
						_this.linNu = '33.333%'
				}
				if(_this.gridDone){
					$('.grid-item').css({'width': _this.linNu})
					_this.grid.masonry('layout')
				}
			},
			// immediate: true,
		},
		tabIndex(e, oldVal){
			if(!_this.category[e].loading){
				_this.category[e].loading = true
			}
			if(oldVal!=null && _this.swiperDone){
				_this.swiper.destroy()
				_this.swiperDone = false
			}
			
		}
	},
	computed:{
		footerYear(){
			return new Date().getFullYear()
		}
	},
	updated(){
		_this.reMasonry()
	},
})

}