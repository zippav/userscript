// Amazon Sheffield Library Catalogue Lookup
// version 0.2 BETA
// 2008-10-13
// Copyright (c) 2008 Tim Parkinson, http://doyouhateme.bizarro.org.uk/
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
// 
// Based on the following code by Josh Staiger:
// Amazon UNLV Libraries Lookup
// version 0.2 BETA
// 2005-12-17
//
// Copyright (c) 2005 Josh Staiger, josh@joshstaiger.org
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// Inspired by Jon Udell's Library Lookup script:
// http://weblog.infoworld.com/udell/gems/LibraryLookup.user.js
// Copyright (c) 2005 Jon Udell
// Licensed under Creative Commons Attribution
// http://creativecommons.org/licenses/by/1.0/
//
// Additional modifications based on work by // Sean LeBlanc
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Amazon UNLV Libraries Lookup", and click Uninstall.
//
// * Instruction text lifted from Mark Pilgrim's Butler
// * http://diveintomark.org/projects/butler/
//
// --------------------------------------------------------------------
//
// WHAT IT DOES:
//
// Alerts you if any editions of the current book you are browsing
// on Amazon.com are available at the Sheffield Libraries.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Amazon Sheffield Libraries Lookup
// @namespace     http://namespaces.bizarro.org.uk/amazon_Sheffield_library_lookup
// @description	  Alerts you if any editions of the current book you are browsing on Amazon.com are available at the Sheffield Libraries.
// @include       http://*.amazon.*
// @include       http://amazon.*
// ==/UserScript==


// TODO 
// *  make safe for multiple library scripts
// * fix form error issue
// * fix div issue where second edition search does not return results
// * fix multiple load warning
var dbg = false;
var libraryName = 'Sheffield Libraries';

// ** In theory this is the only function that needs to be edited to
// ** adapt this script to other libraries.
//
// Search the library for the specified isbn
// if we find it, call fn with the resulting library url
// otherwise call fn with null
function slog(logthis) {
	if (dbg) GM_log(logthis);
}

