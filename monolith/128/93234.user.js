// ==UserScript==
// @name           MegaUpload Wait Skip
// @namespace      http://www.sphinxgaming.com/
// @description    Skip megaupload wait screen
// @include        *megaupload.com/*d*
// ==/UserScript==
var version = "1.0";

//var downloadlink = document.getElementById('downloadlink');
//downloadlink = downloadlink;
//downloadlink = downloadlink.childNodes[0];
//downloadlink = downloadlink.href;
//window.location.replace(downloadlink);

document.getElementById('downloadlink').style.display = '';
document.getElementById('downloadcounter').style.display = 'none';
window.count = 0;