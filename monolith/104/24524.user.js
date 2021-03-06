// ==UserScript==
// @name OGame : Moon Spy and Recycler
// @namespace http://userscripts.org/users/36331
// @description OGame : directly spy a moon and send recyclers from galaxy view.
// @date 2008-01-05
// @creator Black Cat
// @include http://uni*.ogame.*/game/index.php?page=galaxy*
// @exclude
// ==/UserScript==

(function(){
	var session = document.getElementsByName("session")[0].getAttribute("value");
	var galaxy = document.getElementsByName("galaxy")[0].getAttribute("value");
	var system = document.getElementsByName("system")[0].getAttribute("value");

	var expression = /doit\(6, \d*, \d*, \d*, 1, (\d*)\)/;
	expression.exec(document.body.innerHTML);
	var shipcount = RegExp.$1;

	// fonction format sur http://www.toutjavascript.com
	function format(valeur,decimal,separateur) {
	// formate un chiffre avec 'decimal' chiffres après la virgule et un separateur
		var deci=Math.round( Math.pow(10,decimal)*(Math.abs(valeur)-Math.floor(Math.abs(valeur)))) ; 
		var val=Math.floor(Math.abs(valeur));
		if ((decimal==0)||(deci==Math.pow(10,decimal))) {val=Math.floor(Math.abs(valeur)); deci=0;}
		var val_format=val+"";
		var nb=val_format.length;
		for (var i=1;i<4;i++) {
			if (val>=Math.pow(10,(3*i))) {
				val_format=val_format.substring(0,nb-(3*i))+separateur+val_format.substring(nb-(3*i));
			}
		}
		if (decimal>0) {
			var decim=""; 
			for (var j=0;j<(decimal-deci.toString().length);j++) {decim+="0";}
			deci=decim+deci.toString();
			val_format=val_format+"."+deci;
		}
		if (parseFloat(valeur)<0) {val_format="-"+val_format;}
		return val_format;
	}

	var fleet_menu = "Fleet menu";
	var menutable = document.getElementById('menu').getElementsByTagName('table')[0];
	if (menutable) {
		var menurows = menutable.getElementsByTagName('tr');
		for (var i = 0; i < menurows.length; i++) {
			if(menurows[i].innerHTML.indexOf('page=flotten1') != -1){
				fleet_menu = menurows[i].getElementsByTagName('a')[0].innerHTML;
				i = menurows.length;
			}
		}
	}

	expression = /\[(\d*):(\d*):(\d*)\]/;

	var links = document.getElementById("content").getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		if (links[i].getAttribute('onmouseover') != null) {
			var omo_attr = links[i].getAttributeNode('onmouseover').nodeValue;
			if (omo_attr.indexOf('s_mond.jpg') != -1) {
				var font_begin = omo_attr.indexOf('<font');
				if (font_begin > -1) {
					var font_end = omo_attr.indexOf("</font>",font_begin)+7;
					expression.exec(omo_attr);
					var planet = RegExp.$3;
					var mission_begin = omo_attr.indexOf('>',font_begin)+1;
					var mission_end = omo_attr.indexOf('<',mission_begin);
					var mission = omo_attr.substring(mission_begin,mission_end);
					var lnk = '<a style="cursor: pointer;" onclick="doit(6, ' + galaxy + ', ' + system + ', ' + planet + ', 3, ' + shipcount + ')">' + mission + '</a>';
					omo_attr = omo_attr.substring(0,font_begin) + lnk + omo_attr.substring(font_end,omo_attr.length);
					if (document.all)
						links[i].onmouseover = new Function("",omo_attr);
					else
						links[i].setAttribute('onmouseover',omo_attr);
				}
			} else if (omo_attr.indexOf('debris.jpg') != -1) {
				var planet = links[i].parentNode.parentNode.getElementsByTagName('th')[0].getElementsByTagName('a')[0].innerHTML;
				var metal_begin = omo_attr.indexOf(':</th><th>')+10;
				var metal_end = omo_attr.indexOf('</th>',metal_begin);
				var metal = parseInt(omo_attr.substring(metal_begin,metal_end).replace(/\D/g, ''));
				var cristal_begin = omo_attr.indexOf(':</th><th>',metal_end)+10;
				var cristal_end = omo_attr.indexOf('</th>',cristal_begin);
				var cristal = parseInt(omo_attr.substring(cristal_begin,cristal_end).replace(/\D/g, ''));
				var total = metal + cristal;
				var recyclers = Math.ceil(total/20000);
				var text_recyclers = format(recyclers, 0, '.');
				var font_begin = omo_attr.indexOf('<font',cristal_end);
				var mission;
				if (font_begin > -1) {
					var font_end = omo_attr.indexOf("</font>",font_begin)+7;
					var mission_begin = omo_attr.indexOf('>',font_begin)+1;
					var mission_end = omo_attr.indexOf('<',mission_begin);
					mission = omo_attr.substring(mission_begin,mission_end);
					var lnk = '<a style="cursor: pointer;" onclick="doit(8, ' + galaxy + ', ' + system + ', ' + planet + ', 2, ' + recyclers + ')">' + mission + '</a>';
					omo_attr = omo_attr.substring(0,font_begin) + lnk + omo_attr.substring(font_end,omo_attr.length);
				}
				var a_begin = omo_attr.indexOf('<a',cristal_end);
				var mission_begin = omo_attr.indexOf('>',a_begin)+1;
				var mission_end = omo_attr.indexOf('<',mission_begin);
				mission = omo_attr.substring(mission_begin,mission_end);
				omo_attr = omo_attr.substring(0,mission_begin-1) + ' title="Recycler ' + text_recyclers + '"' + omo_attr.substring(mission_begin-1,omo_attr.length);
				var a_end = omo_attr.indexOf('</a>',a_begin)+4;
				var lnk2 = '<tr><th colspan="2" style="text-align: left"><a href="index.php?page=flotten1&session=' + session + '&galaxy=' + galaxy + '&system=' + system + '&planet=' + planet + '&planettype=2&target_mission=8">' + mission + ' (' + fleet_menu + ')</a></th></tr>';
				omo_attr = omo_attr.substring(0,a_end) + lnk2 + omo_attr.substring(a_end,omo_attr.length);
				if (document.all)
					links[i].onmouseover = new Function("",omo_attr);
				else
					links[i].setAttribute('onmouseover',omo_attr);
			}
		}
	}
})();
//document.body.innerHTML = document.body.innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