function libSearch(isbn, fn) {
    var libraryItemUrl = 'http://library.sheffield.gov.uk/uhtbin/cgisirsi/x/0/0/5/?searchdata1='+isbn;
    //var libraryItemUrl = 'http://sld.suffolkcc.gov.uk/cgi-bin/vps_server.sh?enqtype=ISBN&enqpara1=query&author_form=1&classpara1='+isbn;

    // fetch the library page for this item
    slog("URL: " + libraryItemUrl);
    GM_xmlhttpRequest ({
        method: 'GET',
        url: libraryItemUrl,
        onload:function(results) {

           var page = results.responseText;

           var noMatchesFoundRegExp = /found no matches in/;
           var match = noMatchesFoundRegExp.exec(page);

           // if we find the phrase 'Sorry, could not find anything matching' on the library page then
           // the library doesn't stock our item

           if (match) {
               fn(null);
               return;
           }

           // otherwise we look to see if there is a copy that is not checked out
           var page = results.responseText;
           //Open the details page
           //var libraryItemDetailsUrl = 'http://sld.suffolkcc.gov.uk/cgi-bin/vps2.5_viewpoint.sh?session_no=2177476&typesect=full&time=422644313&enqtype=SECOND&enqpara1=RESULT&rcn=0385605145&media_code=1&sec_code=1&page=0&no_of_results=9&type=ISBN&sec_stng=&media_stng=&authorpage=&rec_no_string=&search_string='+isbn+'&title_string=&from=0&fromrecord=1&totalrecords=1&id=&group=&code=&modfrom='

            //GM_xmlhttpRequest ({
            //method: 'GET',
            //url: libraryItemDetailsUrl,
            //onload:function(detailsResults) {
              var detailsPage = page;

              var notCheckedOutRegExp = /available at/;
              var notCheckedOutMatch = notCheckedOutRegExp.exec(detailsPage);

              if (notCheckedOutMatch) {  // we found one. 
                  fn(libraryItemUrl, 'Not Checked Out');
                  return;
              }

              // otherwise look for due dates
              var dueDatesArray = new Array();
              //var dueDateRegExp = /(\d\d)\/([a-zA-Z]{1,})\/(\d\d)/g;
	      var dueDateRegExp = /(\d\d)\/(\d\d)\/(\d\d\d\d)/g;

              while(dueDateMatch = dueDateRegExp.exec(detailsPage)) {
                
                /* var monthNum = 0;
                 switch (dueDateMatch[2]){
                        case "JAN":
                            monthNum = 1;
                        break;
                        case "FEB":
                            monthNum = 2;
                        break;
                        case "MAR":
                            monthNum = 3;
                        break;
                        case "APR":
                            monthNum = 4;
                        break;
                        case "MAY":
                            monthNum = 5;
                        break;
                        case "JUN":
                            monthNum = 6;
                        break;
                        case "JUL":
                            monthNum = 7;
                        break;
                        case "AUG":
                            monthNum = 8;
                        break;
                        case "SEP":
                            monthNum = 9;
                        break;
                        case "OCT":
                            monthNum = 10;
                        break;
                        case "NOV":
                            monthNum = 11;
                        break;
                        case "DEC":
                            monthNum = 12;
                        break;
                    } */
                    var dueDate = new Date(Number(dueDateMatch[3]), Number(dueDateMatch[1]), Number(dueDateMatch[2]));
    
                    dueDatesArray.push(dueDate);
              }

              if(dueDatesArray.length) {  //found due dates, report the earliest
                  GM_log("dueDatesArray: " + dueDatesArray);
                  dueDatesArray.sort(function(date1, date2) { date1.getTime()-date2.getTime() });

                  GM_log("dueDatesArray (sorted): " + dueDatesArray);
                  fn(libraryItemUrl, 'Due '+formatDate(dueDatesArray[0], 'E NNN d yyyy'));
                  return;
              }

              // check if item is missing

              var missingRegExp = /MISSING/;
              var missingMatch = missingRegExp.exec(detailsPage);

              if(missingMatch) {
                  fn(libraryItemUrl, 'Missing');
                  return;
              }

              // cannot determine status. just say 'maybe'
          
              fn(libraryItemUrl, 'Maybe');   
             //}
          //});
        }
    });
}

// ------------------------------------------------------------------
// formatDate (date_object, format)
// Returns a date in the output format specified.
// The format string uses the same abbreviations as in getDateFromFormat()
//
// Thanks to Matt Kruse <matt@mattkruse.com> for this code
// http://www.mattkruse.com/javascript/date/source.html
// ------------------------------------------------------------------

