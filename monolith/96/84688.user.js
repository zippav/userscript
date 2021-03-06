// ==UserScript==
//
// @name            דוקטור צחוק מציג : איקרים נושא הנפשה
// @description     מנפיש את רוב המבנים באיקרים וגם במבט עיר
// @version 		0.1
// @author		דוקטור צחוק
// @include         http://s*.il.ikariam.*/*?*
// @include         http://*.il.ikariam.*/index.php
// @include         http://*ikariam.*/
// @author          דוקטור צחוק
// @version         0.1
//
// ==/UserScript==


//   דוקטור צחוק מודה לכם על התקנת הסקריפט ומקווה שתהנו. לשאלות ובקשות:  DOCTORLOL1 בסקייפ.

/*
	NOTE : This is an adaptation of the Animated Ikariam Theme created by Anilo for the HEBREW servers 
*/


var css = [];
var link = "http://i752.photobucket.com/albums/xx165/firstcauchemar/animated/";

function replaceResourceIcons() {
	if(typeof(id) != 'undefined')
		var elems = document.getElementById(id).getElementsByTagName('img')
	else
		var elems = document.getElementsByTagName('img');	
	for(var i = 0; i < elems.length; i++) {
		if(elems[i].src.match(/wine/)) elems[i].src = '' + link + 'icon_wine.gif';
		if(elems[i].src.match(/marble/)) elems[i].src = '' + link + 'icon_marble.gif';
		if(elems[i].src.match(/glass/)) elems[i].src = '' + link + 'icon_glass.gif';
		if(elems[i].src.match(/sulfur/)) elems[i].src = '' + link + 'icon_sulfur.gif';
		if(elems[i].src.match(/wood/)) elems[i].src = '' + link + 'icon_wood.gif';
	}
	
}

