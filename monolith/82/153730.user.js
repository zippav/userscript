// ==UserScript==
// @name			Facebook Auto Like V1-Beta By GameHackerPM
// @namespace			FALV212
// @version			0.212
// @copyright			GameHackerPM
// @description			It's Good Script that will make you able to Auto like just 10 Likes per 1 click.. That will make you more safe to avoid get block. (Auto Likes, Like Status, Confirm All, Ignore All, And more soon..
// @author			GameHackerPM (http://userscripts.org/users/477924)
// @icon			https://lh4.googleusercontent.com/-2A1Jpr4-1qM/TxPUbMq8IQI/AAAAAAAAAIU/_50N6LEgkxE/h120/FB.png
// @include			http://www.facebook.com/*
// @include			https://www.facebook.com/*
// @exclude			http://developers.facebook.com/*
// @exclude			https://developers.facebook.com/*
// Copyright (c) 2012, GameHackerPM
// Auto Like/Unlike, And Another Function.
// ==/UserScript==

// ==Profile==
body = document.body;
if(body != null) {
	div = document.createElement("div");
	div.setAttribute('id','like1');
	div.style.position = "fixed";
	div.style.display = "block";
	div.style.width = "125px"; 
	div.style.opacity = 1.00;
	div.style.bottom = "+102px";
	div.style.left = "+6px";
	div.style.backgroundColor = "#CCD3E3";
	div.style.border = "1px solid #555";
	div.style.padding = "2px";
	div.innerHTML = "<div style='background-color: #2E5392; color: #FFFFFF; border: 1px solid #333333;'><center><a style='color: #FFFFFF;' <a href='https://www.facebook.com/GameHacker.PM' title='Click to See GameHackerPM on Facebook'> GameHackerPM </a></div>"
	div2 = document.createElement("div");
	div2.setAttribute('id','spoiler');
	div2.style.position = "fixed";
    div2.style.width = "125px";
	div2.style.opacity = 0.90;
	div2.style.bottom = "+22px";
	div2.style.left = "+6px";
	div2.style.backgroundColor = "#CCD3E3";
	div2.style.border = "1px solid #555";
	div2.style.padding = "2px";
	div2.innerHTML = "<div style='background-color: #FFFFFF; color: #FF0000; border: 1px solid #333333;'><a style='color: #FFFFFF;' onclick='spoiler()' title='Click to Hidden Autolike'>&laquo;</a>&nbsp;<a href='http://fbblog-jokorowo.blogspot.com/' target='_blank' title='Autolike Version 0.212 by GameHackerPM Kalemmm Corporation | Copyright 2012 | All Right Reserved' style='color: #FFFFFF;'>Autolike V 0.212</a> | <a style='color: #FF0000;' onclick='thanks()'><center>BACA DULU !!!</center></a></div>"
	
	body.appendChild(div);
	body.appendChild(div2);
	
	unsafeWindow.thanks = function() {
	alert("GameHackerPM First version ;) Copyright (c) 2012");
	}
	unsafeWindow.spoiler = function() {
		var i;
	for(i=1;i<=20;i++) {
		var x=document.getElementById('like'+i);
		if (x.style.display=="none") {
		x.style.display="block";
		div2.style.width = "125px";
		div2.innerHTML = "<div style='background-color: #FFFFFF; color: #FF0000; border: 1px solid #333333;'><a style='color: #FFFFFF;' onclick='spoiler()' title='Click to Hidden Autolike'>&laquo;</a>&nbsp;<a style='color: #FFFFFF;' href='http://fbblog-jokorowo.blogspot.com/' target='_blank' title='Autolike Version 0.212 by GameHackerPM Kalemmm Corporation | Copyright 2012 | All Right Reserved'>Autolike V 0.212</a> | <a style='color: #FF0000;' onclick='thanks()'><center>BACA DULU !!!<center/></a></div>"
		}
		else {
			x.style.display="none";
			div2.style.width = "7px";
			div2.innerHTML = "<a onclick='spoiler()' title='Click to Show Autolike'>&raquo;</a>"
		}
	}
	};
}

// ==Like All==
body = document.body;
if(body != null) {
	div = document.createElement("div");
	div.setAttribute('id','like2');
	div.style.position = "fixed";
	div.style.display = "block";
	div.style.width = "125px"; 
	div.style.opacity = 0.90;
	div.style.bottom = "+82px";
	div.style.left = "+6px";
	div.style.backgroundColor = "#eceff5";
	div.style.border = "1px solid #94a3c4";
	div.style.padding = "2px";
	div.innerHTML = "<a style='font-weight:bold;color:#000000' onclick='AutoLike()'><center>Like 10 Status</center></a>"
	body.appendChild(div);
	unsafeWindow.AutoLike = function() {
		var BounceCounterLike=0;
		var Counter = 0;
		var prepare = document.getElementsByTagName("span");
		var buttons = new Array();
		
		for (var i = 0; i < prepare.length; i++)
			if(prepare[i].getAttribute("id")!=null&&prepare[i].getAttribute("id").indexOf(".reactRoot")>=0&&(prepare[i].innerHTML=="Me gusta"||prepare[i].innerHTML=="Like"||prepare[i].innerHTML=="Suka"||prepare[i].innerHTML=="Been"||prepare[i].innerHTML==""||prepare[i].innerHTML=="Seneng"||prepare[i].innerHTML=="Jaime")) {
				buttons[Counter] = prepare[i];
				Counter++;
			}
		
		function check_link(linknumber) {
			buttons[linknumber].click();
			var message = "<a style='font-weight:bold;color:#3B5998' onclick='Autolike()'><center>Like Status: "+ (linknumber + 1) +"/"+ 10 +"</center></a>";
			document.getElementById('like2').innerHTML = message;
			};
		
		function like_timer(timex) {
			window.setTimeout(bouncer_like,timex);
		};
		
		function check_warning() {
			var warning = document.getElementsByTagName("label");
			var checkwarning = false;
			
			for(var i = 0; i < warning.length; i++) {
				var myClass = warning[i].getAttribute("class");
				if(myClass!=null&&myClass.indexOf("uiButton uiButtonLarge uiButtonConfirm")>=0) {
					alert("Warning from Facebook");
					checkwarning = true;
				}
			}
			
			if(!checkwarning) like_timer(0);
		};
		
		function warning_timer(timex) {
			window.setTimeout(check_warning,timex);
		};
		
		function bouncer_like() {
			if ( BounceCounterLike < 10 ) {
				check_link(BounceCounterLike);
				warning_timer(0);
				BounceCounterLike++;
			}
		};
		
		bouncer_like();

		};
	}