var MONTH_NAMES=new Array('January','February','March','April','May','June','July','August','September','October','November','December','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
var DAY_NAMES=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sun','Mon','Tue','Wed','Thu','Fri','Sat');
function LZ(x) {return(x<0||x>9?"":"0")+x}

function formatDate(date,format) {
	format=format+"";
	var result="";
	var i_format=0;
	var c="";
	var token="";
	var y=date.getYear()+"";
	var M=date.getMonth()+1;
	var d=date.getDate();
	var E=date.getDay();
	var H=date.getHours();
	var m=date.getMinutes();
	var s=date.getSeconds();
	var yyyy,yy,MMM,MM,dd,hh,h,mm,ss,ampm,HH,H,KK,K,kk,k;
	// Convert real date parts into formatted versions
	var value=new Object();
	if (y.length < 4) {y=""+(y-0+1900);}
	value["y"]=""+y;
	value["yyyy"]=y;
	value["yy"]=y.substring(2,4);
	value["M"]=M;
	value["MM"]=LZ(M);
	value["MMM"]=MONTH_NAMES[M-1];
	value["NNN"]=MONTH_NAMES[M+11];
	value["d"]=d;
	value["dd"]=LZ(d);
	value["E"]=DAY_NAMES[E+7];
	value["EE"]=DAY_NAMES[E];
	value["H"]=H;
	value["HH"]=LZ(H);
	if (H==0){value["h"]=12;}
	else if (H>12){value["h"]=H-12;}
	else {value["h"]=H;}
	value["hh"]=LZ(value["h"]);
	if (H>11){value["K"]=H-12;} else {value["K"]=H;}
	value["k"]=H+1;
	value["KK"]=LZ(value["K"]);
	value["kk"]=LZ(value["k"]);
	if (H > 11) { value["a"]="PM"; }
	else { value["a"]="AM"; }
	value["m"]=m;
	value["mm"]=LZ(m);
	value["s"]=s;
	value["ss"]=LZ(s);
	while (i_format < format.length) {
		c=format.charAt(i_format);
		token="";
		while ((format.charAt(i_format)==c) && (i_format < format.length)) {
			token += format.charAt(i_format++);
			}
		if (value[token] != null) { result=result + value[token]; }
		else { result=result + token; }
		}
	return result;
}


// Simplify making a FIRST_ORDERED_NODE_TYPE XPath call

function xpathFirst(query, node) {
    if (!node) {
	node = document;
    }

    var result = document.evaluate(query, node, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null );

    if (!result) {
	return;
    }

    return result.singleNodeValue;
}

// Simplify making an UNORDERED_NODE_SNAPSHOT_TYPE XPath call
// Return a snapshot list

function xpathAll(query, node) {
    if (!node) {
	node = document;
    }

    return document.evaluate(query, node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}

// Add global style to page

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];

    if (!head) { 
	throw new Error('Could not get head element.');
    }

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}


// Insert a div into the document that will be used for displaying item availability.
// Return this div.  

//function getItemAvailabilityDiv() {
//
//    var mainTitleSpan = xpathFirst('//b[@class="sans"]');
//
//    if (!mainTitleSpan) { 
//	throw new Error('Could not get main title span.');
//    }
//
//    var parent = mainTitleSpan.parentNode;
//
//    itemAvailabilityDiv = document.createElement('div');
//
//
//    // Amazon uses two different layouts for displaying items.
//    // Handle both.
//
//    switch (parent.nodeName.toUpperCase()) {
//
//    case "FORM":
//
//	var authorSpan = xpathFirst('span[starts-with(string(normalize-space()), "by")]', parent);
//
//	if( !authorSpan ) {
//	    throw new Error('Could not get author span.');
//	}
//
//	var nextBr = xpathFirst('following-sibling::br', authorSpan);
//
//	if( !nextBr) {
//	    throw new Error('Could not get next br after author span.');
//	}
//
//	parent.removeChild(nextBr);
//	parent.insertBefore(itemAvailabilityDiv, authorSpan.nextSibling);
//	return itemAvailabilityDiv;
//		
//	break;
//
//    case "DIV":
//
//	if(parent.lastChild.tagName == 'br') {
//	    parent.removeChild(parent.lastChild);
//	}
//
//	parent.appendChild(itemAvailabilityDiv);
//
//	return itemAvailabilityDiv;
//
//	break;
//
//    default:
//	throw new Error('Did not recognize the main title span\'s parent\'s nodetype');
//    }
//}
function getItemAvailabilityDiv() {
	var	mainTitleSpan = getTitleLocation();


	slog("Getting parent node of main title span.");
    var parent = mainTitleSpan.parentNode;


    itemAvailabilityDiv = document.createElement('div');
	slog("ItemAvailabilityDiv=" + itemAvailabilityDiv);

    // Amazon uses two different layouts for displaying items.
    // Handle both.
	slog("Nodename: " + parent.nodeName.toUpperCase());

	if (parent.nodeName.toUpperCase()=="H1") {
		parent = parent.parentNode;
	}

    switch (parent.nodeName.toUpperCase()) {

    case "FORM":
		var authorSpan = xpathFirst('span[starts-with(string(normalize-space()), "by")]', parent);

		if( !authorSpan ) {
		    throw new Error('Could not get author span.');
		}

		var nextBr = xpathFirst('following-sibling::br', authorSpan);

		if( !nextBr) {
		    throw new Error('Could not get next br after author span.');
		}
		parent.removeChild(nextBr);
		parent.insertBefore(itemAvailabilityDiv, authorSpan.nextSibling);
		return itemAvailabilityDiv;

		break;

    case "DIV":
		if(parent.lastChild.tagName == 'br') {
			slog("Removing last child.");
	    	parent.removeChild(parent.lastChild);
		}

		parent.appendChild(itemAvailabilityDiv);
		return itemAvailabilityDiv;

		break;

    default:
		throw new Error('Did not recognize the main title span\'s parent\'s nodetype');
    }
}


