﻿// ==UserScript==
// @name           Google Rapidshare Search
// @namespace      www.google.com
// @include        http://www.google.*
// ==/UserScript==

// Ali Rıza ÜNEŞ (ali@arunes.com)

// rapidshare.com'da arama yapmak istiyorsanız değerini true yapınız.
// change value to true if you want to search rapidshare.com
rsCom = true;

// scriptin rapidshare.de'da arama yapmasını istiyorsanız değerini true yapınız.
// change value to true if you want to search rapidshare.de
rsDe  = false;

// aşağıdaki kodları değiştirmeyiniz
// do not change codes below
arama = "";
if(rsCom){arama+=" intext:rapidshare.com/files";}
if(rsDe) {arama+=" intext:rapidshare.de/files";}
sBtn = document.getElementsByName("btnI")[0]; sBtn.type = "button"; sBtn.value = "Search Rapidshare";
sBtn.setAttribute("onClick", "if(document.getElementsByName('q')[0].value!=''){document.getElementsByName('q')[0].value+='"+ arama +"';document.forms.f.submit();}");