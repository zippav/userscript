// ==UserScript==
// @name          DS-Spoo-BBCodes
// @description   Die Staemme BB-Codes by Spoo
// @version       1.32 09:42 08.12.2007
// @namespace     http://none
// @include       http://*.die-staemme.de/*
// @include       http://*.diestaemme.de/*
// @include       http://ch*.ds.ignames.net/*
// @exclude       http://d*.die-staemme.de/help2.php*
// @exclude       http://forum.die-staemme.de/*
// ==/UserScript==

var STBBCver = 1.32;
var DSUnitsNamesArray = new Array("spear", "sword", "axe", "archer", "spy", "light", "marcher", "heavy", "ram", "catapult", "knight", "snob");
var DSUnitsNamesDEArray = new Array("Speerträger", "Schwertkämpfer", "Axtkämpfer", "Bogenschütze", "Späher", "Leichte Kavallerie", "Berittener Bogenschütze", "Schwere Kavallerie","Rammbock", "Katapult", "Paladin","Adelsgeschlecht");
var DSResNamesArray = new Array("holz", "lehm", "eisen", "res","Holz", "Lehm","Eisen","Rohstoffe");
var DSBuildingsNamesArray = new Array("main", "barracks", "stable", "garage", "snob", "smith", "place", "market", "wood", "stone", "iron", "farm", "storage", "hide", "wall","statue","face");
var DSBuildingsNamesDEArray = new Array("Hauptgebäude", "Kaserne", "Stall", "Werkstatt", "Adelshof", "Schmiede", "Versammlungsplatz", "Marktplatz", "Holzfäller", "Lehmgrube", "Eisenmine", "Bauernhof", "Speicher", "Versteck", "Wall","Statue","Arbeiter");
var DSgameon = 0
function BBCode(bbid,bbsrc,bbalt,pre,after){

//eigenschaften
this.bbid=bbid;
this.bbsrc=bbsrc;
this.bbalt=bbalt;
this.pre=pre;
this.after=after;

//methoden
this.showBB=showBB;
this.addAction=addAction;
this.klick=klick;

};

function showBB(){
	var zeile =   '<img id="'+this.bbid+'" src="'+this.bbsrc+'" alt="'+this.bbalt+'"></img>';
   return zeile;
};

function addAction(){
document.getElementById(''+this.bbid).addEventListener('click', buttonClick, false);
document.getElementById(''+this.bbid).addEventListener('mouseover', showDesc, false);
document.getElementById(''+this.bbid).addEventListener('mouseout', clearDesc, false);
};

function klick(e){
if (e.target.id==this.bbid) insert(this.pre,this.after);
};

kasten=getTextArea();