// Insert a new paragraph containing the specified text into the specified div node.  
// If present, we set the class attribitue of this div to classAttr.

function insertText(stubDiv, text, classAttr) {
    var p = document.createElement('p');

    if(classAttr) {
	p.setAttribute('class', classAttr);
    }

    p.innerHTML = text;

    stubDiv.appendChild(p);
}


// Clear contents of the specified div node

function clearText(stubDiv) {
    stubDiv.innerHTML = '';
}

// Get the isbn for the amazon item we are currently browsing.  
// Return null if no isbn can be found.

function getIsbn() {
    //var match = window.location.href.match(/\/(\d{7,9}[\d|X])\//);
    var match = window.location.href.match(/\/(\d{7,9}[\d|X])(\/|$)/);
     
    if (!match) {return;}
    if (match[1].length == 10) {
    	var isbn = "978"+match[1];
    } else {
	var isbn = match[1];
    }
    slog("ISBN: " + isbn);
    return isbn;
}

// Return a function that displays a message within the specified div
// regarding availablility of the current book.  
//
// The function returned expects a library url for this item and will
// display a message saying the item is available if passed such a url.
// It will display a message saying the item is unavailable if passed
// a null value.  

function getDisplayItemInfoFunction(stubDiv) {

    return function(libUrl, statusString) {

	clearText(stubDiv);

	if(!libUrl) {
	    insertText(stubDiv, 'Unavailable at ' + libraryName + '.', 'libraryUnavailable');
	    return;
	}

        var availabilityString = '<a href="' + libUrl + '" title="'+libraryName+' information for this item">Available at ' + libraryName + '.' + (statusString ? ' (' + statusString + ')' : '') + '</a>';

	insertText(stubDiv, availabilityString, 'libraryAvailable');
    }
}


// Return spinner image source

