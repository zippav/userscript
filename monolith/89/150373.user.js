// ==UserScript== 
// @name        Eintracht Frankfurt add delay to menu
// @namespace   eintracht_frankfurt_menu_delay
// @description The script add a 500 millisecond delay to the mouseover main menu on www.eintracht.de 
// @include     http://www.eintracht.de/* 
// @version     1.0
// ==/UserScript== 
$(document).ready(function() { 
	var classname = "";     
	$('li.hover_nav').each(function(index) { 
		classname = $(this).attr('class'); 
		classname = 'li.' + classname.replace(" ","."); 
	    $(classname).hover( 
	        function() {
		        $(this).children().filter('div').hide(); 
	            $(this).data("timeout", setTimeout($.proxy(function() {
		            $(this).children().filter('div').show(); 
	            }, this), 500)); 
	        } 
	    , 
	        function() { 
	            var timeout = $(this).data("timeout"); 
	            if(timeout) clearTimeout(timeout); 
	            $(this).children().filter('div').hide(); 
	        } 
	    ); 
	}); 
	
	$('li.active').hover( 
        function() {
	        $(this).children().filter('div').hide(); 
            $(this).data("timeout", setTimeout($.proxy(function() {
	            $(this).children().filter('div').show(); 
            }, this), 500)); 
        } 
    , 
        function() { 
            var timeout = $(this).data("timeout"); 
            if(timeout) clearTimeout(timeout); 
            $(this).children().filter('div').hide(); 
        } 
    ); 
}); 