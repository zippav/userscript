// ==UserScript==
// @name		GARRA
// @version 	82
// @namespace 	INVALID
// @author		INVALID
// @description	Aliança Garra - ika-core
// @include		http://s9.ikariam.*/*
// @require		http://www.ika-core.org/scripts/ika-core.js
// ==/UserScript==
// ===========================================================================
//basically u can copy this now, this part of the script is has no copyright, as long as the @require http://www.ika-core.org/scripts/ika-core.js
//stays untouched.
// You can create a copy of this and host it anywhere, when a new version of ika-core comes out the users have to simply reinstall  your script from your location
// and it will fetch automatically the newest ika-core version.
// So even if you change your version, and the users update , it is guaranteed that they get the latest ika-core and the search functionality it prvides.
// ika-core script will check periodically if there is a newer version and will prompt the users to update your script, named "whatever" so the users will fetch the latest.
//ika core hold its own version number now.

var version=83;
var scriptlocation="http://www.ika-core.org/scripts/the_corsairs_tools.user.js";

// Settings for every server
switch (location.host) {
	default:
		alliancefullnm='Garra';
		alliancenm='GARRA';
		alliance=[		[ alliancenm		, Alliance	],
					['IMPG' 		, Allies	],
					['ACGAR'		, Allies	],
					['SKB'			, Allies	],
					['POWER'		, Allies	],
                                        ['3000'			, Allies	],
                                        ['ALPHA'		, Allies	],
                                        ['GOW'	       		, Allies	],
                                        ['swrs'	       		, Allies	],
                                        ['N 1'  		, Enemies	],
                                        ['FEAR2'  		, Enemies	],
                                        ['FEAR' 		, Enemies 	] ];
		//Use the DOT (.) to not include the chat, forum, forumnew in the menu.
		//chaturl='.';
		chaturl='.';
		forumurl='.';
		//forumurl='http://cor-atle.highbb.com/';
		forumurlnew='.';
		//forumurlnew='http://cor-atle.highbb.com/search.forum?search_id=newposts';
		break;
}
	main();
	ToolsMenu();
	fixtreaties();
	
 /*   var showbubble=Math.floor(Math.random()*10);
    if (showbubble%2) { //If Even
       addsbubble('diplomat',"Você é o cara!", 68);
       addsbubble('scientist',"Que cara?", 71);
       addsbubble('diplomat',"Um dos membros da GARRA.", 72);
       addsbubble('scientist',"Que GARRA?", 74);
       addsbubble('diplomat',"A Aliança GARRA.", 77);
       addsbubble('scientist',"Quem é?", 79);
       addsbubble('diplomat',"Você é.", 81);
       addsbubble('scientist',"Legal.", 83);
       addsbubble('diplomat',"Você é o cara!", 85);
       addsbubble('scientist',"Que cara?", 88);
       addsbubble('diplomat',"Um dos membros da GARRA.", 90);
       addsbubble('scientist',"Quem é GARRA?", 93);
       addsbubble('diplomat',"GARRA é a melhor!", 95);
       addsbubble('scientist',"Levante-se. Vamos nessa!", 100);
    } else {
       addsbubble('general',"Ferro nos INIMIGOS.", 110);
       addsbubble('general', "Vamos forçar em cima deles.", 118);
       addsbubble('mayor', "Eu vou te ajudar!", 121);
    }

*/