function getSpinnerSrc() {

    var spinnerImgSrc = "data:image/gif,GIF89a%10%00%10%00%E6%00%00%FF%FF%FF%FE%FE%FE%A3%A3%A3%FD%FD%FD%E9%E9%E9%B5%B5%B5%F9%F9%F9%FA%FA%FA%F5%F5%F5%FC%FC%FC%AB%AB%AB%ED%ED%ED%C0%C0%C0%B1%B1%B1%C7%C7%C7%E5%E5%E5%F4%F4%F4%B4%B4%B4%F7%F7%F7%C1%C1%C1%CF%CF%CF%E6%E6%E6%03%03%03%E4%E4%E4%DF%DF%DF%C4%C4%C4%EE%EE%EE%9A%9A%9A%C2%C2%C2%D4%D4%D4%E2%E2%E2%3C%3C%3C%A8%A8%A8%B0%B0%B0%F2%F2%F2%AD%AD%AD%B2%B2%B2%DB%DB%DB%AA%AA%AA%D9%D9%D9%D7%D7%D7%BB%BB%BB%26%26%26%CD%CD%CD%D8%D8%D8%B9%B9%B9%9E%9E%9E%CB%CB%CB%AE%AE%AE%FB%FB%FB%EC%EC%ECRRR%EA%EA%EA%85%85%85%F6%F6%F6JJJ%DC%DC%DC%0C%0C%0C%D1%D1%D1%A4%A4%A4)))%E7%E7%E7%5D%5D%5D%BD%BD%BD%A7%A7%A7%CC%CC%CC%B7%B7%B7%F1%F1%F1%D0%D0%D0YYYfff%CA%CA%CA%A6%A6%A6%F0%F0%F0%E0%E0%E0%B8%B8%B8%BF%BF%BF%E8%E8%E8%F3%F3%F3%C8%C8%C8zzz%A5%A5%A5%BE%BE%BENNN%C3%C3%C3%C6%C6%C6%C5%C5%C5%14%14%14jjj%DD%DD%DD%F8%F8%F8%D6%D6%D6%BA%BA%BA%BC%BC%BC%90%90%90nnn%1C%1C%1C%DE%DE%DE%96%96%96%82%82%82%8C%8C%8C%89%89%89aaatttTTT%87%87%87%93%93%93FFF%8E%8E%8EWWW%7F%7F%7F222www%DA%DA%DA%7C%7C%7C666qqqAAAlll%94%94%94xxx%A1%A1%A1%A2%A2%A2---%23%23%23%80%80%80%D2%D2%D2%AC%AC%AC!%FF%0BNETSCAPE2.0%03%01%00%00%00!%F9%04%04%05%00%00%00%2C%00%00%00%00%10%00%10%00%00%07%C8%80%00%82%00%03%82-h%09%83%8A%82%15_%1D%00%1BW%09%07-%25%8B%00Mo%3E%00j%60%00%14%02%3D%8A%15%04%00%11%3C%3Fe%7C%2B%3B%2F%00%07%04%01%03cE%3F%08%3E%5E%3A%05Q!6%15%11%20%12%00%1853p6Z%82%93O%02%05%17%8A%2FQ%85%8A%1D%2C%83)%3BQ%20%1E%97%10%0E%13%0CG%40l%5Eba%97%22-%24%0DR%83%17%3A%01%8B%18%CF%83%12%19%1B%7F1%8B%3F%02T%22%00%01%96%08%08%E2%AD%03%84!J%BA%20%60%01%C4%84%01%00%25*%00%20%20%E0%C4%8B%02%0F%04l%01%90%E4%C44%00%06HD%08%90a%04%00%2BQ4%5C%22%A0%E0%01%00%0E%0A%02%20%80%81%E2R%00a%00V%A4%88g%20%91%A0%40%00!%F9%04%04%05%00%00%00%2C%00%00%00%00%0D%00%0B%00%00%07o%80%00%82%00%03%82%1Bt%85%83%82%17p8%00_s%03Z7L%832%3En%00g%1F%00w%16%0E%00%0F%1A%00%1Ch%1CP7'%16t%84bcA%12r.%3A%0C%20*2%15%00%15%02rb%12%07%82%07%22K%02%83%5B%5C%01%8A%00%1D%2CA%3FB%05%3D%CA%00%10%0E%13%0D%0D%05M%D3%22-%83%0Ba%C9%8A%18%17%00%06%14H!1%CA%3F%02%81%00!%F9%04%04%05%00%00%00%2C%00%00%00%00%10%00%08%00%00%07d%80%00%82%00%03%82%0Ad%85%83%8A%00%3Db%0F%00ef%03N%3E%5D%8B%00Ic.%00lF%9C%3CT%8A%04N%00DP%1D%1BX(%3C5%00%06Y%01%03%11%20q%06%1B%5C%18A%0Dk2%1DE9%1A%00%1A%0C%02%11%061%82%09%10r%16o%05%01%83%17D%D0%8Aiw%83%2B%0C%13U%0B%97M%1BL%0CG%81%00!%F9%04%04%05%00%00%00%2C%03%00%00%00%0D%00%0A%00%00%07g%80%00%01%00%00R%40%03%84%89%002%05%04%00Hi%03%08cD%89%08%26%05%00%20e%00%02S%3A%8A%18z(%23d83.%00%10%18%018%07%5CT%17(Lv2VSu6%02B1%09%84%09%08n%3C3%3F%01%17D%83%8A%1B%40%89U%0B%8A%84%17idb0%05M%D0%008%1F%3C*S%0Ba%C9%89!%5D%89%81%00!%F9%04%04%05%00%00%00%2C%05%00%00%00%0B%00%0E%00%00%07y%80%00%00%3AL%01%82%87%00%0B%00%1C%26%01%12.%1D%87)%00%19%40%00-P8%87%02%1E%0Ey%17r%05%006%1E%01%5C%1428A%5EI%14_%3E61%09%82%03Zb3gA%01%86%88%23%A2%88%88Mc_Xd%C0%00%1EE7k_%BC%87%24%0E%871%88%017%7Cy%8A%0E%1D%10C%2CF%17wWmZ%02'%2F%05%0FzR%00%5B%1B%09%11%01%19%23%00VQ%8A%82%81%00!%F9%04%04%05%00%00%00%2C%08%00%01%00%08%00%0F%00%00%07b%80%0A%01%07-%25%00%87%23%00%14%02%15%87%00!2%3B%2F%00Z%17%01%0FY!Nqjc6%00%03%06%23Pb%2C%8E%00%1CO%A7%87%0B%1Be5.%8E%3DP_ve%8E%05V%AB%01f*gJ%00%17%26m%04%02oo6dK%16%05%00q%24%03%89%3E%7C%04%8E%82%17%60%CD%87)%01%00%22%09%8E%81%00!%F9%04%04%05%00%00%00%2C%06%00%02%00%0A%00%0E%00%00%07m%80%00%19%23%00%14%02%3D%00%89%1E%0E!2%3B%2F%00%07%04%01%142%0FY!6%15%11%20%12%09%89%03%07O%02!%18%89%A7%00G%90%A8%A7%1A%23H%3B%05%AC2%1B%5E%5EH%AC%1C%2B%AC%89%01c3d%0F%00%3BJqBf%04%05EfZ!_m%0E*.%00%1EG%03%03%3ES%00g%3C(%A8hS%01%15kR%A8Pp%03%00%9E%A7%81%00!%F9%04%04%05%00%00%00%2C%03%00%05%00%0D%00%0B%00%00%07r%80%02B1%09%00%00%03%07O%02%05%17%00%17D%01%86%92%1D%2C%92U%0B%92%92%10%0E%13%0CG%05M%99%86%1A%26%0A!R%0B%2C%91%99D(%92Hm%08%99%01zP%202%00-%1EFb%17%18%19n%1AG%7D5Z%00%13%60%11ch%2B3!%00%04D%03%1A%3Cp%03gu%00j3a%96%1F8%00_s%032FU%92%03%B2%00%5EX%85Z%85%86%81%00!%F9%04%04%05%00%00%00%2C%00%00%08%00%10%00%08%00%00%07e%80%13%0D%0D%40(%00%87%88%22-%24%0DR%88%14%02%03%88%87%18%17%93CP9%7B6%93%00)%02T%22%00%09%1F9%1B%04P%1B4%3D%1D%1B%22(%40%26%06%00KY%00G*%0A%1Bg'P%1C%00I'%92%87C7S%03%5Ef%00%23r%15%9D%00%1Ds%13%00d%3E%01Ie%2F%CF%01%10%87%3Bc%92Z%09%88%81%00!%F9%04%04%05%00%00%00%2C%00%00%06%00%0D%00%0A%00%00%07d%80%00%82V%1B%03%82%87%1D%2CP33fA%87%87%10%0E%7DEmE%19%90%82%22-%87%2C%24%86%90%18%17%00Cd%7Bu%12%99%3F%02%03F%7Ce%3Db%7F%0B2(%5D%08%2C%00G%98%1D3K!j%25y%5B%90%10_t%01%20e%00%3FQ%1A%87%17F%2B%00H5%01%220(%87%01%A9%00).%86%06%09%81%00!%F9%04%04%05%00%00%00%2C%00%00%03%00%0B%00%0D%00%00%07r%80%00O%18%00%3A%02%1E%0E!2%3B%03%3EW.%22X%192%0FY!%00Ml%7CsN1%00%00%03%07%9F%00%0Ed%03%A3%9F%5EX_p%1D%A8%9Fxk7hG%AF%A8%25%0C%A7%AF%10HmF%06%AF%03nS.%0B%0D%0CCCJ%5D%00%14%14%00%18P%0EL%05%0F%02%A36%5Ej%01%3F%23%00V%A3%0F5'%00%13%0A%01%08%A3%01%12%9F%2B)%01%00%81%00!%F9%04%04%05%00%00%00%2C%00%00%00%00%08%00%0F%00%00%07a%80%00%82%00%09%82%3A%838o%87%1C%83C%7Cu%00%19%00(%1E%00U%16!%0D%033s%0A%08hP'%93X*h%08%07%83%00%1C%5E%03%82%3Bedj%25%83dXXg(%A9%82%17D%01%83%12)ne%A8%00%03%1BP%05I%19%1D%10%00~q%00%3D%02'%2F%83%06%24%11%01%92%82%04%0A%0F%AA%81%00%3B";

    return spinnerImgSrc;

}