if (kasten){
//bilder 

seppng = 'data:image/x-png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAUCAYAAACu0kzYAAAAG0lEQVR42mNkgIKjh3b8t7bzYITxGUclhqsEAJ5oUBWTXMvMAAAAAElFTkSuQmCC'
dorfpng = 'data:image/x-png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAADAFBMVEUBAAAAAAD/y5nMmGZmMgCZZTMyAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7QYkIAAAAAXRSTlMAQObYZgAAAIJJREFUeNqt0EEWgyAMBNAZoN7/vuGRZhKRRdtdZWH8jglIfLn4F2x1b7CD3aNqqnxuzMdAZ6xZWN+2pXeplEXVV2FqYlRKomUBo6ZQsnujkpqxcFTJMfcuo4HThpIDsz8Ie/mNl1udbPCePjTVQcPlfpD8wGThBT/HzFYRh9B+/c83hpdHFYJkVRIAAAAASUVORK5CYII'
fettpng = 'data:image/x-png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAABVlYYBAAADAFBMVEUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACnEzGyAAAAAXRSTlMAQObYZgAAACZJREFUeNpjZMAGGGkqCpP7j6qWESTCCBcmT5QW5uJwL13DDB0AAILCDxWXd53DAAAAAElFTkSuQmCC'
kursivpng = 'data:image/x-png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAABVlYYBAAADAFBMVEUBAACAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTJ9gpAAAAAXRSTlMAQObYZgAAAD5JREFUeNpjZMAGGGkuygQi/mGoZWL4/x9DLSMjTCWqCXClCFFkpQhRZKVwURSlcFEUpVBRsFuxmUvnMEMGAL+iDRXNRA1bAAAAAElFTkSuQmCC'
unterpng = 'data:image/x-png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAABVlYYBAAADAFBMVEUBAACAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTJ9gpAAAAAXRSTlMAQObYZgAAADFJREFUeNpjZMAGGGkqygTE/8AEilomEJ8JJjhQov//MzKii4JdDBck6DcGJNW0CkkAvRoTFfjMvfoAAAAASUVORK5CYII'
codepng = 'data:image/x-png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAMAAAAcqPc3AAADAFBMVEUBAACVlJJGQ0Bua2mioZ/Kycjk5OSIhoVTUE68vLs4NTPX19Z7eXfy8vGvrq1gXlwrKCUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2jb2IAAAAAXRSTlMAQObYZgAAAJ9JREFUeNqlkd0OgyAMhQ9MYegQ3/8pFXTi/1hIJjVbvBgXBL7T0tPC8H2xzykr0SIvsPSUG7a3YAbNKb7GMAbRe8rzEuMQxYOHnevwslDY7X7wOrXSXHNAFOgW8Mqt1H/FMfdRJFyqkK8k+jnlBrOYcrgKwUx7XdeMd3gZLlaT+PdcVhdbJnVv2m7IHnhOlBdi6aJI+LmrdM6//us//gLxGjoX82hK0AAAAABJRU5ErkJggg'
bildpng = 'data:image/x-png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAABVlYYBAAADAFBMVEUBAADAwMCAgACAgID//wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwHuUdAAAAAXRSTlMAQObYZgAAAGZJREFUeNql0OEOgCAIRtEPrd7/eS0hMFOL1tZSf53dMZXwtOijLldKVZmk73CqVJCIHOje0oaJXRtUxbWsE8i1x5ixJbC/A2VEDpBLa5jjilmGVtFW4dbCynKU24ut7Jzefuffr+9mBlQVRVsI8gAAAABJRU5ErkJggg'
zitatpng = 'data:image/x-png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAABVlYYBAAADAFBMVEUBAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIr2rWAAAAAXRSTlMAQObYZgAAAFBJREFUeNqVkEEKACAIBNP/v7lNMlMqwYQ6TIPaUnsVpfR4waJyddaDQI11BsFdWL9IU5cgXsmdg1HvW3X9b053JrqgUeWQhUMOz8x+Ur9rAGiVRRVYsTjzAAAAAElFTkSuQmCC'
linkpng = 'data:image/x-png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAABVlYYBAAADAFBMVEUBAAAAAICQnbIAgIDB0u7AwMCAgIAAgAD///8AAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADB5EUzAAAAAXRSTlMAQObYZgAAAI9JREFUeNqN0dEOwyAIBdArKFn9/2+1m4pO283WpGnqg5ITBIkGV8vcqGx7nFWgVMEcziqkHF0LBpueyVVtiwtqPJSzogqojORNP/16pCKTYmMQzKS9JpDlrOm1K73d0Q2+7ue6tC2MKfy6JFamoqwujIl9cv+xUuefFso2AS7bQuE+t/FF3ca9vZ/e8PAvvpncPBXaitTcAAAAAElFTkSuQmCC'
spielerpng = 'data:image/x-png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAADAFBMVEUBAAB/XCRGRkZIR0ZNTU1KTlBIVV9WT0FUUk1TU1NRVVlUWVxaWlpbYWZoXUljY2NsbGxpbHBzc3N8enZ8fHxUepVvf4wsjtgukNkwj9g3ldsokuQim/01meQ0nvI8pPFcgp5cl7Rshph2h5Vri6NwmrF5o6xFmtpUlsVVntREn+FUoNdKo+VFp/FYqeZSrPNkn8tmo9FxqtVgrOZos+Zhu/14uul0vvR8we58x/uOWQCSXQCVYgCZZQCcaQGcbAuYahOgbQGlcgClcwypdACpcw2tegCkdRGrehKqfh2xfQC9eQCieCanfCmrfSSifTOleziZfUWJfmeCfnbIegHVfQCvhR+0gQC5iAu0hxm8kBmvhiOuiTe6iym7jTS+lia+mjmSiHOWjHijilqqjla0kEm6mVemj2GokWe8oGDBlB3YhwTWixPekAfdmRjKjiXGmyzHnjLInzPPmT/QljjRpB/HoDXFoznLojLKojjPqDbTqjXTrDjkhwDilAjtmxT/khzhnS7/lSb8mTTjpBzlpibiozvuvjX6pz3Lm0rGmVDQmkPLq0bEoFrQoErIpmTGqHrYp2vVt33inVXlqEf8pUX4rVr9s0v/uFL3tGr+zQX4xRT/0gn+0hL4zCn+1yX+2Tj/4yv/4T3hwUPv01D/xF372kv+31Dn1Gf/z2n/2HH+5Ub+5Vn+6Gb/6nj/8W7/83qCgoKEiIyIhoSKioqBkZ2NkZSUkY2SkpKcmZGcnJyPn62Un6iZoKaTqbq/qYm0rJiioqKqqqquta+ns7K7tam1ubmLsc2Xs8iFveemucWzvMK8ybaGw+qFx/qay+6XzPua0PumxdWhze6m1vy82+m13Pyr4f+64/7DqILLsYHFs5fRuo3UvpPBtaHPxo/WwZrZw5vGyb/Zx6Xm0qni07jn2b7/94n+9pT//6vDxMXR0tLS2dTE1uPC3vTW3OHG5/3P9f/T7P3W9v7n28bt5dHy4sf26tT779rh7vjp9/z48ub+++v1/P79/f5WTj/5Dsr5AAAAAXRSTlMAQObYZgAAASNJREFUeNpjZMACGBHMQ/8Z7NEEN0ZfTfjDyLcFSXCX13cHGaWfbCwHjiAEeV6Ff+RgEJFhYrq6ESa4I+BKAisj62dGhv9Sa2CCW6KirzAyi048+f/HkalwlWHRVxgYstn+//9wcTLCzO4tn9M4GH59Y9yxGi64ZY6MEQvD399M/AenINzJ4yFuAuRxr1qN5KR3zOc26zKw/C29Dxfkv8dj++RoGQMD+0Gum1DBXcbMT//LaOwPqdJNm+/8DCLI/5BJ7QbDE7d9166E/mLWAQvu8Hqjs4uFQYLp4qW3fixMWmBB/ocMWtdeMDD8zIh9FcLiBNEusjt+gRLD858MDJsEXWOmm0LMFOCSWiTzD6h2lXvCdbiTdsUIsX76BzRokhOICwAtF2MVO2NMpAAAAABJRU5ErkJggg'
stammpng = 'data:image/x-png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAADAFBMVEUBAAAAAACYMgD//svMAAD/y5kiIiLd3d27u7tVVVUAEL8AgHcANGAA8asAyaAAAxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOofZtAAAAAXRSTlMAQObYZgAAAJ5JREFUeNptkFkSwyAMQ72kvf9122KrsiGh0wkfYN7Im1Rujp6B1ZW/0PgygiAvSKYk/AClLmiq2AUp1mIeuyxZNpwKEe8gCrq6DKpiMthbq+KBYV2BOA4EoeFRPaNYiFulN7TBb5TSseAzcc20IKd09u50Msno7n/wM+dkuOCR9sq5Zu/Sc6qMPHfXbeWCJcW0TnXk9tOnddE+3zr/BT5FUB91AT+TAAAAAElFTkSuQmCC'


var butt = document.createElement("DIV");
var BBCodes = new Array(); 
BBCodes[0] = new BBCode('fett',fettpng,'Fett','[b]','[/b]');
BBCodes[1] = new BBCode('kursiv',kursivpng,'Kursiv','[i]','[/i]');
BBCodes[2] = new BBCode('unterstrichen',unterpng,'Unterstrichen','[u]','[/u]');
BBCodes[3] = new BBCode('sep',seppng,' ','','');
BBCodes[4] = new BBCode('code',codepng,'Code','[code]','[/code]');
BBCodes[5] = new BBCode('bild',bildpng,'Bild','[img]','[/img]');
BBCodes[6] = new BBCode('quote',zitatpng,'Zitat','[quote]','[/quote]');
BBCodes[7] = new BBCode('link',linkpng,'Link','[url]','[/url]');
BBCodes[8] = new BBCode('sep',seppng,' ','','');
BBCodes[9] = new BBCode('dorf',dorfpng,'Dorf','[village](',')[/village]');
BBCodes[10] = new BBCode('spieler',spielerpng,'Spieler','[player]','[/player]');
BBCodes[11] = new BBCode('stamm',stammpng,'Stamm','[ally]','[/ally]');
butt.innerHTML = '<div>';
butt.innerHTML += '<input type="text" id="bbdesc" disabled size="22" style="color:#000000; font-weight:bold"></input>';
butt.innerHTML += "<span style='font-size:6pt;'><b> v."+STBBCver+" by Dr_Spoo</b></span>";

butt.innerHTML += '</div><div>';
for (var i=0; i< 17;i++){
    if(i<16){
    BBCodes[12+i] = new BBCode(DSBuildingsNamesDEArray[i],"/graphic/buildings/"+DSBuildingsNamesArray[i]+".png",DSBuildingsNamesDEArray[i],'[img]/graphic/buildings/'+DSBuildingsNamesArray[i]+'.png[/img]'+DSBuildingsNamesDEArray[i]+' ','');
    }else{
    BBCodes[12+i] = new BBCode(DSBuildingsNamesDEArray[i],"/graphic/"+DSBuildingsNamesArray[i]+".png",DSBuildingsNamesDEArray[i],'[img]/graphic/'+DSBuildingsNamesArray[i]+'.png[/img]'+DSBuildingsNamesDEArray[i]+' ','');
    }
    butt.innerHTML += BBCodes[12+i].showBB();
    butt.innerHTML += " ";    
  if (i==3||i==7||i==10||i==12)butt.innerHTML += BBCodes[8].showBB();     

}

butt.innerHTML += '</div><div>';
for (var i=0; i< 12;i++){
    BBCodes[29+i] = new BBCode(DSUnitsNamesArray[i],"/graphic/unit/unit_"+DSUnitsNamesArray[i]+".png",DSUnitsNamesDEArray[i],'[img]/graphic/unit/unit_'+DSUnitsNamesArray[i]+'.png[/img][b] ',' [/b]'+DSUnitsNamesDEArray[i]);
    butt.innerHTML += BBCodes[29+i].showBB();
    butt.innerHTML += " ";    
  if (i==3||i==7||i==9)butt.innerHTML += BBCodes[8].showBB();     

}
butt.innerHTML += BBCodes[8].showBB(); 
for (var i=0; i< 4;i++){
    BBCodes[41+i] = new BBCode(DSResNamesArray[i],"/graphic/"+DSResNamesArray[i]+".png",DSResNamesArray[4+i],'[img]/graphic/'+DSResNamesArray[i]+'.png[/img][b] ',' [/b]'+DSResNamesArray[4+i]);
    butt.innerHTML += BBCodes[41+i].showBB();
    butt.innerHTML += " ";     

}

butt.innerHTML += '</div><div>';
for (var i=0; i< 12;i++){butt.innerHTML += BBCodes[i].showBB();}
butt.innerHTML += '<select name="Farbe" id="farbe" alt="Schriftfarbe">'+
 '<option value="0" selected="selected"   >Farben</option>'+
 '<option style="color: black; background-color: #FAFAFA" value="black">Standard</option>'+
 '<option style="color: white; background-color: #FAFAFA" value="white"  >Weiss</option>'+
 '<option style="color: yellow; background-color: #FAFAFA" value="yellow"  >gelb</option>'+
 '<option style="color: orange; background-color: #FAFAFA" value="orange"  >orange</option>'+
 '<option style="color: red; background-color: #FAFAFA" value="red"  >rot</option>'+
 '<option style="color: indigo; background-color: #FAFAFA" value="indigo"  >indigo</option>'+
 '<option style="color: violet; background-color: #FAFAFA" value="violet"  >violett</option>'+
 '<option style="color: blue; background-color: #FAFAFA" value="blue"  >blau</option>'+
 '<option style="color: darkblue; background-color: #FAFAFA" value="darkblue"  >dunkelblau</option>'+
 '<option style="color: cyan; background-color: #FAFAFA" value="cyan"  >cyan</option>'+
 '<option style="color: green; background-color: #FAFAFA" value="green"  >gruen</option>'+
 '<option style="color: olive; background-color: #FAFAFA" value="olive"  >olive</option>'+
 '<option style="color: brown; background-color: #FAFAFA" value="brown"  >braun</option>'+
 '</select>';

butt.innerHTML += '<select name="Schriftgr&ouml;sse" id="gross" alt="Schriftgr&ouml;sse">'+
 '<option value="0" selected="selected"   >Schrift</option>'+
 '<option value="7"  >klein 7</option>'+
 '<option value="9"  >klein 9</option>'+
 '<option value="12" >Normal 12</option>'+
 '<option value="18" >gross 18</option>'+
 '<option value="24" >gross 24</option>'+
 '</select>';

butt.innerHTML += '</div>';
kasten.parentNode.insertBefore(butt,kasten);

for (var i=0; i< BBCodes.length;i++){
BBCodes[i].addAction();
}
document.getElementById('farbe').addEventListener('change', farbeChange, false);
document.getElementById('farbe').addEventListener('mouseover', showDesc, false);
document.getElementById('farbe').addEventListener('mouseout', clearDesc, false);
document.getElementById('gross').addEventListener('change', grossChange, false);
document.getElementById('gross').addEventListener('mouseover', showDesc, false);
document.getElementById('gross').addEventListener('mouseout', clearDesc, false);
}


