// ==UserScript==
// @name          Flickr in mostly white, grays and black
// @namespace     http://userstyles.org
// @description	  I do not really like the white background and text colors of Flickr photo pages (the color schemes of other pages are less important).  Black makes a better background for most photographs.  This user style scratches that itch
// @author        Blander bryce 
// @homepage      http://userstyles.org/styles/3746 http://userscripts.org/scripts/edit_src/31404
// @include       http://*
// ==/UserScript==
(function() {
var css = "@namespace url(http://www.w3.org/1999/xhtml); body, #Photo p, #Photo .TagList, #Photo #otherContexts_div, #Photo #button_bar, #Photo .Stats, .Photostream, .SetsColumn, .For div { background-color: black !important; color: gray !important; } td { font-size: 12px; color: #00b4ff; } #person_hover { position:absolute; width:80px; height:58px;  display:none;} #person_hover .shadowLight { position:absolute; top:1px; left:1px; width:79px; height:58px; background-color:#0dd84d; } #person_hover .shadowDark { position:absolute; top:1px; left:1px; width:79px; height:58px; background-color:#666666; } #person_hover_inner { position:absolute; top:0px; left:0px; width:75px; height:54px; background-color:#000000; border:2px solid #0dd84d; } #person_hover_link { display:block; position:absolute; top:3px; left:4px; width:48px; height:48px; margin:0px; border:0px; } .person_hover_img { display:none; position:absolute; top:0px; left:0px; width:48px; height:48px; margin:0px; cursor:pointer; border:0px; } #person_hover_pulser_img { display:none; position:absolute; top:19px; left:12px; border:0px; } #personmenu_button_bar {position:absolute; display:block; top:3px; left:56px; width:15px; height:48px; cursor:pointer; overflow:visible} #personmenu_down_menu {position:absolute; background:black; width:176px; display:none; margin-left:-58px; padding-bottom:3px; border-left: 2px solid #0dd84d; border-bottom: 1px solid #0dd84d; border-right: 1px solid #0dd84d; border-top: 2px solid #0dd84d; z-index: 600;} #SubNav .Section .Links .Here { color: #0dd84d; font-weight: bold; } #SubNav .Section small {font-weight: normal;}#personmenu_button_bar .candy_menu p { text-align:left;	margin:4px;	padding:2px 4px;	font: normal 12px Arial, Helvetica, sans-serif;	color:0dd84d !important; } #personmenu_border_blocker {	position:absolute;	width:75px;	height:2px;	top:-2px;	left:0px;	overflow:hidden;	background-color:0dd84d;} #personmenu_button_bar .candy_menu div.menu_item_line_above {	margin: 3px 4px 0 4px;	border-top: 1px solid #0dd84d;} #candy_nav_button_bar .candy_menu, #candy_search_button_bar .candy_menu {	display:none; position:absolute;	border-left:1px solid #0dd84d;	border-right:1px solid #0dd84d;	border-bottom:1px solid #0dd84d;	border-top:0;	width:180px;	z-index: 5000;	background-color:black;	text-align:left; } #candy_nav_button_bar .candy_menu a, #candy_nav_button_bar .candy_menu a:link { font-weight: normal; display:block; margin:6px; padding:0px; font-size: 11px; text-decoration:none !important; color:#0063DC !important; } #candy_nav_button_bar .candy_menu a:hover, #candy_nav_button_bar .candy_menu a:active { color: #0063DC !important; background: white; text-decoration:underline !important; } #candy_nav_button_bar .candy_menu a.menu_item_line_above { margin-top: 10px;	padding-top: 8px;	border-top: 1px solid #0dd84d; } /* PAGINATOR */.Pages { text-align: center; margin-bottom: 20px; margin-top: 20px; } .Paginator { font-size: 12px; padding-top: 10px; margin-left: auto; margin-right: auto; /* padding-bottom: 10px;  background-image: url(http://l.yimg.com/g/images/dotted.gif); background-repeat: repeat-x; background-position: left bottom; */ } .Paginator a, .pageList .this-page { padding: 2px 6px; border: solid 0px #ddd; background: #0dd84d; text-decoration: none; } .Paginator a:visited { padding: 2px 6px; border: solid 0px #ddd; background: #0dd84d; text-decoration: none; } .Paginator .AtStart { margin-right: 20px; padding: 2px 6px; /* border: solid 0px #ddd; */ background: #0dd84d; color: #aaa; } .Paginator .Prev { margin-right: 20px; padding: 2px 6px; border: solid 0px #ddd; background: #0dd84d; } .Paginator .break { padding: 2px 6px; border: none; background: #0dd84d; text-decoration: none; } .Paginator .Next { margin-left: 20px; padding: 2px 6px; border: solid 0px #ddd; background: #0dd84d;} .Paginator .AtEnd { margin-left: 20px; padding: 2px 6px; /* border: solid 1px #ddd; */ background: #fff; color: #aaa; } .Paginator .this-page {padding: 2px 6px; border-color: #999; font-weight: bold; font-size: 13px; vertical-align: top; background: #fff; color: #FF0084; } .Paginator a:hover {color: #fff; background: #0063DC; border-color: #036; text-decoration: none;} /* .Paginator .ranking {display: block; margin-top: 0.5em; font-weight: bold;} .Paginator .ranking a {padding: 0; border: 0; background: transparent;} */ .Pages div.Results { text-align: center; font: 11px/15px Arial, Helvetica; color: #aaa; margin-top: 8px; } /* new site nav for l10n */ .site_nav_menu_buttons {list-style:none;margin:0;padding:0;} .site_nav_menu_buttons li {float:left;font-size:13px;line-height:13px;position:relative;z-index: 998;border:1px solid #0dd84d;border-bottom:1px solid #0dd84d} /* IntlRef: sea.css */ .site_nav_menu_buttons li.menu_li {margin-right:3px} .site_nav_menu_buttons li.no_menu_li {margin-right:16px;}  /* IntlRef: de-de.css */ * html .site_nav_menu_buttons li.no_menu_li {margin-top:2px} .site_nav_menu_buttons li span {padding:4px 2px 4px 6px;display:block;border-right:1px solid #0dd84d; white-space:nowrap;cursor:pointer} * html .site_nav_menu_buttons li span{cursor:hand} .site_nav_menu_buttons li img {vertical-align:top;margin-left:4px} .site_nav_menu_buttons li a, .site_nav_menu_buttons li a:visited, .site_nav_menu_buttons li a:link {text-decoration:none; font-weight:bold;color:#0063DC} /* IntlRef: sea.css */ .site_nav_menu_buttons li a:hover, .site_nav_menu_buttons li a:active {background:none !important;color:#0063DC;text-decoration:underline} .site_nav_menu_buttons li.hover {border:1px solid #0dd84d;border-bottom:1px solid #fff;border-right-color:#0dd84d;} .site_nav_menu_buttons li.hover span {border-right:1px solid #0dd84d;} .site_nav_menu_buttons li.hover_left a, .site_nav_menu_buttons li.hover_left a:link, .site_nav_menu_buttons li.hover_left a:visited {text-decoration:underline} /* PRIMARY NAVI */ .TopBar { background-image: url(http://911shop.free.fr/Flickrstock/dotted2.gif); background-repeat: repeat-x; background-position: left bottom; text-align: center; padding-bottom: 4px; } #thetags .Plain:link { color: #0dd84d; } .ContextsOther { padding-right: 0px; margin-top: 20px; } .ContextsOther #other_contexts_p { font-size: 14px; color: #666; margin-bottom:8px; } h3.contextTitleOpen { font-size: 14px; margin: 0 15px 0 2px; border:1px solid #0dd84d; border-bottom:0px; padding: 3px 4px 4px 4px; width: 195px; } h3.contextTitleClosed { font-size: 12px; margin: 1px 15px 0 2px; border:1px solid #f3f3f3; padding: 3px 4px 4px 4px; width: 195px; }#SlideShowButton, #ShareButton { background:transparent url(http://l.yimg.com/g/images/sharing_sprite.gif) no-repeat 100% 3px;border:solid 1px #0dd84d;padding:5px 26px 5px 6px;color:#a1a1a1;white-space:nowrap;text-decoration:none;z-index:252;} #ShareButton { border-bottom:solid 5px #0dd84d; } #ShareButton.share_button_on { background-color:#efefef;border:solid 1px #0dd84d;border-bottom:solid 5px #0dd84d;background-position:100% -41px;color:#000; } #ShareButton.share_button_on:hover { border-bottom:solid 5px #0dd84d;background-position:100% -63px; } #SlideShowButton { background-position:100% -85px;padding-right:29px;margin-right:5px;} #SlideShowButton:hover { color:#0259C4;background-position:100% -108px; } #ShareMenu { clear:both;float:none;position:absolute;z-index:50;top:27px;right:0px;white-space:normal;text-align:left;background-color:#0dd84d;display:none;padding:6px 6px 14px 6px;width:312px;border:solid 1px #000000;} #ShareMenu h4 { font-size:13px;font-weight:bold;margin:0;color:#000;text-transform:uppercase; .contextThumbsRow span { padding: 0px; margin: 0px; } .contextThumbsRow img { margin-right: 1px; display:inline; border: 1px solid #0dd84d; } .contextThumbsRow img.crap { margin: -1 0 0 0; display:inline; border: 0; } .contextThumbsRow img.nomore { border: 1px solid #0dd84d;} #Photo  #AdBlock, #NotSearchAdBlock, .Ad, .Spiel, #beacon, #homepage_ad, .UpgradeBox, .HomeBox, .LeftCol a img  #Photo a:hover, .SetsColumn a:hover, #Subnav a:hover, #Hint a:hover, .DiscussionResults a:hover, .ResultSet a:hover, .StreamView a:hover, #Viewset a:hover, .RightCol a:hover, #ProfileInfo a:hover, .Footer a:hover, .Infocase a:hover #Photo a:visited, .SetsColumn a:visited, #Subnav a:visited, #Hint a:visited, .DiscussionResults a:visited, .ResultSet a:visited, .StreamView a:visited, #Viewset a:visited, .RightCol a:visited, #ProfileInfo a:visited, .Footer a:visited, .Infocase a:visited #Photo a:link, #Photo .Plain:link, .SetsColumn a:link, #Subnav a:link, #Hint a:link, #DiscussionResults a:link, .ResultSet a:link, .StreamView a:link, #Viewset a:link, .RightCol a:link, #ProfileInfo a:link, .Footer a:link, .Infocase a:link .site_nav_menu_buttons a:visited #Photo #DiscussPhoto p small, .launchHead small #Photo #DiscussPhoto h3, #Photo .Taglist h4, #Photo .RHS h4, #Photo .Widget, #Photo #other_contexts_p, #Left h3, #Right h3, .Jump th #Photo .Said p, div div h1, div div h3, div table h3 #photoswftd h1, .photoDescription .site_nav_menu_buttons, .site_nav_menu_buttons li, .site_nav_menu_buttons li.menu_l #GoodStuff td .Status .Status a #Photo #otherContexts_div a, #thetags a ";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();