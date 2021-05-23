$(function () {

	// 大標進場動畫
	TweenMax.set($('h2 p'), {
		y: 400
	})
	TweenMax.set($('h3 p'), {
		y: 400
	})
	TweenMax.set($('.wCube02'), {
		scaleX: 0
	})

})
var category = [
	{
		'cateName': `MICROSOFT`,
		'active': false,
		'loading': false,
		'imgList': [
			{
				'imgUrl': `./images/business/microsoft/01.jpg`,
				'imgAlt': `THE GUARDIAN/ Taniva`,
			},
			{
				'imgUrl': `./images/business/microsoft/02.jpg`,
				'imgAlt': `THE GUARDIAN/ Inari Okami`,
			},
			{
				'imgUrl': `./images/business/microsoft/03.jpg`,
				'imgAlt': `THE GUARDIAN/ Kukulcan`,
			},
			{
				'imgUrl': `./images/business/microsoft/04.jpg`,
				'imgAlt': `THE GUARDIAN/ Rainbow crow`,
			},
			{
				'imgUrl': `./images/business/microsoft/05-1.jpg`,
				'imgAlt': `THE GUARDIAN/ NEKHBET`,
			},
			{
				'imgUrl': `./images/business/microsoft/05.jpg`,
				'imgAlt': `THE GUARDIAN/ UNICORN`,
			},
			{
				'imgUrl': `./images/business/microsoft/06.jpg`,
				'imgAlt': `THE GUARDIAN/ Xie Zhi`,
			},
			{
				'imgUrl': `./images/business/microsoft/07.jpg`,
				'imgAlt': `THE GUARDIAN/ Nega`,
			},
			{
				'imgUrl': `./images/business/microsoft/08.jpg`,
				'imgAlt': `THE GUARDIAN/ Griffon`,
			},
			{
				'imgUrl': `./images/business/microsoft/09.jpg`,
				'imgAlt': `Microsoft/ Ofiice 365.#1`,
			},
			{
				'imgUrl': `./images/business/microsoft/10.jpg`,
				'imgAlt': `Microsoft/ Ofiice 365.#2`,
			},
			{
				'imgUrl': `./images/business/microsoft/11.jpg`,
				'imgAlt': `Microsoft/ Ofiice 365.#3`,
			},
			{
				'imgUrl': `./images/business/microsoft/15.jpg`,
				'imgAlt': `Microsoft/ Ofiice 365.#4`,
			},
			{
				'imgUrl': `./images/business/microsoft/12.jpg`,
				'imgAlt': `Microsoft/ Azure.#1`,
			},
			{
				'imgUrl': `./images/business/microsoft/14.jpg`,
				'imgAlt': `Microsoft/ Azure.#2`,
			},
			{
				'imgUrl': `./images/business/microsoft/13.jpg`,
				'imgAlt': `Microsoft/ AZURE.#3`,
			},
			{
				'imgUrl': `./images/business/microsoft/16.jpg`,
				'imgAlt': `Microsoft/ AZURE.#4`,
			},
			{
				'imgUrl': `./images/business/microsoft/17.jpg`,
				'imgAlt': `Microsoft/ LinkeIN.#1`,
			},
			{
				'imgUrl': `./images/business/microsoft/18.jpg`,
				'imgAlt': `Microsoft/ LinkeIN.#2`,
			},
			{
				'imgUrl': `./images/business/microsoft/19.jpg`,
				'imgAlt': `Microsoft/ LinkeIN.#3`,
			},
			{
				'imgUrl': `./images/business/microsoft/20.jpg`,
				'imgAlt': `Microsoft/ LinkeIN.#4`,
			},
			{
				'imgUrl': `./images/business/microsoft/21.jpg`,
				'imgAlt': `Microsoft/ EOS windows 7.#1`,
			},
			{
				'imgUrl': `./images/business/microsoft/22.jpg`,
				'imgAlt': `Motul fackbook commercial.#1`,
			},
			{
				'imgUrl': `./images/business/microsoft/23.jpg`,
				'imgAlt': `Motul fackbook commercial.#2`,
			},
			{
				'imgUrl': `./images/business/microsoft/24.jpg`,
				'imgAlt': `Microsoft/ Windows 10 commercial.#1`,
			},
			{
				'imgUrl': `./images/business/microsoft/25.jpg`,
				'imgAlt': `Microsoft/ Windows 10 commercial.#2`,
			},
			{
				'imgUrl': `./images/business/microsoft/26.jpg`,
				'imgAlt': `Microsoft/ Windows 10 commercial.#3`,
			},
			{
				'imgUrl': `./images/business/microsoft/27.jpg`,
				'imgAlt': `EOS windows 7 facebook commercial.#1`,
			},
			{
				'imgUrl': `./images/business/microsoft/28.jpg`,
				'imgAlt': `EOS windows 7 facebook commercial.#2`,
			},
			{
				'imgUrl': `./images/business/microsoft/31.jpg`,
				'imgAlt': `EOS windows 7 facebook commercial.#3`,
			},
			{
				'imgUrl': `./images/business/microsoft/32.jpg`,
				'imgAlt': `EOS windows 7 facebook commercial.#4`,
			},
			{
				'imgUrl': `./images/business/microsoft/29.jpg`,
				'imgAlt': `Retail Transmation commercial.#1`,
			},
			{
				'imgUrl': `./images/business/microsoft/30.jpg`,
				'imgAlt': `Industry Transmation commercial.#1`,
			},
			{
				'imgUrl': `./images/business/microsoft/33.jpg`,
				'imgAlt': `EOS windows 7:Get Morden KV`,
			},
			{
				'imgUrl': `./images/business/microsoft/34.jpg`,
				'imgAlt': `Azure Online Class KV`,
			},
			{
				'imgUrl': `./images/business/microsoft/35.jpg`,
				'imgAlt': `Azure Online Meeting KV`,
			},
		]
	},
	{
		'cateName': `FOXGLASS`,
		'active': false,
		'loading': false,
		'imgList': [
			{
				'imgUrl': `./images/business/foxglass/04.jpg`,
				'imgAlt': `FOXGLASS/XS_poster #01`,
			},
			{
				'imgUrl': `./images/business/foxglass/05.jpg`,
				'imgAlt': `FOXGLASS/XS_poster #02`,
			},
			{
				'imgUrl': `./images/business/foxglass/03.jpg`,
				'imgAlt': `FOXGLASS_FB_Banner`,
			},
			{
				'imgUrl': `./images/business/foxglass/06.jpg`,
				'imgAlt': `FOXGLASS DM DESIGN #01`,
			},
			{
				'imgUrl': `./images/business/foxglass/07.jpg`,
				'imgAlt': `FOXGLASS DM DESIGN #02`,
			},
			{
				'imgUrl': `./images/business/foxglass/08.jpg`,
				'imgAlt': `FOXGLASS DM DESIGN #03`,
			},
			{
				'imgUrl': `./images/business/foxglass/01.jpg`,
				'imgAlt': `FOXGLASS_poster #01`,
			},
			{
				'imgUrl': `./images/business/foxglass/02.jpg`,
				'imgAlt': `FOXGLASS_poster #02`,
			},
			{
				'imgUrl': `./images/business/foxglass/09.jpg`,
				'imgAlt': `FOXGLASS_poster #03`,
			},
		]
	},
	{
		'cateName': `BIAO BAN`,
		'active': true,
		'loading': false,
		'imgList': [
			{
				'imgUrl': `./images/business/BIAO BAN/01.jpg`,
				'imgAlt': `skyline_homepage`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/02.jpg`,
				'imgAlt': `skyline_intro`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/03.jpg`,
				'imgAlt': `MEIMEI_homepage`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/04.jpg`,
				'imgAlt': `MEIMEI_intro#A`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/05.jpg`,
				'imgAlt': `MEIMEI_intro#B`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/06.jpg`,
				'imgAlt': `MEIMEI_intro#C`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/07.jpg`,
				'imgAlt': `MEIMEI_intro#D`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/08.jpg`,
				'imgAlt': `HAPPY_NEW_WORLD_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/09.jpg`,
				'imgAlt': `HAPPY_NEW_WORLD_intro`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/10.jpg`,
				'imgAlt': `Centry_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/11.jpg`,
				'imgAlt': `Centry_intro`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/12.jpg`,
				'imgAlt': `Covent Graden_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/13.jpg`,
				'imgAlt': `DA YUE_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/14.jpg`,
				'imgAlt': `DA YUE_intro`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/15.jpg`,
				'imgAlt': `East/100_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/16.jpg`,
				'imgAlt': `Happines_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/17.jpg`,
				'imgAlt': `Happines_intro`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/18.jpg`,
				'imgAlt': `Hong Tai_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/19.jpg`,
				'imgAlt': `Hong Tai_intro`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/20.jpg`,
				'imgAlt': `Sweet_home_intro`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/21.jpg`,
				'imgAlt': `Sweet_home_intro`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/22.jpg`,
				'imgAlt': `REann_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/23.jpg`,
				'imgAlt': `REann_intro#A`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/24.jpg`,
				'imgAlt': `REann_intro#B`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/25.jpg`,
				'imgAlt': `Graden_Masion_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/26.jpg`,
				'imgAlt': `Graden_Masion_intro`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/27.jpg`,
				'imgAlt': `BossGroup_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/27-1.jpg`,
				'imgAlt': `BossGroup_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/27-2.jpg`,
				'imgAlt': `BossGroup_intro#A`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/28.jpg`,
				'imgAlt': `The_lighthouse_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/29.jpg`,
				'imgAlt': `The_lighthouse_intro`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/30.jpg`,
				'imgAlt': `LifeForce_index`,
			},
			{
				'imgUrl': `./images/business/BIAO BAN/31.jpg`,
				'imgAlt': `LifeForce_intro`,
			},
		]
	},
	{
		'cateName': `DM DESIGN`,
		'active': false,
		'loading': false,
		'imgList': [
			{
				'imgUrl': `./images/business/DM DESIGN/20.jpg`,
				'imgAlt': `2017/ Chines New Years DM design`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/21.jpg`,
				'imgAlt': `2017/ Festival DM design`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/22.jpg`,
				'imgAlt': `2017/ Festival DM design`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/23.jpg`,
				'imgAlt': `Jin chung chia/ DM design`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/24.jpg`,
				'imgAlt': `Daxi Hakkai/ DM design`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/25.jpg`,
				'imgAlt': `Microsoft Media Indusrty/ DM design`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/01.jpg`,
				'imgAlt': `TAROKO/ DM design`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/02.jpg`,
				'imgAlt': `South Park/ Invitation card`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/03.jpg`,
				'imgAlt': `Win 10/ Book Cover`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/04.jpg`,
				'imgAlt': `Microsoft Streams/ Book Cover`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/06.jpg`,
				'imgAlt': `Real estate/ Invitation card`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/07.jpg`,
				'imgAlt': `Misuit Biotechnology/ DM design`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/08.jpg`,
				'imgAlt': `Steersman Beers/ DM design`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/09.jpg`,
				'imgAlt': `A simple Love/ Wedding Card`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/26.jpg`,
				'imgAlt': `ADC/ Build a Dream DM design`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/27.jpg`,
				'imgAlt': `ADC/ Build a Dream DM design`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/28.jpg`,
				'imgAlt': `ADC/ Build a Dream DM design`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/29.jpg`,
				'imgAlt': `UTmost/ Valentine's Day`,
			},
			{
				'imgUrl': `./images/business/DM DESIGN/30.jpg`,
				'imgAlt': `UTmost/ Women's Day`,
			},
		]
	},
	{
		'cateName': `PRINTING`,
		'active': false,
		'loading': false,
		'imgList': [
			{
				'imgUrl': `./images/business/PACKAGE/19.jpg`,
				'imgAlt': `Hsinchu Reading Festival/ Billboard.#`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/20.jpg`,
				'imgAlt': `Hsinchu Reading Festival/ Bag.#1`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/21.jpg`,
				'imgAlt': `Hsinchu Reading Festival/ Bag.#2`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/22.jpg`,
				'imgAlt': `Hsinchu Reading Festival/ Glass cup.#`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/23.jpg`,
				'imgAlt': `Hsinchu Reading Festival/ DM.#1`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/24.jpg`,
				'imgAlt': `Hsinchu Reading Festival/ DM.#2`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/16.jpg`,
				'imgAlt': `Steersman Honey Beer/ Name Card.#`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/17.jpg`,
				'imgAlt': `Nan Da Yuan/ Name Card.#`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/18.jpg`,
				'imgAlt': `Tong Chia Constrution/ Name Card.#`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/07.jpg`,
				'imgAlt': `Steersman Honey Beer/ package.#1`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/08.jpg`,
				'imgAlt': `Steersman Hoppy Monster/ package.#`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/10.jpg`,
				'imgAlt': `Steersman Dark Horse/ package.#2`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/13.jpg`,
				'imgAlt': `Steersman wonen's day/ package.#1`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/14.jpg`,
				'imgAlt': `Steersman wonen's day/ package.#2`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/15.jpg`,
				'imgAlt': `Steersman wonen's day/ package.#3`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/11.jpg`,
				'imgAlt': `Fox Glass 3D/ package.#1`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/12.jpg`,
				'imgAlt': `Fox Glass 2.5D/ package.#2`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/25.jpg`,
				'imgAlt': `steersman brewery/ Signboard.#`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/01.jpg`,
				'imgAlt': `CRAFT GELATO/ package.#1`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/02.jpg`,
				'imgAlt': `CRAFT GELATO/ package.#2`,
			},
			{
				'imgUrl': `./images/business/PACKAGE/03.jpg`,
				'imgAlt': `CRAFT GELATO/ package.#3`,
			},
		]
	},
	{
		'cateName': `LOGO`,
		'active': false,
		'loading': false,
		'imgList': [
			{
				'imgUrl': `./images/business/LOGO/14.jpg`,
				'imgAlt': `1-30 sec/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/15.jpg`,
				'imgAlt': `1-30 sec/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/12.jpg`,
				'imgAlt': `Bin You Development/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/13.jpg`,
				'imgAlt': `MiaoLi County/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/07.jpg`,
				'imgAlt': `About life/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/17.jpg`,
				'imgAlt': `Dong Jia/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/16.jpg`,
				'imgAlt': `Flow Cate/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/01.jpg`,
				'imgAlt': `Flow Cate/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/02.jpg`,
				'imgAlt': `Flow Cate/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/03.jpg`,
				'imgAlt': `ICE CREAM SHOP/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/04.jpg`,
				'imgAlt': `ICE CREAM SHOP/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/05.jpg`,
				'imgAlt': `ICE CREAM SHOP/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/06.jpg`,
				'imgAlt': `Da Xi/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/08.jpg`,
				'imgAlt': `Jenny Story House/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/09.jpg`,
				'imgAlt': `Jenny Story House/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/10.jpg`,
				'imgAlt': `Microsift MTTH/ logo design`,
			},
			{
				'imgUrl': `./images/business/LOGO/11.jpg`,
				'imgAlt': `Microsift MTTH/ logo design`,
			},
		]
	},
]