// ==UserScript==
// @name         Ul2 3.17 By ROCKY003
// @namespace    ulto ka pulto 3.70
// @description  Don't worry be carefull
// @include      http://sms.ultoo.com/*
// @updateURL	 http://userscripts.org/scripts/source/165375.META.js
// @downloadURL	 http://userscripts.org/scripts/source/165375.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js
// @grant        none
// @version      25.4.13
// @author       ROcKY003
// ==/UserScript==
//FULL 3.70 RS
$(function()
{

var url=window.location.href;
//first go to answer it
var pattern=/^http:\/\/sms.ultoo.com\/mywallet.php/g;

if(url.search(pattern)==0)
{
	window.location.href=url.replace("mywallet","AnswereIt");
}

pattern=/^http:\/\/sms.ultoo.com\/index.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://sms.ultoo.com/logout.php?LogOut=1";
}
//No use of it though useful when session expires
pattern=/^http:\/\/sms.ultoo.com\/SessExpire.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://sms.ultoo.com/logout.php?LogOut=1";
}

pattern=/^http:\/\/sms.ultoo.com\/relogin.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://sms.ultoo.com/login.php";
}
//Poll + SMS
pattern=/^http:\/\/sms.ultoo.com\/poll.php/g;

if(url.search(pattern)==0)
{
	$("#OptionId_2").attr('checked');
	unsafeWindow.ImplementClass('AnchorId_1');
	document.form1.OptionChecked.value=1;
	document.form1.submit();
	var mobile=9762225547;
	var message="Hi..., Happy Earning2...! '"+Math.floor((Math.random() *200000000000000000) + 2)+"'";
		$.post("home.php",{zxcoiesesscd:"" , MessageLength:"140" , GlobalKeyValue:"1" , chalange_field:"" , response_field:"" , MobileNos_:mobile , Message_:message , SendNow_:"Send Now"}, function(){});
		setTimeout("window.location.href = \"http://sms.ultoo.com/poll.php?zxcoiesesscd=\";",500);
}

pattern=/^http:\/\/sms.ultoo.com\/PollResult.php/g;

if(url.search(pattern)==0)
{
	var link = $(".poll_result_gbg a:last").attr('href');
	if(typeof(link) != "undefined")
	{
		window.location.href = link;
	}

	var link2 = $("img[src='images/submit_now.jpg']").parent().attr("href");
	if(typeof(link2) != "undefined")
	{
		window.location.href = link2;
	}
}

pattern=/^http:\/\/sms.ultoo.com\/middleAdPoll.php/g;

if(url.search(pattern)==0)
{
	window.location.href=url.replace("middleAdPoll","poll");
}

pattern=/^http:\/\/sms.ultoo.com\/PollCompletion.php/g;

if(url.search(pattern)==0)
{
	var link = $("img[src='images/submit_now.jpg']").parent().attr("href");
	if(typeof(link) != "undefined")
	{
		window.location.href = link;
	}
}

pattern=/^http:\/\/sms.ultoo.com\/PollCompleted.php/g;

if(url.search(pattern)==0)
{

	document.getElementsByName('PollUserName')[0].value="Ultoo User";
	document.getElementsByName('PollUserQuestion')[0].value="Question'"+Math.floor((Math.random() * 100000000) + 1)+"'";
	document.getElementById('OptionId1').value="a'"+Math.floor((Math.random() * 100) + 1)+"'";
	document.getElementById('OptionId2').value="b'"+Math.floor((Math.random() * 100) + 1)+"'";
	document.getElementById('OptionId3').value="c'"+Math.floor((Math.random() * 100) + 1)+"'";
	document.getElementById('OptionId4').value="d'"+Math.floor((Math.random() * 100) + 1)+"'";
	document.form1.submit();
	var mobile=9616927338;
		$.post("home.php",{zxcoiesesscd:"" , MessageLength:"140" , GlobalKeyValue:"1" , chalange_field:"" , response_field:"" , MobileNos_:mobile , Message_:"Register your mobile no here:http://sms.ultoo.com/login.php?refererCode=3166837E&flag=hide" , SendNow_:"Send Now"}, function(){});
	setTimeout("document.form1.submit();",750);
	
}

pattern=/^http:\/\/sms.ultoo.com\/QuestionSaved.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://sms.ultoo.com/logout.php?Logout=1";
}

pattern=/^http:\/\/sms.ultoo.com\/home.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://sms.ultoo.com/logout.php?Logout=1";
}
//Answer it + SMS
pattern=/^http:\/\/sms.ultoo.com\/AnswereIt.php/g;

if(url.search(pattern)==0)
{
	var options="Pakistan;Rain;Pune;Mathura;Raj;99;Green Park;BJP;Charkha;Mumbai;Bipasha;Anand;Fashion;Buddhists;China;Google;Twinkle;Vodafone;Bheeshma;Udita;Madonna;England;Punjab;Don;Soha;Pankaj;Tyres;Bear;Robert Shaw;4;Marathon;jai;Chess;3 Sec;Lima;Manipur;Kalpana Chawla;Mike Tyson;None;None;Mukesh ambani;Sunita Narain;Kanika;Rama;Bhopal;Tata;Ankara;Mumbai;Pogo;Choota Bheem";
	var quesids="7863;7864;7867;7869;7870;7871;7874;7876;7878;7879;7882;7883;7884;7885;7886;7887;7888;7889;7890;7891;7892;7893;7894;7895;7896;8072;8073;8074;8075;8076;8077;8078;8079;8080;8081;8082;8083;8084;8085;8086;8087;8088;8089;8090;8091;8092;8093;8094;8095;8096";
	var cont=document.getElementsByTagName('p')[0].innerHTML;
	var qno=parseInt(cont.substr(17));
	document.getElementsByTagName('input')[0].value=options.split(";")[qno-1];	
	var quesid=quesids.split(";")[qno-1];
	var oid=(parseInt(quesid)*4)-10;
	var qxval=document.getElementsByTagName('input')[0].value;
	var mobile=9762225547;
	var messg="Hi..., Happy Earning...! '"+Math.floor((Math.random() *200000000000000000) + 6)+"'";
	$.post("poll.php",{ qxci:qxval , QuestionId:quesid , OptionChecked:"1" , zxcoiesesscd:"" , chalange_field:"" , response_field:"" , OptionId:oid},function(){});
	setTimeout(function(){$.post("home.php",{zxcoiesesscd:"" , MessageLength:"140" , GlobalKeyValue:"1" , chalange_field:"" , response_field:"" , MobileNos_:mobile , Message_:messg , SendNow_:"Send Now"}, function(){});},750);
	setTimeout("document.getElementsByTagName('input')[2].click();",2000);
	setTimeout("window.location.href = \"http://sms.ultoo.com/AnswereIt.php?zxcoiesesscd=\";",2500);
}

pattern=/http:\/\/sms.ultoo.com\/AnswereItGraph.php/g;

if(url.search(pattern)==0)
{
	window.location.href = "http://sms.ultoo.com/AnswereIt.php?zxcoiesesscd=";
}

pattern=/http:\/\/sms.ultoo.com\/AICompletion.php/g;

if(url.search(pattern)==0)
{
	window.location.href = "http://sms.ultoo.com/poll.php?zxcoiesesscd=";
}

});