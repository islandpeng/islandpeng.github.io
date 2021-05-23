$(function(){
	// 大標進場動畫
	TweenMax.set($('h2 p'), { y:400})
	TweenMax.set($('h3 p'), { y:400})

})

var category = [
	{
		'cateName': `POSTER DESIGN`,
		'active': true,
		'loading': false,
		'imgList': [
			{
				'imgUrl': `./images/graphic/masonry/01.jpg`,
				'imgAlt': `POWER_#01`,
			},
			{
				'imgUrl': `./images/graphic/masonry/02.jpg`,
				'imgAlt': `DANGER_#02`,
			},
			{
				'imgUrl': `./images/graphic/masonry/03.jpg`,
				'imgAlt': `OCCUPY_#03`,
			},
			{
				'imgUrl': `./images/graphic/masonry/04.jpg`,
				'imgAlt': `ATRTTIVE_#04`,
			},
			{
				'imgUrl': `./images/graphic/masonry/05.jpg`,
				'imgAlt': `POKEMON_poster`,
			},
			{
				'imgUrl': `./images/graphic/masonry/06.jpg`,
				'imgAlt': `POKEMON_poster`,
			},
			{
				'imgUrl': `./images/graphic/masonry/07.jpg`,
				'imgAlt': `IN Love#r`,
			},
			{
				'imgUrl': `./images/graphic/masonry/08.jpg`,
				'imgAlt': `INK_butterfly`,
			},
			{
				'imgUrl': `./images/graphic/masonry/09.jpg`,
				'imgAlt': `911_poster`,
			},
			{
				'imgUrl': `./images/graphic/masonry/10.jpg`,
				'imgAlt': `UTMOST_poster`,
			},
			{
				'imgUrl': `./images/graphic/masonry/11.jpg`,
				'imgAlt': `Network bullying`,
			},
			{
				'imgUrl': `./images/graphic/masonry/12.jpg`,
				'imgAlt': `Taurus love Aquarius`,
			},
			{
				'imgUrl': `./images/graphic/masonry/13.jpg`,
				'imgAlt': `Flower eat that girl`,
			},
			{
				'imgUrl': `./images/graphic/masonry/14.jpg`,
				'imgAlt': `Rain`,
			},
			{
				'imgUrl': `./images/graphic/masonry/15.jpg`,
				'imgAlt': `Microorganism`,
			},
			{
				'imgUrl': `./images/graphic/masonry/16.jpg`,
				'imgAlt': `UTMOST_Partner`,
			},
			{
				'imgUrl': `./images/graphic/masonry/17.jpg`,
				'imgAlt': `NEX/253_poster`,
			},
			{
				'imgUrl': `./images/graphic/masonry/18.jpg`,
				'imgAlt': `TRAIN SUITE`,
			},
			{
				'imgUrl': `./images/graphic/masonry/19.jpg`,
				'imgAlt': `The Silence_poster.#01`,
			},
			{
				'imgUrl': `./images/graphic/masonry/20.jpg`,
				'imgAlt': `The Silence_poster.#02`,
			},
			{
				'imgUrl': `./images/graphic/masonry/21.jpg`,
				'imgAlt': `The Silence_poster.#03`,
			},
			{
				'imgUrl': `./images/graphic/masonry/22-0.jpg`,
				'imgAlt': `Taipei 101/poster`,
			},
			{
				'imgUrl': `./images/graphic/masonry/22-2.jpg`,
				'imgAlt': `Taipei 101/poster`,
			},
			{
				'imgUrl': `./images/graphic/masonry/22.jpg`,
				'imgAlt': `Future//`,
			},
			{
				'imgUrl': `./images/graphic/masonry/24.jpg`,
				'imgAlt': `Flight 123`,
			},
			{
				'imgUrl': `./images/graphic/masonry/25.jpg`,
				'imgAlt': `IS/nake`,
			},
			{
				'imgUrl': `./images/graphic/masonry/26.jpg`,
				'imgAlt': `DOOR_poster`,
			},
			{
				'imgUrl': `./images/graphic/masonry/27.jpg`,
				'imgAlt': `Forest_poster`,
			},
			{
				'imgUrl': `./images/graphic/masonry/28.jpg`,
				'imgAlt': `Moon`,
			},
			{
				'imgUrl': `./images/graphic/masonry/29.jpg`,
				'imgAlt': `Negative energy`,
			},
			{
				'imgUrl': `./images/graphic/masonry/30.jpg`,
				'imgAlt': `NEW YEARS`,
			},
			{
				'imgUrl': `./images/graphic/masonry/31.jpg`,
				'imgAlt': `Secret`,
			},
			{
				'imgUrl': `./images/graphic/masonry/32.jpg`,
				'imgAlt': `Tokyo_#01`,
			},
			{
				'imgUrl': `./images/graphic/masonry/33.jpg`,
				'imgAlt': `Tokyo_#02`,
			},
			{
				'imgUrl': `./images/graphic/masonry/34.jpg`,
				'imgAlt': `Water_Dancer`,
			},
			{
				'imgUrl': `./images/graphic/masonry/35.jpg`,
				'imgAlt': `B/ird`,
			},
			{
				'imgUrl': `./images/graphic/masonry/36.jpg`,
				'imgAlt': `F/lower`,
			},
			{
				'imgUrl': `./images/graphic/masonry/37.jpg`,
				'imgAlt': `Without SOUL`,
			},
			{
				'imgUrl': `./images/graphic/masonry/38.jpg`,
				'imgAlt': `Blue Monday`,
			},
			{
				'imgUrl': `./images/graphic/masonry/39.jpg`,
				'imgAlt': `JAL 747-100/ New world Old Painting.#1`,
			},
			{
				'imgUrl': `./images/graphic/masonry/40.jpg`,
				'imgAlt': `JAL 747-100/ New world Old Painting.#2`,
			},
		]
	},
	{
		'cateName': `HAND-DRAWING`,
		'active': false,
		'loading': false,
		'imgList': [
			{
				'imgUrl': `./images/graphic/drawing/00.jpg`,
				'imgAlt': `Steersman_Beer#01`,
			},
			{
				'imgUrl': `./images/graphic/drawing/01.jpg`,
				'imgAlt': `Steersman_Hops#02`,
			},
			{
				'imgUrl': `./images/graphic/drawing/02.jpg`,
				'imgAlt': `Steersman_Honey#03`,
			},
			{
				'imgUrl': `./images/graphic/drawing/05.jpg`,
				'imgAlt': `Go Die/Mosquito 01`,
			},
			{
				'imgUrl': `./images/graphic/drawing/06.jpg`,
				'imgAlt': `Go Die/Mosquito 02`,
			},
			{
				'imgUrl': `./images/graphic/drawing/08.jpg`,
				'imgAlt': `Go Die/Mosquito 04`,
			},
			{
				'imgUrl': `./images/graphic/drawing/07.jpg`,
				'imgAlt': `Go Die/Mosquito 03`,
			},
			{
				'imgUrl': `./images/graphic/drawing/10.jpg`,
				'imgAlt': `Temple_Drawing`,
			},
			{
				'imgUrl': `./images/graphic/drawing/11.jpg`,
				'imgAlt': `Hotel_Drawing`,
			},
			{
				'imgUrl': `./images/graphic/drawing/15.jpg`,
				'imgAlt': `Kitchen_Drawing`,
			},
			{
				'imgUrl': `./images/graphic/drawing/19.jpg`,
				'imgAlt': `TV_Drawing`,
			},
			{
				'imgUrl': `./images/graphic/drawing/16.jpg`,
				'imgAlt': `Building_Drawing`,
			},
		]
	},
	{
		'cateName': `PHOTOGRAPHY`,
		'active': false,
		'loading': false,
		'imgList': [
			{
				'imgUrl': `./images/graphic/photography/01.jpg`,
				'imgAlt': `Let's get married //`,
			},
			{
				'imgUrl': `./images/graphic/photography/02.jpg`,
				'imgAlt': `Let's get married //`,
			},
			{
				'imgUrl': `./images/graphic/photography/03.jpg`,
				'imgAlt': `Let's get married //`,
			},
			{
				'imgUrl': `./images/graphic/photography/04.jpg`,
				'imgAlt': `Let's get married //`,
			},
			{
				'imgUrl': `./images/graphic/photography/05.jpg`,
				'imgAlt': `Let's get married //`,
			},
			{
				'imgUrl': `./images/graphic/photography/06.jpg`,
				'imgAlt': `Let's get married //`,
			},
			{
				'imgUrl': `./images/graphic/photography/07.jpg`,
				'imgAlt': `Backlight. //`,
			},
			{
				'imgUrl': `./images/graphic/photography/08.jpg`,
				'imgAlt': `Backlight. //`,
			},
			{
				'imgUrl': `./images/graphic/photography/09.jpg`,
				'imgAlt': `Backlight. //`,
			},
			{
				'imgUrl': `./images/graphic/photography/10.jpg`,
				'imgAlt': `Backlight. //`,
			},
			{
				'imgUrl': `./images/graphic/photography/11.jpg`,
				'imgAlt': `Backlight. //`,
			},
			{
				'imgUrl': `./images/graphic/photography/12.jpg`,
				'imgAlt': `Backlight. //`,
			},
			{
				'imgUrl': `./images/graphic/photography/13.jpg`,
				'imgAlt': `Style. new LIFE //`,
			},
			{
				'imgUrl': `./images/graphic/photography/14.jpg`,
				'imgAlt': `Style. new LIFE //`,
			},
			{
				'imgUrl': `./images/graphic/photography/15.jpg`,
				'imgAlt': `Style. new LIFE //`,
			},
			{
				'imgUrl': `./images/graphic/photography/16.jpg`,
				'imgAlt': `Style. new LIFE //`,
			},
			{
				'imgUrl': `./images/graphic/photography/17.jpg`,
				'imgAlt': `Style. new LIFE //`,
			},
			{
				'imgUrl': `./images/graphic/photography/18.jpg`,
				'imgAlt': `Style. new LIFE //`,
			},
			{
				'imgUrl': `./images/graphic/photography/19.jpg`,
				'imgAlt': `WX wedding. //`,
			},
			{
				'imgUrl': `./images/graphic/photography/20.jpg`,
				'imgAlt': `WX wedding. //`,
			},
			{
				'imgUrl': `./images/graphic/photography/21.jpg`,
				'imgAlt': `WX wedding. //`,
			},
			{
				'imgUrl': `./images/graphic/photography/22.jpg`,
				'imgAlt': `she. Story Vo1 //`,
			},
			{
				'imgUrl': `./images/graphic/photography/23.jpg`,
				'imgAlt': `she. Story Vo1 //`,
			},
			{
				'imgUrl': `./images/graphic/photography/24.jpg`,
				'imgAlt': `she. Story Vo1 //`,
			},
			{
				'imgUrl': `./images/graphic/photography/25.jpg`,
				'imgAlt': `she. Story Vo2 //`,
			},
			{
				'imgUrl': `./images/graphic/photography/26.jpg`,
				'imgAlt': `she. Story Vo2 //`,
			},
			{
				'imgUrl': `./images/graphic/photography/27.jpg`,
				'imgAlt': `she. Story Vo2 //`,
			},
			{
				'imgUrl': `./images/graphic/photography/32.JPG`,
				'imgAlt': `she. Story Vo3 //`,
			},
			{
				'imgUrl': `./images/graphic/photography/34.jpg`,
				'imgAlt': `she. Story Vo3 //`,
			},
			{
				'imgUrl': `./images/graphic/photography/35.jpg`,
				'imgAlt': `she. Story Vo3 //`,
			},
		]
	}
]
