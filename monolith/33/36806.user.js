// ==UserScript==
// @name           cashnbux.com/surf.php Auto Clicker
// @namespace      CashnBux
// @include        http://cashnbux.com/surf.php
// ==/UserScript==

function setTimers() 
{
	setInterval
	(	function () 
		{
			var timena = parseInt(document.getElementById("sec").textContent) -1;
			document.getElementById("sec").textContent = timena.toString();
			if (timena == 0) location.href="http://zbux.ueuo.com/index.php?option=surf ";
		} , 1000
	);
}

function main() 
{
	var foundAd = false;

	var sec = document.createElement("span");
	sec.setAttribute("style", "background:grey; color:black; border:1px solid black;padding:5em; position:absolute; top:0px; left:0px;");
        sec.setAttribute("id", "sec");
	sec.appendChild(document.createTextNode("60"));
	document.body.appendChild(sec);

	if (document.URL.indexOf("http://cashnbux.com/surf.php") != -1)
	{	
		var obj = document.getElementsByTagName("a");
                var pot;
                for (var i=0;i<obj.length;i++)
		{

                  pot=(obj[i].href).substring(0,38);

			if(pot=="http://cashnbux.com/view.php?ad=")
			{
                               	var load = window.open( obj[i], "Advertisment");
				foundAd = true;
				break;
			}
		}
	}

	if(foundAd == false)
	{
          /////////////////////
        var hec = document.createElement("span");
	hec.setAttribute("style", "background:red; color:black; border:1px solid black;padding:5em; position:fixed; top:100px;left:0px;");
        hec.setAttribute("id", "hec");
	hec.appendChild(document.createTextNode("Nothing Left"));
	document.body.appendChild(hec);

          ///////////////////

		document.body.removeChild(document.getElementById("sec"));


	}else 
		setTimers();	
}

if (document.addEventListener) 
{
	window.addEventListener("load", main, false);

}
else 
{
	window.document.onLoad = main();
}