//--------------------------- Login Page ---------------------------
if(document.getElementById('loginForm')) {

	var elems = document.getElementById('text').getElementsByTagName('img');
	for(var i = 0; i < elems.length; i++) {
		
		
	}
} else if(document.getElementById('GF_toolbar')) {
	//--------------------------- Layout -----------------------------
	css.push('#header { background:url(' + link + 'header_bg.jpg) no-repeat; }');
	
	css.push('#globalResources .gold a { background-image:url(' + link + 'btn_treasure-1.gif); }');
	css.push('#globalResources .gold a:hover { background-image:url(' + link + 'btn_treasure-1.gif); }');
	css.push('#globalResources .gold a:down { background-image:url(' + link + 'btn_treasure-1.gif); }');
	
	css.push('#container ul.resources .wood { background-image:url(' + link + 'icon_wood.gif); }');
	css.push('#container ul.resources .marble { background-image:url(' + link + 'icon_marble.gif); }');
	css.push('#container ul.resources .wine { background-image:url(' + link + 'icon_wine.gif); }');
	css.push('#container ul.resources .glass { background-image:url(' + link + 'icon_glass.gif); }');
	css.push('#container ul.resources .sulfur { background-image:url(' + link + 'icon_sulfur.gif); }');
	
	//--------------------------- Advisers -----------------------------
	css.push('#advisors #advCities a.normal { background-image:url(' + link + 'mayor.gif); }');
	css.push('#advisors #advDiplomacy a.normal { background-image:url(' + link + 'diplomat.gif); }');
	
	
	switch(document.body.id) {
		case 'branchOffice':
			replaceResourceIcons('mainview');
			break;	
		case 'city':	//------------ City View ---------------
			css.push('#city #container .phase1 { background-image:url(' + link + 'city_phase1.gif); } ');
			css.push('#city #container .phase2 { background-image:url(' + link + 'city_phase2.gif); } ');
			css.push('#city #container .phase3 { background-image:url(' + link + 'city_phase3.gif); } ');
			css.push('#city #container .phase4 { background-image:url(' + link + 'city_phase4.gif); } ');
			css.push('#city #container .phase5 { background-image:url(' + link + 'city_phase5.gif); } ');	
			
			css.push('#city #container #mainview #locations .academy  .buildingimg { background-image:url(' + link + 'academy.gif); } ');
			
			css.push('#city #container #mainview #locations .barracks  .buildingimg { background-image:url(' + link + 'barracks.gif); } ');
			css.push('#city #container #mainview #locations .branchOffice  .buildingimg { background-image:url(' + link + 'marketplace.gif); } ');
			
			css.push('#city #container #mainview #locations .embassy  .buildingimg { background-image:url(' + link + 'embassy.gif); } ');
			
			css.push('#city #container #mainview #locations .museum  .buildingimg { background-image:url(' + link + 'museum.gif); } ');
			
			css.push('#city #container #mainview #locations .palace  .buildingimg { background-image:url(' + link + 'pallace.gif); } ');
			css.push('#city #container #mainview #locations .palaceColony  .buildingimg { background-image:url(' + link + 'gouvernor.gif); } ');
			css.push('#city #container #mainview #locations .port  .buildingimg { background-image:url(' + link + 'building_port.gif); } ');
			css.push('#city #container #mainview #locations .safehouse  .buildingimg { background-image:url(' + link + 'building_safehouse.gif); } ');
			
			css.push('#city #container #mainview #locations .tavern  .buildingimg { background-image:url(' + link + 'building_tavern2.gif); } ');
			css.push('#city #container #mainview #locations .townHall  .buildingimg { background-image:url(' + link + 'building_townhall.gif); } ');
			
			css.push('#city #container #mainview #locations .workshop  .buildingimg { background-image:url(' + link + 'building_workshop.gif); } ');
			css.push('#city #container #mainview #locations .land .flag { background-image:url(' + link + 'flag_red.gif); } ');
			css.push('#city #container #mainview #locations .shore .flag { background-image:url(' + link + 'flag_blue.gif); } ');
			css.push('#city #container #mainview #locations .wall .flag { background-image:url(' + link + 'flag_yellow.gif); } ');
			break;
		case 'island':
			css.push('#island #container #mainview #cities .selectimg { background-image:url(' + link + 'select_city.gif); } ');
			css.push('#island #container #mainview #cities .buildplace .claim { background-image:url(' + link + 'flag_yellow.gif); } ');
			css.push('#island #container #mainview #cities .level1 div.ownCityImg { background-image:url(' + link + 'city_1_blue.gif); } ');
			css.push('#island #container #mainview #cities .level2 div.ownCityImg, #island #container #mainview #cities .level3 div.ownCityImg { background-image:url(' + link + 'city_2_blue.gif); } ');
			css.push('#island #container #mainview #cities .level4 div.ownCityImg, #island #container #mainview #cities .level5 div.ownCityImg, #island #container #mainview #cities .level6 div.ownCityImg { background-image:url(' + link + 'city_3_blue.gif); } ');
			css.push('#island #container #mainview #cities .level7 div.ownCityImg, #island #container #mainview #cities .level8 div.ownCityImg, #island #container #mainview #cities .level9 div.ownCityImg { background-image:url(' + link + 'city_4_blue.gif); } ');
			css.push('#island #container #mainview #cities .level10 div.ownCityImg, #island #container #mainview #cities .level11 div.ownCityImg, #island #container #mainview #cities .level12 div.ownCityImg { background-image:url(' + link + 'city_5_blue.gif); } ');
			css.push('#island #container #mainview #cities .level13 div.ownCityImg, #island #container #mainview #cities .level14 div.ownCityImg, #island #container #mainview #cities .level15 div.ownCityImg { background-image:url(' + link + 'city_6_blue.gif); } ');
			css.push('#island #container #mainview #cities .level16 div.ownCityImg, #island #container #mainview #cities .level17 div.ownCityImg { background-image:url(' + link + 'city_7_blue.gif); } ');
			css.push('#island #container #mainview #cities .level18 div.ownCityImg, #island #container #mainview #cities .level19 div.ownCityImg, #island #container #mainview #cities .level20 div.ownCityImg, #island #container #mainview #cities .level21 div.ownCityImg, #island #container #mainview #cities .level22 div.ownCityImg, #island #container #mainview #cities .level23 div.ownCityImg, #island #container #mainview #cities .level24 div.ownCityImg { background-image:url(' + link + 'city_8_blue.gif); } ');
			css.push('#island #container #mainview #cities .level1 div.cityimg { background-image:url(' + link + 'city_1_red.gif); } ');
			css.push('#island #container #mainview #cities .level2 div.cityimg, #island #container #mainview #cities .level3 div.cityimg { background-image:url(' + link + 'city_2_red.gif); } ');
			css.push('#island #container #mainview #cities .level4 div.cityimg, #island #container #mainview #cities .level5 div.cityimg, #island #container #mainview #cities .level6 div.cityimg { background-image:url(' + link + 'city_3_red.gif); } ');
			css.push('#island #container #mainview #cities .level7 div.cityimg, #island #container #mainview #cities .level8 div.cityimg, #island #container #mainview #cities .level9 div.cityimg { background-image:url(' + link + 'city_4_red.gif); } ');
			css.push('#island #container #mainview #cities .level10 div.cityimg, #island #container #mainview #cities .level11 div.cityimg, #island #container #mainview #cities .level12 div.cityimg { background-image:url(' + link + 'city_5_red.gif); } ');
			css.push('#island #container #mainview #cities .level13 div.cityimg, #island #container #mainview #cities .level14 div.cityimg, #island #container #mainview #cities .level15 div.cityimg { background-image:url(' + link + 'city_6_red.gif); } ');
			css.push('#island #container #mainview #cities .level16 div.cityimg, #island #container #mainview #cities .level17 div.cityimg { background-image:url(' + link + 'city_7_red.gif); } ');
			css.push('#island #container #mainview #cities .level18 div.cityimg, #island #container #mainview #cities .level19 div.cityimg, #island #container #mainview #cities .level20 div.cityimg, #island #container #mainview #cities .level21 div.cityimg, #island #container #mainview #cities .level22 div.cityimg, #island #container #mainview #cities .level23 div.cityimg, #island #container #mainview #cities .level24 div.cityimg { background-image:url(' + link + 'city_8_red.gif); } ');
			css.push('#island #container #mainview #cities .level1 div.allyCityImg { background-image:url(' + link + 'city_1_green.gif); } ');
			css.push('#island #container #mainview #cities .level2 div.allyCityImg, #island #container #mainview #cities .level3 div.allyCityImg { background-image:url(' + link + 'city_2_green.gif); } ');
			css.push('#island #container #mainview #cities .level4 div.allyCityImg, #island #container #mainview #cities .level5 div.allyCityImg, #island #container #mainview #cities .level6 div.allyCityImg { background-image:url(' + link + 'city_3_green.gif); } ');
			css.push('#island #container #mainview #cities .level7 div.allyCityImg, #island #container #mainview #cities .level8 div.allyCityImg, #island #container #mainview #cities .level9 div.allyCityImg { background-image:url(' + link + 'city_4_green.gif); } ');
			css.push('#island #container #mainview #cities .level10 div.allyCityImg, #island #container #mainview #cities .level11 div.allyCityImg, #island #container #mainview #cities .level12 div.allyCityImg { background-image:url(' + link + 'city_5_green.gif); } ');
			css.push('#island #container #mainview #cities .level13 div.allyCityImg, #island #container #mainview #cities .level14 div.allyCityImg, #island #container #mainview #cities .level15 div.allyCityImg { background-image:url(' + link + 'city_6_green.gif); } ');
			css.push('#island #container #mainview #cities .level16 div.allyCityImg, #island #container #mainview #cities .level17 div.allyCityImg { background-image:url(' + link + 'city_7_green.gif); } ');
			css.push('#island #container #mainview #cities .level18 div.allyCityImg, #island #container #mainview #cities .level19 div.allyCityImg, #island #container #mainview #cities .level20 div.allyCityImg, #island #container #mainview #cities .level21 div.allyCityImg, #island #container #mainview #cities .level22 div.allyCityImg, #island #container #mainview #cities .level23 div.allyCityImg, #island #container #mainview #cities .level24 div.allyCityImg { background-image:url(' + link + 'city_8_green.gif); } ');
			break;
		case 'resource':
			function updateImages() {
				var elems = document.getElementById('resiconcontainer').getElementsByTagName('img');	
				for(var i = 0; i < elems.length; i++) {
					if(elems[i].src.match(/wood/)) elems[i].src = '' + link + 'icon_wood.gif';
				}
			}
			document.getElementById('inputWorkers').addEventListener('change', updateImages, false);
			document.getElementById('inputWorkers').addEventListener('keyup', updateImages, false);
			document.getElementById('sliderbg').addEventListener('mousemove', updateImages, false);
			document.getElementById('sliderbg').addEventListener('mouseup', updateImages, false);
			var elems = document.getElementById('sliderbg').parentNode.getElementsByTagName('a');
			for(var i = 0; i < elems.length; i++) {
				elems[i].addEventListener('mouseup', function() { setTimeout(updateImages, 50); }, true);
			}
			updateImages();
			var elems = document.getElementById('mainview').getElementsByTagName('img');
			for(var i = 0; i < elems.length; i++) {
				if(elems[i].src.match(/wood/)) elems[i].src = '' + link + 'icon_wood.gif';
			}
			break;
		case 'tradegood':
			function updateImages() {
				var elems = document.getElementById('resiconcontainer').getElementsByTagName('img');	
				for(var i = 0; i < elems.length; i++) {
					if(elems[i].src.match(/wine/)) elems[i].src = '' + link + 'icon_wine.gif';
					if(elems[i].src.match(/marble/)) elems[i].src = '' + link + 'icon_marble.gif';
					if(elems[i].src.match(/glass/)) elems[i].src = '' + link + 'icon_glass.gif';
					if(elems[i].src.match(/sulfur/)) elems[i].src = '' + link + 'icon_sulfur.gif';
				}
			}
			document.getElementById('inputWorkers').addEventListener('change', updateImages, false);
			document.getElementById('inputWorkers').addEventListener('keyup', updateImages, false);
			document.getElementById('sliderbg').addEventListener('mousemove', updateImages, false);
			document.getElementById('sliderbg').addEventListener('mouseup', updateImages, false);
			var elems = document.getElementById('sliderbg').parentNode.getElementsByTagName('a');
			for(var i = 0; i < elems.length; i++) {
				elems[i].addEventListener('mouseup', function() { setTimeout(updateImages, 50); }, true);
			}
			updateImages();
			var elems = document.getElementById('mainview').getElementsByTagName('img');
			for(var i = 0; i < elems.length; i++) {
				if(elems[i].src.match(/wood/)) elems[i].src = '' + link + 'icon_wood.gif';
			}
			break;
		case 'palace':
			replaceResourceIcons('mainview');
			break;	
		case 'palaceColony':
			replaceResourceIcons('mainview');
			break;
		case 'transport':
			css.push('.resourceAssign li.wood { background-image:url(' + link + 'icon_wood.gif) !important; } ');
			css.push('.resourceAssign li.marble { background-image:url(' + link + 'icon_marble.gif) !important; } ');
			css.push('.resourceAssign li.wine { background-image:url(' + link + 'icon_wine.gif) !important; } ');
			css.push('.resourceAssign li.glass { background-image:url(' + link + 'icon_glass.gif) !important; } ');
			css.push('.resourceAssign li.sulfur { background-image:url(' + link + 'icon_sulfur.gif) !important; } ');
			break;
		case 'warehouse':
			replaceResourceIcons();
			break;
		case 'worldmap_iso':
			css.push('#worldmap_iso #worldmap .tradegood1 { background-image:url(' + link + 'icon_wine.gif); } ');
			css.push('#worldmap_iso #worldmap .tradegood2 { background-image:url(' + link + 'icon_marble.gif); } ');
			css.push('#worldmap_iso #worldmap .tradegood3 { background-image:url(' + link + 'icon_glass.gif); } ');
			css.push('#worldmap_iso #worldmap .tradegood4 { background-image:url(' + link + 'icon_sulfur.gif); } ');
			css.push('#worldmap_iso #worldmap .islandMarked { background-image:url(' + link + 'select_island.gif); } ');
			break;
		
	}
}	
css.push('#city #container #mainview #locations .tavern  .buildingimg { left:-10px; top:-37px; width:111px; height:84px; }    #city #container #mainview #locations .barracks .buildingimg {left:0px; top:-33px; width:100px; height:76px; }    #city #container #mainview #locations .palace .buildingimg {left:-10px; top:-42px; width:106px; height:97px; }    #city #container #mainview #locations .safehouse .buildingimg {left:5px; top:-15px; width:84px; height:58px; }    #city #container #mainview #locations .embassy .buildingimg {left:-5px; top:-31px; width:93px; height:85px; }    #city #container #mainview #locations .academy .buildingimg {left:-19px; top:-31px; width:123px; height:90px; }    #city #container #mainview #locations .port .buildingimg {left:-65px; top:-35px; width:163px; height:131px; }    #city #container #mainview #locations .townHall .buildingimg {left:-5px; top:-60px; width:104px; height:106px; }    #city #container #mainview #locations .workshop-army .buildingimg {left:-19px; top:-54px; width:106px; }    #city #container #mainview #locations .museum .buildingimg {left:-8px; top:-38px; width:133px; height:98px; }    #city #container #mainview #locations .branchOffice .buildingimg {left:-19px; top:-31px; width:120px; height:84px; }    #city #container #mainview #locations .palaceColony .buildingimg {left:-10px; top:-42px; width:109px; height:95px; }    #island #container #mainview #cities .buildplace .claim { display:block; position:absolute; left:26px; bottom:20px; width:29px; height:40px;}    #worldmap_iso #worldmap .islandMarked { position:absolute; bottom:65px; left:80px; width:73px; height:97px; }   #island #container #mainview #cities .selected div.selectimg {visibility:visible; z-index:-9999; }  #island #container #mainview #cities .selectimg {position:absolute; top:22px; left:-17px; width:99px; height:52px;}   #island .cityimg { z-index:10 !important; }');

GM_addStyle(css.join(''));