// Searches the library for alternate editions of the book with the specified isbn
// if we find one then call fn with the url of the Amazon "All Editions" page for this book
// otherwise call fn with null

function otherEditionSearch(isbn, fn) {
    var allEditionsLinkElement = xpathFirst('//a[normalize-space()="All Editions"]');

    if (!allEditionsLinkElement) {
	fn(null);
	return;
    }

    GM_xmlhttpRequest ({
	method: 'GET', 
	url: allEditionsLinkElement.href,
        onload:function(results) {

	    var page = results.responseText;
	    
	    var beginResultsPos = page.search(/Sort by:/);

	    if (beginResultsPos == -1) {
		throw new Error('Could not find "sort by" text');
	    }

	    var listManiaPos = page.search(/Listmania!/);

	    if (listManiaPos == -1) {
		throw new Error('Could not find "listmania" text');
	    }

	    var itemReg = /a href=\/exec\/obidos\/tg\/detail\/-\/(\d{10})/g;

	    itemReg.lastIndex = beginResultsPos;

	    var match;

	    var pageIsbns = new Array();

	    while((match = itemReg.exec(page)) && itemReg.lastIndex <= listManiaPos) { 
		pageIsbns.push(match[1]);
	    }

	    if (!pageIsbns) {
		throw new Error('No isbns found on page');
	    }

	    pageIsbns.sort();

	    var isbnSet = new Array();

	    // Extract the set of unique isbns
	    while(pageIsbns.length) {
		var next = pageIsbns.shift();

		// We don't care about the isbn of the current item
		if (next == isbn) { continue; }

		if (isbnSet[0] != next) { isbnSet.unshift(next); }
	    }


	    var n = 1;

	    // searchEd is a closure around isbnSet, allEditionsLinkElement, and fn
	    searchOtherEdFunction = function(x) {

		// If we are passed a "true" value then we know we found another edition
		if (x) {
		    fn(allEditionsLinkElement.href); 
		    return;
		}

		// if isbnSet is empty then give up
		if( ! isbnSet.length ) { 
		    fn(null);
		    return; 
		}

		n++;
		// otherwise check the next isbn
		libSearch(isbnSet.shift(), searchOtherEdFunction);
	    }

	    libSearch(isbnSet.shift(), searchOtherEdFunction);
	}
    });
}