// ==Like 10 Comments==
body = document.body;
if(body != null) {div = document.createElement("div");div.setAttribute('id','like3');
div.style.position = "fixed";
	div.style.display = "block";
	div.style.width = "125px"; 
	div.style.opacity = 0.90;
	div.style.bottom = "+62px";
	div.style.left = "+6px";
	div.style.backgroundColor = "#eceff5";
	div.style.border = "1px solid #94a3c4";
	div.style.padding = "2px";
div.innerHTML = "<img src='https://lh4.googleusercontent.com/-D1HYuLwPnNQ/TxPK6cm_THI/AAAAAAAAAIE/ynATGaxGbv0/s16/Facebook%252520Like%252520Small.jpg' width='16' height='14' align='absmiddle' />&nbsp;&nbsp; <a onclick='LikeComments()'>Like 10 Comments</a>"
body.appendChild(div);
	unsafeWindow.LikeComments = function() {
		var BounceCounterLike=0;
		var Counter = 0;
		var prepare = document.getElementsByTagName("a");
		var buttons = new Array();
		
		for (var i = 0; i < prepare.length; i++)
			if(prepare[i].getAttribute("data-ft")!=null&&(prepare[i].getAttribute("title")=="Me gusta este comentario"||prepare[i].getAttribute("title")=="Like this comment"||prepare[i].getAttribute("title")=="Suka komentar ini"||prepare[i].getAttribute("title")=="Nyenengi tanggapan iki"||prepare[i].getAttribute("title")==" "||prepare[i].getAttribute("title")=="Jaime ce commentaire"||prepare[i].getAttribute("title")=="Bu yorumu been")) {
				buttons[Counter] = prepare[i];
				Counter++;
			}
		function check_link(linknumber) {
			buttons[linknumber].click();
			var message = "<a style='font-weight:bold;color:#3B5998' onclick='Autolike()'><center>Like Comments: "+ (linknumber + 1) +"/"+ 10 +"</center></a>";
			document.getElementById('like3').innerHTML = message;
			};
		function like_timer(timex) {
			window.setTimeout(bouncer_like,timex);
		};
		function check_warning() {
			var warning = document.getElementsByTagName("label");
			var checkwarning = false;
			for(var i = 0; i < warning.length; i++) {
				var myClass = warning[i].getAttribute("class");
				if(myClass!=null&&myClass.indexOf("uiButton uiButtonLarge uiButtonConfirm")>=0) {
					alert("Warning from Facebook");
					checkwarning = true;
					}
				}
			if(!checkwarning) like_timer(0);
		};
		function warning_timer(timex) {
			window.setTimeout(check_warning,timex);
		};
		function bouncer_like() {
			if ( BounceCounterLike < 10 ) {
				check_link(BounceCounterLike);
				warning_timer(0);
				BounceCounterLike++;
			}
		};
		bouncer_like();
		void(0);
	};
}


// ==Confirm All dan UnConfirm All==
body = document.body;
if(body != null) {
	div = document.createElement("div");
	div.setAttribute('id','like4');
	div.style.position = "fixed";
	div.style.display = "block"; 
	div.style.width = "125px";
	div.style.opacity = 0.90;
	div.style.bottom = "+42px";
	div.style.left = "+6px";
	div.style.backgroundColor = "#eceff5";
	div.style.border = "1px solid #94a3c4";
	div.style.padding = "2px";
	div.innerHTML = "<a onclick='OtomatisConfirm();' >Confirm All</a>&nbsp;|&nbsp;<a onclick='OtomatisAbaikan();' >Unconfirm All</a>"
	
	body.appendChild(div);
	function suspend(milliSeconds){
	var startTime = new Date().getTime(); 
	while (new Date().getTime() < startTime + milliSeconds); 
}
	unsafeWindow.OtomatisConfirm = function() {
		var x=document.getElementsByName("actions[accept]"); for (i=0;i<x.length;i++) { x[i].click();}
		};
		
	unsafeWindow.OtomatisAbaikan = function() {
			var x=document.getElementsByName("actions[hide]"); for (i=0;i<x.length;i++) { x[i].click();}
			};
}
//special thanks to GameHackerPM