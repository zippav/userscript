// ==UserScript==
// @name		vijay's profile link in Orkut Pages
// @author		vijay
// @description		puts a  link of vijay's profile in your orkut pages.
// @include	 	http://www.orkut.*
// ==/UserScript==

	var td=document.getElementsByTagName("ul")[1];
	td.innerHTML+="<li>&nbsp;|&nbsp;</li><li><a href='http://www.orkut.co.in/Main#Profile.aspx?uid=17565152988813264991'>Vijay Pal</a></li>";