// Return a function that displays a message within the specified div
// retarding the availability of alternate editions of the current book. 
// 
// The function returned expects an Amazon "All Editions" url for this item and will
// display a message saying the item is available if passed such a url.
// It will display a message saying the item is unavailable if passed
// a null value.  

function getDisplayOtherEditionsInfoFunction(stubDiv) {

    return function(allEdUrl) {
	clearText(stubDiv);
	
	if(!allEdUrl) {
	    insertText(stubDiv, 'Alternate editions unavailable at ' + libraryName + '.', 'libraryUnavailable');
	    return;
	}
	
	insertText(stubDiv, '<a href="'+allEdUrl+'" title="Amazon.com all editions page">Other editions</a> available at ' + libraryName + '.', 'libraryAvailable');
    }
}

// Return true if we are browsing an "All Editions" page

function isAllEditionsPage() {
    return allEdHeader = xpathFirst('//b[normalize-space()="All Editions"]');
}

function getTitleLocation() {
    var paths = new Array();
    paths[0] = "//div[@class='buying']/b[@class='sans']";
    paths[1] = "//div[@class='content']//b[@class='sans']";
    paths[2] = "//div[@class='buying']/b[@class='asinTitle']";
    paths[3] = "//div[@class='content']/b[@class='asinTitle']";
    paths[4] = "//div[@class='buying']/h1[@class='parseasinTitle']/span[@id='btAsinTitle']";

    var mainTitleSpan;
    for (i=0; i<paths.length; i++) {
        slog("Searching for main title span with: " + paths[i]);
        mainTitleSpan = xpathFirst(paths[i]);
        if (mainTitleSpan) {
            slog("Found main title span" + mainTitleSpan)
            return mainTitleSpan;
        }
    }
}

