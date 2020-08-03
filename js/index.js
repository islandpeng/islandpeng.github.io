$(function(){
    var sliderImg = $('.sliderImg')
    var sec = 800
    
    $('.slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        speed: sec,
        autoplay: true,
        autoplaySpeed: 6000
    });
    
    
    //大標動態
    var textTB = $('.textTB')
    var textTop = $('.textTop')
    var textBottom = $('.textBottom')
    
    TweenMax.set(textTB, {skewX:-20, opacity:0, x:400});
    
    
    //視差
//    var scene = document.getElementById('scene');
//    var parallaxInstance = new Parallax(scene);
    var $scene = $('#scene');
    $scene.parallax();

        
    
})