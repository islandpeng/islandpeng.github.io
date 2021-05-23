var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
// 錨點
$('a.anchor').on('click', function () {
  var anchor = $($(this).attr('href'))
  $body.animate({
    scrollTop: anchor.offset().top - 50
  }, 500);
  return false;
})

var goTopBtn = $('.goTopBtn')
$(window).on('scroll', function () {
  var winTop = $(this).scrollTop()
  //		console.log(winTop)
  if (winTop <= 500 && !goTopBtn.hasClass('atTop')) {
    goTopBtn.addClass('atTop')
  } else if (winTop > 500 && goTopBtn.hasClass('atTop')) {
    goTopBtn.removeClass('atTop')
  }

  //滾動進場
  var evts = $('.galImgBox');
  evts.each(function(){
    var x = $(this)
    divMove(x, function () {
      // console.log(x)
      var tA = x.find('.openImg')
      var tl2 = new TimelineLite()
      tl2.to(tA, 1.8, { x: 0}, "+=0.0")
        .to(tA, 1.4, { opacity: 1,ease: Power1.easeIn}, "-=2")
        
    });
  })
}).scroll()


//** 各式進場動態 ****************************************************//
TweenMax.set($('.hImg img'), {opacity: 0, scale: 0.5})
TweenMax.set($('h3'), {opacity: 0})

TweenMax.set($('.l_b .openImg'), {opacity: 0, x:-300})
TweenMax.set($('.r_b .openImg'), {opacity: 0, x:300})

function divMove(element, func) {
	var winScrollTop = $(window).scrollTop()
	var winNowH = $(window).height() * 0.7
	var eleTop = element.offset().top
  var eleH = element.height()/2
  var yy = eleTop+eleH
	var xx = eleTop - winScrollTop - winNowH
	if (winScrollTop > yy) {
		return false
	} else if(xx <= 0) {
		func()
	}else{
    return false
  }
}


window.onload = function(){
  var tl = new TimelineLite()
	tl.to($('.hImg img'), 1.8, {opacity:1}, '+=1.8')
    .to($('.hImg img'), 1.2, {scale: 1}, '-=1.8')
		.to($('h3'), 1.3, {opacity:1},'-=1')
}



/*****************************************************************/
//vue
var vm = new Vue({
  el: '#godzillaWrap',
  data: {
    loadingFinished: false,
    imgList: [],
    nowSlick: [],
    swiper: null,
		swiperDone: false,
  },
  beforeMount(){
		_this = this
	},
  mounted() {
    this.imgData()
    this.$nextTick(() => {
      // this.sliderStart()
      $(window).resize(() => {
        // this.slick_rwd()
      }).resize()
    })
  },
  methods: {
    imgData() {
      $.ajax({
        url: '../js/godzilla.json',
        type: 'GET',
        dataType: 'json',
        success: (data) => {
          // console.log(data)
          this.imgList = data
          // this.nowSlick = data[0].l_b[0].imgs
        }
      })
    },
    buildSwiper(index){ // 建立輪播
      var TF = false
      if(_this.nowSlick.length>1){
        TF = true
      }
      _this.swiper = new Swiper('.swiper-container', {
        // initialSlide: index,
        loop: TF,
        navigation: {
          nextEl: '.swpB_R',
          prevEl: '.swpB_L',
        },
        on: {
					init: function(e){
						_this.swiperDone = true
            _this.loadingFinished = true
					},
          slideChange: function(e){
            // console.log(e.activeIndex)
						var x = e.activeIndex
						if(x<=0){
							x = _this.nowSlick.length
						}else if(x > _this.nowSlick.length){
							x = 1
						}
						$('.nowPage').text(x)
						$('.picName').text(_this.nowSlick[x-1].imgAlt)
						$('.newTabBtn').attr('href', _this.nowSlick[x-1].imgUrl)
          },
        },
      });
    },
    openSlick(index, imgs, cid) {
      if(_this.swiperDone){
        _this.swiper.destroy()
        _this.swiperDone = false
      }
      _this.loadingFinished = false
      _this.nowSlick = imgs
      $('.picName').text(_this.nowSlick[0].imgAlt)
      $('.newTabBtn').attr('href', _this.nowSlick[0].imgUrl)
      $('.lightSlideBox').stop(true).fadeIn(300)
    },
    closeSlick() {
      $('.lightSlideBox').stop(true).fadeOut(200)
      _this.swiper.destroy()
      _this.swiperDone = false
      $('.nowPage').text('1')
      setTimeout(()=>{
        _this.nowSlick = []
      },300)
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
  },
  computed:{
		footerYear(){
			return new Date().getFullYear()
		}
	},
  updated(){
    if(!_this.swiperDone){
      _this.buildSwiper()
    }
  }
})