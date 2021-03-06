// ==UserScript==
// @name           ibdof sortable
// @namespace      http://www.ibdof.com/
// @description    Sort author-booklist table
// @include        http://www.ibdof.com/IBDOF-author-booklist.php*
// @include        http://www.ibdof.com/IBDOF-series-booklist.php*
// @include        http://www.ibdof.com/IBDOF-serieslist.php*
// ==/UserScript==

/*  Sorting code from DU Sort Table http://userscripts.org/scripts/show/22674 which included the following license notes
  //Code downloaded from the Browser Experiments section of kryogenix.org is licenced under the so-called MIT licence. The licence is below.
  //Copyright (c) 1997-date Stuart Langridge
  //Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  //THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function() {

  if (!String.prototype.trim) {
      String.prototype.trim = function() { return this.replace(/^\s*|\s*$/g, ''); }
  }

  /* x-browser event register */
  function addEvent(elm, evType, fn, useCapture) {
    if (elm.addEventListener) { elm.addEventListener(evType, fn, useCapture); return true; }
    else if (elm.attachEvent) { var r = elm.attachEvent('on' + evType, fn); return r; }
    else { elm['on' + evType] = fn; }
  }

  /* x-browser detection of event target */
  function eventTarget(e) {
    var targ;
    if (!e) var e = window.event;
    if (e.target) targ = e.target;
    else if (e.srcElement) targ = e.srcElement;
    if (targ.nodeType == 3) targ = targ.parentNode; // defeat Safari bug (from ppk) 
    return targ;
  }

  //begin (c) Stuart Langridge:
  //Code downloaded from the Browser Experiments section of kryogenix.org is licenced under the so-called MIT licence. The licence is below.
  //Copyright (c) 1997-date Stuart Langridge
  //Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  //THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  function ts_makeSortable (table) {

      if (table.rows && table.rows.length > 0) {
          var firstRow = table.rows[0];
      }
      if (!firstRow) return;
      
      // We have a first row: assume it's the header, and make its contents clickable links
      for (var i=0;i<firstRow.cells.length;i++) {
        var cell = firstRow.cells[i];
    		var txt = ts_getInnerText(cell);
   		
    		// From here on slight modifications to the original - Frank Ralf
    		// "onclick" won't work with Greasemonkey.
    		// The number of the column is safed as a custom attribute for later reference when calling the ts_resortTabel function.
            cell.innerHTML = '<a style="color:fff" href="#" class="sortheader" column="'+i+'">'+txt+'<span class="sortarrow">&nbsp;&nbsp;&nbsp;</span></a>';
    		// Get link as object and addEventListener
    		elmLinks = cell.getElementsByTagName("a");
    		addEvent(elmLinks[0],
      		'click', 
      		function(e){
      			var lnk = (e && e.target) ? e.target : window.event.srcElement;
      			var  col = lnk.getAttribute('column');
      			ts_resortTable(lnk, col);		// the call to the original function
    		}, false)
      }
  }
  // The rest has been left unchanged - Frank Ralf
  // Slight modification in "ts_resortTable" - Gollum

  function ts_getInnerText(el) {
  	if (typeof el == "string") return el;
  	if (typeof el == "undefined") { return el };
  	if (el.innerText) return el.innerText;	//Not needed but it is faster
  	var str = "";
  	
  	var cs = el.childNodes;
  	var l = cs.length;
  	for (var i = 0; i < l; i++) {
  		switch (cs[i].nodeType) {
  			case 1: //ELEMENT_NODE
  				str += ts_getInnerText(cs[i]);
  				break;
  			case 3:	//TEXT_NODE
  				str += cs[i].nodeValue;
  				break;
  		}
  	}
  	return str;
  }

  function ts_resortTable(lnk) {
      // get the span
      var span;
      for (var ci=0;ci<lnk.childNodes.length;ci++) {
          if (lnk.childNodes[ci].tagName && lnk.childNodes[ci].tagName.toLowerCase() == 'span') span = lnk.childNodes[ci];
      }
      var spantext =  ts_getInnerText(span);
      var td = lnk.parentNode;
      var column = td.cellIndex;
      var table =  getParent(td,'TABLE');
      
      // Work out a type for the column
      if (table.rows.length <= 1) return;
      var itm = ts_getInnerText(table.rows[1].cells[column]).trim(); // trim mod by Gollum - fix padded cells - confuses the sortfn test
      
      sortfn = ts_sort_caseinsensitive;
      if (itm.match(/^\d\d[\/-]\d\d[\/-]\d\d\d\d$/)) sortfn = ts_sort_date;
      if (itm.match(/^\d\d[\/-]\d\d[\/-]\d\d$/)) sortfn = ts_sort_date;
      if (itm.match(/^[$]/)) sortfn = ts_sort_currency;
      if (itm.match(/^[\d\.]+$/)) sortfn = ts_sort_numeric;
      SORT_COLUMN_INDEX = column;
      var firstRow = new Array();
      var newRows = new Array();
      for (i=0;i<table.rows[0].length;i++) { firstRow[i] = table.rows[0][i]; }
      for (j=1;j<table.rows.length;j++) { newRows[j-1] = table.rows[j]; }

      newRows.sort(sortfn);

      if (span.getAttribute("sortdir") == 'down') {
          ARROW = '&nbsp;&nbsp;&uarr;';
          newRows.reverse();
          span.setAttribute('sortdir','up');
      } else {
          ARROW = '&nbsp;&nbsp;&darr;';
          span.setAttribute('sortdir','down');
      }
      
      // We appendChild rows that already exist to the tbody, so it moves them rather than creating new ones
      // don't do sortbottom rows
      for (i=0;i<newRows.length;i++) { if (!newRows[i].className || (newRows[i].className && (newRows[i].className.indexOf('sortbottom') == -1))) table.tBodies[0].appendChild(newRows[i]);}
      // do sortbottom rows only
      for (i=0;i<newRows.length;i++) { if (newRows[i].className && (newRows[i].className.indexOf('sortbottom') != -1)) table.tBodies[0].appendChild(newRows[i]);}
      
      // Delete any other arrows there may be showing
      var allspans = document.getElementsByTagName("span");
      for (var ci=0;ci<allspans.length;ci++) {
          if (allspans[ci].className == 'sortarrow') {
              if ( getParent(allspans[ci],"table") ==  getParent(lnk,"table")) { // in the same table as us?
                  allspans[ci].innerHTML = '&nbsp;&nbsp;&nbsp;';
              }
          }
      }
          
      span.innerHTML = ARROW;
  }

  function getParent (el, pTagName) {
  	if (el == null) return null;
  	else if (el.nodeType == 1 && el.tagName.toLowerCase() == pTagName.toLowerCase())	// Gecko bug, supposed to be uppercase
  		return el;
  	else
  		return  getParent(el.parentNode, pTagName);
  }
  function ts_sort_date(a,b) {
      // y2k notes: two digit years less than 50 are treated as 20XX, greater than 50 are treated as 19XX
      aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]);
      bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]);
      if (aa.length == 10) {
          dt1 = aa.substr(6,4)+aa.substr(3,2)+aa.substr(0,2);
      } else {
          yr = aa.substr(6,2);
          if (parseInt(yr) < 50) { yr = '20'+yr; } else { yr = '19'+yr; }
          dt1 = yr+aa.substr(3,2)+aa.substr(0,2);
      }
      if (bb.length == 10) {
          dt2 = bb.substr(6,4)+bb.substr(3,2)+bb.substr(0,2);
      } else {
          yr = bb.substr(6,2);
          if (parseInt(yr) < 50) { yr = '20'+yr; } else { yr = '19'+yr; }
          dt2 = yr+bb.substr(3,2)+bb.substr(0,2);
      }
      if (dt1==dt2) return 0;
      if (dt1<dt2) return -1;
      return 1;
  }

  function ts_sort_currency(a,b) { 
      aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,'');
      bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,'');
      return parseFloat(aa) - parseFloat(bb);
  }

  function ts_sort_numeric(a,b) { 
      aa = parseFloat(ts_getInnerText(a.cells[SORT_COLUMN_INDEX]));
      if (isNaN(aa)) aa = 0;
      bb = parseFloat(ts_getInnerText(b.cells[SORT_COLUMN_INDEX])); 
      if (isNaN(bb)) bb = 0;
      return aa-bb;
  }

  function ts_sort_caseinsensitive(a,b) {
      aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]).toLowerCase();
      bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]).toLowerCase();
      if (aa==bb) return 0;
      if (aa<bb) return -1;
      return 1;
  }

  function ts_sort_default(a,b) {
      aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]);
      bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]);
      if (aa==bb) return 0;
      if (aa<bb) return -1;
      return 1;
  }

