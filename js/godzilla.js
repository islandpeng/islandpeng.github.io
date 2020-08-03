// 錨點
$('a.anchor').on('click', function () {
  // 讓捲軸用動畫的方式移動到 #header 的 top 位置
  var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
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
  el: '#galleryBox',
  data: {
    imgList: [],
    nowSlick: []
  },
  mounted() {
    this.imgData()
    this.$nextTick(() => {
      this.sliderStart()
      $(window).resize(() => {
        this.slick_rwd()
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
    sliderStart() {
      var slider = $('.slider')
      var sliderImg = $('.lightSlideBox .sliderImg')
      var newTabBtn = $('.newTabBtn')
      var picName = $('.picName')
      var nowPage = $('.nowPage')
      
      slider.slick({
        arrows: true,
        dots: false,
        infinite: true,
        // initialSlide: startSlider,
        speed: 500,
        adaptiveHeight: true
      })
      slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        var nowP = nextSlide + 1
        var imgNextLink = this.nowSlick[nextSlide].imgUrl

        nowPage.html(nowP)
        picName.html(this.nowSlick[nextSlide].imgAlt)
        newTabBtn.attr('href', imgNextLink)
      })
    },
    slick_rwd() {
      var tooLong
      // var winH = $(window).height()
      // var winW = $(window).width()
      var winH = $('.sliderBox').height()
      var winW = $('.sliderBox').width()
      var slicH = $('.sliderBox').height()
      //			console.log(slicH)
      $('.lightSlideBox .sliderImg').each(function () {
        var slickImgI = $(this).find('img')
        tooLong = slickImgI.height() / slickImgI.width()
        // console.log(tooLong)
        var VH = $(this).data('imgb')
        $(this).css({
          height: slicH
        })

        if (winW > winH) {
          if (VH == 'vertical') {
            slickImgI.css({
              height: '100%',
              width: 'auto'
            })
          } else {
            slickImgI.css({
              height: 'auto',
              width: '100%'
            })
          }
        } else {
          if (VH == 'horizon') {
            slickImgI.css({
              height: 'auto',
              width: '100%'
            })
          } else {
            if (tooLong >= 1.26) {
              slickImgI.css({
                height: '100%',
                width: 'auto'
              })
            } else {
              slickImgI.css({
                height: 'auto',
                width: '100%'
              })
            }
          }
        }
      })
    },
    // slideBox() {
    //   var slider = $('.slider')
    //   var sliderImg = $('.lightSlideBox .sliderImg')
    //   var newTabBtn = $('.newTabBtn')
    //   var picName = $('.picName')
    //   var nowPage = $('.nowPage')

    //   slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     var nowP = nextSlide + 1
    //     var imgNextLink = $('.SD.show').find(sliderImg).eq(nextSlide).find('img').attr('src')

    //     nowPage.html(nowP)
    //     picName.html($('.slickDiv.show').find(sliderImg).eq(nextSlide).find('img').attr('alt'))
    //     newTabBtn.attr('href', imgNextLink)
    //   })
    // },
    openSlick(index, imgs, cid) {
      // this.slickUnslick()
      $('.lightSlideBox').addClass('open')
      $('.slickDiv>div').eq(index).show()
      $('.slickDiv>div').eq(index).find('.choosePic').eq(cid).show()
      console.log(imgs)
      this.nowSlick = imgs
      $('.slickDiv').addClass('show').show()
      $('.nowPage').html('1')
      $('.allPage').html('/' + this.nowSlick.length)
      $('.picName').html(this.nowSlick[0].imgAlt)
      $('.newTabBtn').attr('href', this.nowSlick[0].imgUrl)
      this.sliderStart()
      this.slick_rwd()
      // alert('執行')
    },
    closeSlick() {
      $('.lightSlideBox').removeClass('open')
      $('.slickDiv').removeClass('show').hide()
      $('.slickDiv>div').hide()
      $('.choosePic').hide()
      this.slickUnslick()
    },
    slickUnslick() {
      $('.slider').slick('unslick')
    }
  }
})