function buttonClick(e) {
for (var i=0; i< BBCodes.length;i++){
BBCodes[i].klick(e);
}
}

function showDesc(e) {
if (e.target.alt)document.getElementById('bbdesc').value=e.target.alt;
else document.getElementById('bbdesc').value=e.target.name;

}


function clearDesc(e) {
document.getElementById('bbdesc').value='';
}


function getTextArea(){

var kasten;
kasten = document.getElementsByName("message")[0];

if (!kasten){
kasten = document.getElementsByName("text")[0];
}

if (!kasten){
kasten = document.getElementsByName("intern")[0];
}

if (!kasten){
kasten = document.getElementsByName("personal_text")[0];
}

if (!kasten){
kasten = document.getElementsByName("desc_text")[0];
}
if (!kasten){
kasten = document.getElementsByName("memo")[0];
}

return kasten;

}


function farbeChange(e){
	var farbe = document.getElementById("farbe");
	var efarbe = farbe.options[farbe.selectedIndex].value;
	insert("[color="+efarbe+"]","[/color]");
  document.getElementById('farbe').value = "0";
}

function grossChange(e){
	var size = document.getElementById("gross");
	var esize = size.options[size.selectedIndex].value;
	insert("[size="+esize+"]","[/size]");
  document.getElementById('gross').value = "0";
}



function insert(aTag, eTag) {


var input=getTextArea();
  input.focus();
if(typeof input.selectionStart != 'undefined')
  {
    // Einf&uuml;gen des Formatierungscodes //
    var start = input.selectionStart;
    var end = input.selectionEnd;
    var insText = input.value.substring(start, end);
    input.value = input.value.substr(0, start) + aTag + insText + eTag + input.value.substr(end);
    // Anpassen der Cursorposition //
    var pos;
    if (insText.length == 0) {
      pos = start + aTag.length;
    } else {
      pos = start + aTag.length + insText.length + eTag.length;
    }
    input.selectionStart = pos;
    input.selectionEnd = pos;
  }}