//end (c) Stuart Langridge

  if (!document.getElementById('sort_btn')) {
  
    var c = document.getElementsByTagName('table')[2].getElementsByTagName('td')[0];

    var bdiv = document.createElement('div'); // container
    bdiv.style.position = 'absolute';
    bdiv.style.right = '20px';
    
    var btn = bdiv.appendChild(document.createElement('button'));
    btn.id = "sort_btn";
    btn.innerHTML = "Make sortable Table";
    btn.style.position = "relative";
    btn.style.top = "-20px";
    
    c.appendChild(bdiv);

    addEvent(btn, "click",
      function(e) {
        var t = document.getElementsByTagName('table')[3];
        if (/author-booklist|serieslist/.test(location.pathname)) {
          t.rows[0].parentNode.removeChild(t.rows[0]); // remove alphabet links
          if (/author-booklist/.test(location.pathname))
            t.rows[0].cells[5].innerHTML = "Amazon"; // wtf! - column has no title
        }
        t.rows[0].parentNode.removeChild(t.rows[t.rows.length-1]); // remove empty bottom row
        eventTarget(e).style.display = 'none';
        if (e && e.target) {
          e.preventDefault();
          e.stopPropagation();
        } else {
          window.event.returnValue = false;
          window.event.cancelBubble = true;
        }
    		ts_makeSortable(t);
      }, false);
  }
})();