//Handle All editions page

function searchAllEditions() {

    var editionInfoTables = xpathAll('//table[tbody/tr/td/font/b]');

    if(!editionInfoTables) {
	throw new Error('No edition info tables found');
    }

    for(var x = 0; x < editionInfoTables.snapshotLength; x++) {
	var editionInfoTable = editionInfoTables.snapshotItem(x);

	var edLink = xpathFirst('.//a[starts-with(normalize-space(@href), "/exec/obidos/tg/detail/-/")]', editionInfoTable);
	
	if(!edLink) {
	    throw new Error('Could not find edition item link');
	}

	var match = edLink.href.match(/\/(\d{7,9}[\d|X])\//);

	if (!match) {
	    GM_log('Edition item link does not contain an isbn. Href: ' + edLink.href);
	    continue;
	}

	var edIsbn = match[1];

	var editionInfoDiv = document.createElement('div');
	editionInfoDiv.setAttribute('class', 'stub');

	var parent = editionInfoTable.parentNode;

	var firstBr = xpathFirst('br', parent);

	parent.insertBefore(editionInfoDiv, firstBr);

	insertText(editionInfoDiv, '<img src="' + getSpinnerSrc() + '" alt="Spinner" /> Searching for this edition at ' + libraryName + '.');

	libSearch(edIsbn, getDisplayItemInfoFunction(editionInfoDiv));
    }

}


if (!GM_xmlhttpRequest || !GM_log) {
    alert('The Library Lookup script requires Greasemonkey 0.5.3 or higher.  Please upgrade to the latest version of Greasemonkey.');
    return;
}

addGlobalStyle('.stub { height: 1em; margin: 1em; } .libraryAvailable { font-weight:bold; } .libraryUnavailable { color: rgb(153,0,0)} ');

var isbn = getIsbn();

if(isbn) {
    var itemAvailabilityDiv = getItemAvailabilityDiv();

    if (!itemAvailabilityDiv) {
	throw new Error('Could not get item availability stub');
    }

    itemAvailabilityDiv.setAttribute('class', 'stub');

    insertText(itemAvailabilityDiv, '<img src="' + getSpinnerSrc() + '" alt="Spinner" /> Searching for this edition at ' + libraryName + '.');
    libSearch(isbn, getDisplayItemInfoFunction(itemAvailabilityDiv));


   /* var otherEditionsAvailabilityDiv = document.createElement('div');

    otherEditionsAvailabilityDiv.setAttribute('class', 'stub');

    itemAvailabilityDiv.parentNode.insertBefore(otherEditionsAvailabilityDiv, itemAvailabilityDiv.nextSibling);

    insertText(otherEditionsAvailabilityDiv, '<img src="' + getSpinnerSrc() + '" alt="Spinner" /> Searching for alternate editions at ' + libraryName + '.');
    otherEditionSearch(isbn, getDisplayOtherEditionsInfoFunction(otherEditionsAvailabilityDiv));*/
} 

if (isAllEditionsPage()) {
    //searchAllEditions();
}

