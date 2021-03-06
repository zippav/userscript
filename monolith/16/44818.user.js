// ==UserScript==
// @name           Wurzelimperium
// @namespace      www.wurzelimperium.de
// @include        http://s*.wurzelimperium.de/*
// @version        updatet-1.0
// ==/UserScript==

(function () {

var loc = document.location; 
var reg = /http:\/\/s(.*?)\.wurzelimperium\.de\/(.*?)\.php/i;
var server = reg.exec(loc)[1];
var page = reg.exec(loc)[2];

val_schutz = !!GM_getValue('WI_'+server+'_schutz');
val_zwgarten = !!GM_getValue('WI_'+server+'_zwgarten');
val_drgarten = !!GM_getValue('WI_'+server+'_drgarten');
val_zwregal = !!GM_getValue('WI_'+server+'_zwregal');
val_giess = GM_getValue('WI_'+server+'_giess');
if (!val_giess) {val_giess=5};
val_low = GM_getValue('WI_'+server+'_low');
if (!val_low) {val_low=0};

var Wndw = window;
all = document.getElementsByTagName("body")[0];
fr = top.document.getElementsByTagName("iframe");
function getFrameByName(a,b){
	for (var v=0;v<b.length;v++){
		if (b[v].name == a) return v;
	}
}

switch (page) {
case "main"	  : do_main();break;
case "garten_map" : do_garten_map();break;
case "verkauf_map": do_verkauf_map();break;
}

// ********* main ********************************************************************

function do_main () {

function reg1(){ top.location.href='javascript:updateRack(0)'; }
function reg2(){ top.location.href='javascript:updateRack(1)'; }

canddiv = document.getElementsByTagName("div");
candspan = document.getElementsByTagName("span");
lager_zeit = document.getElementById("lager_zeit");
candimg = document.getElementsByTagName("img");
rackInfo = document.getElementById("rackInfo");
bedientext = document.getElementById("bedientext");

werbediv = top.document.getElementById("upsimtoolbar");
if (werbediv) werbediv.style.display = "none";




if (val_zwgarten || val_drgarten) {
garten1 = top.document.createElement("span");
garten1.innerHTML = '<a href="javascript:waehleGarten(1)"><img border="0" src="http://wurzelgrafik3.de1.cc/pics/popin/map_auto/garten_out.gif"></a>';
garten1.title = "Gehe zu Garten 1";
garten1.setAttribute("style","position:fixed;top:5px;left:0px;width:40px;height:36px;");
all.appendChild(garten1);}

if (val_zwgarten) {
garten2 = top.document.createElement("span");
garten2.innerHTML = '<a href="javascript:waehleGarten(2)"><img border="0" src="http://wurzelgrafik3.de1.cc/pics/popin/map_auto/garten_out.gif"></a>';
garten2.title = "Gehe zu Garten 2";
garten2.setAttribute("style","position:fixed;top:45px;left:0px;width:40px;height:36px;");
all.appendChild(garten2);}

if (val_drgarten) {
garten3 = top.document.createElement("span");
garten3.innerHTML = '<a href="javascript:waehleGarten(3)"><img border="0" src="http://wurzelgrafik3.de1.cc/pics/popin/map_auto/garten_out.gif"></a>';
garten3.title = "Gehe zu Garten 3";
garten3.setAttribute("style","position:fixed;top:85px;left:0px;width:40px;height:36px;");
all.appendChild(garten3);}

if (val_zwregal) {
regal1 = top.document.createElement("span");
regal1.innerHTML = '<img border="0" src="http://wurzelgrafik3.de1.cc/pics/verkauf/regal.jpg">';
regal1.title = "Zeige Regal 1";
regal1.addEventListener("click",reg1,true);
regal1.setAttribute("style","position:fixed;top:130px;left:-30px;width:72px;height:95px");
all.appendChild(regal1);

regal2 = top.document.createElement("span");
regal2.innerHTML = '<img border="0" src="http://wurzelgrafik3.de1.cc/pics/verkauf/regal.jpg">';
regal2.title = "Zeige Regal 2";
regal2.addEventListener("click",reg2,true);
regal2.setAttribute("style","position:fixed;top:230px;left:-30px;width:72px;height:95px");
all.appendChild(regal2);}

// ********* settings ******************************************************************

inp_zwgarten = document.createElement("input");
inp_zwgarten.setAttribute("style","position:absolute;top:500px;left:20px;z-index:1;text-align:center;");
inp_zwgarten.type = "checkbox";
inp_zwgarten.checked = val_zwgarten;
inp_zwgarten.id = "zwgarteninput";
inp_zwgarten.title = "Zweiter Garten";
inp_zwgarten.addEventListener("change",function(){GM_setValue('WI_'+server+'_zwgarten', inp_zwgarten.checked);top.location.reload();},false);
rackInfo.appendChild(inp_zwgarten);

inp_drgarten = document.createElement("input");
inp_drgarten.setAttribute("style","position:absolute;top:500px;left:45px;z-index:1;text-align:center;");
inp_drgarten.type = "checkbox";
inp_drgarten.checked = val_drgarten;
inp_drgarten.id = "drgarteninput";
inp_drgarten.title = "Dritter Garten";
inp_drgarten.addEventListener("change",function(){GM_setValue('WI_'+server+'_drgarten', inp_drgarten.checked);top.location.reload();},false);
rackInfo.appendChild(inp_drgarten);

inp_zwregal = document.createElement("input");
inp_zwregal.setAttribute("style","position:absolute;top:500px;left:70px;z-index:1;text-align:center;");
inp_zwregal.type = "checkbox";
inp_zwregal.checked = val_zwregal;
inp_zwregal.id = "zwregalinput";
inp_zwregal.title = "zweites Regal";
inp_zwregal.addEventListener("change",function(){GM_setValue('WI_'+server+'_zwregal', inp_zwregal.checked);top.location.reload();},false);
rackInfo.appendChild(inp_zwregal);

inp_schutz = document.createElement("input");
inp_schutz.setAttribute("style","position:absolute;top:500px;left:95px;z-index:1;text-align:center;");
inp_schutz.type = "checkbox";
inp_schutz.checked = val_schutz;
inp_schutz.id = "schutzinput";
inp_schutz.title = "Maulwurfschutz";
inp_schutz.addEventListener("change",function(){GM_setValue('WI_'+server+'_schutz', inp_schutz.checked);top.location.reload();},false);
rackInfo.appendChild(inp_schutz);

inp_giess = document.createElement("input");
inp_giess.setAttribute("style","position:absolute;width:21px;top:500px;left:120px;z-index:1;text-align:center;");
inp_giess.value = val_giess;
inp_giess.id = "giessinput";
inp_giess.title = "Giess-Stufe";
inp_giess.addEventListener("change",function(){GM_setValue('WI_'+server+'_giess', inp_giess.value);rdytime();},false);
rackInfo.appendChild(inp_giess);

inp_low = document.createElement("input");
inp_low.setAttribute("style","position:absolute;width:30px;top:500px;left:145px;z-index:1;text-align:center;");
inp_low.value = val_low;
inp_low.id = "lowinput";
inp_low.title = "Knappe Bestände hervorheben ab...";
inp_low.addEventListener("change",function(){GM_setValue('WI_'+server+'_low', inp_low.value);top.location.reload();},false);
rackInfo.appendChild(inp_low);

// ********* lager ******************************************************************

rdytime();
function rdytime(){
	var jetzt = new Date();
	jetzt = (jetzt.getHours()*60 + jetzt.getMinutes())*60+jetzt.getSeconds();
	giess = 1-inp_giess.value*0.01;
	var Ausdruck = /(\d+):(\d+):(\d\d)/;
	Ausdruck.exec(lager_zeit.innerHTML);
	zeit = RegExp.$1 *3600 + RegExp.$2 *60 + RegExp.$3 *1;
	zeit = zeit * giess;
	while (zeit > 86400) { zeit = (zeit - 86400) *giess; }
	zeit = Math.round((zeit+jetzt) % 86400);
	zeitstr = Math.floor(zeit/3600)+':';
	zeit = zeit % 3600;
	neu = Math.floor(zeit/60);
	if (neu<10) {zeitstr += '0'+ neu} else {zeitstr += neu};
	bedientext.innerHTML = ' '+'<font color="blue">'+zeitstr+' Uhr fertig</font>'
}

all.addEventListener("load",function(){
rdytime();
for (var v=14;v<canddiv.length;v++){
a = parseInt(canddiv[v].innerHTML);
if ((!isNaN(a)) && (a<val_low)) {
	canddiv[v].setAttribute("style","position:relative; top:3px;text-decoration:blink;color:red;");
}
}
},true);
//top.document.getElementById("rackItems").addEventListener("click",rdytime,false);

}


// ********* garten_map *****************************************************************

function do_garten_map(){

var jetzt = new Date();
jetzt = Math.round(jetzt.getTime()/1000);

sc = document.getElementsByTagName('script');
sp = sc[0].innerHTML.split("garten_");
//var garten_name = new Array();
var garten_kategorie = new Array();

j=10;
for (var i=1; i<205;i++) {
	j=j+12;
	feld = document.getElementById("f"+i);
	feld.title = '';
//	pos = sp[j-4].search(" = ")+4;
//	garten_name[i] = sp[j-4].slice(pos,sp[j-4].search(";")-1).toLowerCase();
	garten_kategorie[i] = sp[j+1][sp[j+1].search(" = ")+4];
	// u Maulwurf, v Pflanze , z Deko , " leer
	//if (val_schutz && garten_kategorie[i]=="u"){ feld.removeAttribute("onclick");	}

	if (garten_kategorie[i]=="v"){
		dimx = sp[j-8][sp[j-8].search(" = ")+3];
		dimy = sp[j-7][sp[j-7].search(" = ")+3];
		pos = sp[j-2].search(" = ")+3;
		rdy = Math.floor((sp[j-2].slice(pos,pos+10) - jetzt)/60);
		if (rdy>0){
			pos = sp[j].search(" = ")+3;
			m = 1440 - Math.floor((jetzt - sp[j].slice(pos,pos+10))/60);
			if (m>0 && m<rdy) { 
				h = Math.floor(m/60);
				m -= h*60;
				if (m<10) { newstr= h+":0"+m;}
				else {newstr = h+":"+m;};
				feld.title += newstr;
				if (dimx*dimy==1) { feld.innerHTML += newstr;}
			}
		}
	}
}

allbtn = top.document.createElement("button");
allbtn.type = 'button';
allbtn.name = 'plant_all';
allbtn.innerHTML = 'Alles bepflanzen';
allbtn.addEventListener("click",function(){
	for (var i=1;i<205;i++){
		if (garten_kategorie[i]!="u"){
			window.location.href="javascript: parent.cache_me("+i+",1,'')";
		}
	}
},true); 
allbtn.setAttribute("style","position:fixed;top:0px;left:0px;width:100px;height:20px;");
all.appendChild(allbtn);


}

// ********* verkauf_map ********************************************************************

function do_verkauf_map(){

candspan = document.getElementsByTagName("span");

function giess () {
	fr[getFrameByName('garten',fr)].src='garten_map.php?giesse=alles';
}

function giess2 () {
	fr[getFrameByName('garten',fr)].src='garten_map.php?giesse=alles';
}

function ernte() {
	fr[getFrameByName('garten',fr)].src='garten_map.php?ernte=alles';
	window.setTimeout('top.location.href="javascript: updateRack(0, true)"',3000);
}

for (var v=0;v<candspan.length;v++){
if (candspan[v].style.background.search(/kannenzwerg/) != -1) {
	kanne = candspan[v];
	kanne.removeAttribute("onclick");
	kanne.addEventListener('click',giess,true);
}
if (candspan[v].style.background.search(/sensenzwerg/) != -1) {
	sense = candspan[v];
	sense.removeAttribute("onclick");
	sense.addEventListener('click',ernte,true);
}
}
}

})();