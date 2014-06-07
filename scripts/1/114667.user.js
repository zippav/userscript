// ==UserScript==
// @name		Google reader Helvetireader2 reworked
// @description	
// @include	http://www.google.com/reader/*
// @include       https://www.google.*/reader/*

// @match       http*://www.google.*/reader/*

// ==/UserScript==


(function() {
var css = "input, button, select, textarea, option {\n-moz-appearance: none !important;\n}\n\n\n.scroll-tree .folder-icon, .scroll-tree .toggle, .lhn-button, .subscribe-button, .section-button, .tag .icon, .created-icon, .broadcast-icon {\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAA3NCSVQICAjb4U/gAAACtVBMVEX////f39/W1ta9vb21tbWZmZmMjIx7e3taWlpSUlJMTExBQUGFHh5NBQXv7+/m5ua1tbWMjIx7e3taWlpSUlJBQUHmEBCcCwtbBgZPBQVNBQX////39/fv7+/m5ubMzMzLxMSlpaV7e3tzc3NaWlpBQUG+Dw9kBwf////39/fm5ubp4OClpaWZmZlmZmZaWlq+Dw+FHh56CAh1CAj////39/f57+/m5ubMzMylpaWMjIyEhIR7e3tzc3OcCwuMCgqCCQn////39/fv7+/W1tbFxcW1tbXNiIiEhIR7e3taWlqWGRmlCwuMCgr////88/Pm5ubrsLCMjIyEhISVCgr////MzMzxvb2ZmZnvdHSMjIxmZmanIyOvDAylCwucCwv///+urq6ZmZlzc3OzKSnDEBClCwvm5ubMzMy1tbWurq7wmZmlpaWZmZnLHBy4Hx++Dw+vDAz////v7+/f39/6xcWurq6lpaWZmZlzc3PMMzPAISG7HBy+Dw+vDAz////39/f+7+/36OjW1ta1tbWlpaWZmZnldHR7e3vtPDznGBjAISG1EBCyDAz////+7+/v7+/m5ubf39/W1tb4tbW9vb33paWurq7slZX1k5P0i4uZmZl7e3vSKSnOISHDEBD////39/f+7+/v7+/85OTm5ub53d3f39/W1tb/zMzFxcX4tbX3ra21tbWurq71k5OlpaWZmZnvdHSEhIR7e3vcIiLWISHmEBDVEBDPDw/DEBC+Dw/////39/f+7+/v7+/m5ubf39/709PW1tbMzMzFxcX4tbW9vb33ra33paW1tbWurq71k5OlpaX0i4v0hISZmZnvdHSMjIzxa2uEhIR7e3vwWFjvUlLuSkruQUHtPDzsMTHrJibqICDnGBjeGRnZGBjmEBDeEBDVEBDPDw/DEBC+Dw/fHS//AAAA53RSTlMAERERERERERERERERESIiIiIiIiIiIiIiIiIzMzMzMzMzMzMzMzMzREREREREREREREREVVVVVVVVVVVVVVVVVWZmZmZmZmZmZmZmZmZ3d3d3d3d3iIiIiIiIiIiIiIiZmZmZmZmZqqqqqqqqqqqqqqq7u7u7u7u7u7u7u7u7zMzMzMzMzMzMzMzM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) !important;\n}\n.entry .entry-actions .star,.entry .entry-actions .like,.entry .entry-actions .read-state,.entry .entry-actions .broadcast,.entry .entry-actions .broadcast-with-note,.entry .entry-actions .note-delete,.entry .entry-actions .email,.entry .entry-actions .tag,.entry .entry-icons .star {\nbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAFQCAMAAAARPbUBAAAAA3NCSVQICAjb4U/gAAABelBMVEX////8/Pz5+fn4+Pj29vb19fX09PTy8vL+8PDx8fHv7+/t7e3s7Ozr6+v95eXp6en84uLm5ub84eHl5eX83t7k5OT83d3i4uLh4eHf39/e3t7d3d371dXc3Nz709P70tL70dHZ2dnX19fW1tbV1dX6y8vT09PS0tL6xMTPz8/5w8POzs75wcHMzMzLy8v5v7/KysrJycn5u7vGxsb5ubn4tbXDw8P4tLT4srK/v7/4sLD3ra25ubn3p6e3t7f3pqa2tra1tbX2oaGzs7OysrKxsbGurq6tra31l5erq6v1lpapqamnp6empqaioqL0jY2goKCfn5+enp70iIidnZ2cnJz0hYWbm5v0goKampqZmZnzeXnxamrwW1vvVVXvU1PvUlLvUVHvTU3vTEzuS0vuSkruSEjuQkLtPj7tPT3tOTntNjbsMTHsLi7rJibqICDqHx/qHh7qGxvqGhrqGRnqFhbqFxfpFRXpFBTpExPpEhLpERHpEBD///8+qfLuAAAAfnRSTlP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wDMPuZyAAAACXBIWXMAAArwAAAK8AFCrDSYAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M0BrLToAAABS5JREFUeJzt3P1X21QAxvHbbtg6qx3gW1XA6lxlM77hVBS3YdnAzSl1YE1ofStOpiLVjeLS3P/d9IXVg1ly2+ZJctfne05P+aXhc3JubtJ7kgqpVaL/nolVodwx93ysCuX63CljKl6HYn3utDEdr0OxPveccS5eh2I9bsowjHTMEqXEmUVj0GIubk9AQpwqPtQWT4ngT8SacMH53g5ezIuka7tjV+S73Hzisf1Dba7LnYuZolKH25kXCu4rFTcmuA43Z5ROi9MlI+nTguxxC8WUe8SlioW4McF1uP1jTOTjpagk5OCqTJeZQZ/IRUYuMnKRkYuMXGTkIiMX2ePBvRCtQrlHcPejVSjnzV1wFiJ2KObNve3cjtihmDf3rnM3Yodintys4zgzUUuUOsm91HQGNa/EYvLpf3v3bOOhtnE2DpFvHoNho7eDmxvRawLzGrsbXW4StZ7cepdbj1iilAe3My/U3Fc2ek1gHtwrzv68nN93EjctSE9urdF9a9QipqjkNTOceE9Sj8f1blIjFxm5yMhFRi4ycpGRi4xcZOQiU+dmSuWKBZQopcrNrZhmdasCtSikyF2yzK3rb7/4BBYTnBI3vW5WVxNxl5kKN71ubc6542H5lhZjd9366mmZKVvm9jdwT0AK3CWr8pQsbJrbq0UNxm7OrL4sC6b5ZRJu4gvmrpiXZWbTXEvL6ZXkj92MuZ2TZfNmWi65M28UJL8CuSXzC5mztmddbXX1hShIfgVy16rvymXzmpy1qhejAPkXyK1sPydvVV+TK9Y1mV6LguRXINfaerL3qr4k15J/qCUrcpGRi4xcZOQiIxcZucjIRUYusonhztxoNNshSpQalbtQtx8c3v8rVItCI3J32g/u/frtB8+EiwluJG52zz76YT5sikqjcLN77YNP3fFQ29di7O61/3xVzvzctlt/h+4JaATuTrv5ivzowG79+JkGY3fBPvxEXrLtP94AcIIanlu3v5czB/YvWflmPfljd8ZuzcuG/XtW7tj2IYLk19DcG/ZvcqHdesvVHv30PoLk19Dc3X++kzX7jrzQPvoaAfJvaG6z9Y7cP/pc1tt3ZHYXQfJraK5z73np3H9Wto8+lrsOguTXxFxAxhK5yMhFRi4ycpGRi4xcZOQiIxfZ+NyLg98Uxd9bND73Pz+BaoQA8i8MruhH7snIRUYuMnKRTdxpQrOTcKSRi4xcZOQiIxcZucjIRUYuMnKRkYts4rmDr5rvXQ594+FzB1+Mb1rFsDeO4PZXSc5b4f/6BI6bqVgfhr5xDLeYEaJsXQ1/VQfCLVqVnGGVAYtQmL27bFWsSlobruu1CogVSdShtrwEWUBFcdNpbbjA9V7kSRiw3jvxlzjQyEVGLjJykZGLjFxk5CIjFxm5yMhFRi4ycj0KbZmEXI/IRUYuMh25Qoz/z6LkarZ3jczYG+JJGBm5yMhFRi4ycpGRi4xcZOQiIxcZucjIDWqcG83i4Hbu3+utk2jB7XtHueswnsHQkXbNw342prHbe4JfF67o7Ftt9u7xoaYHVxxPY5rMDFrNu+NELjJykZGLjFxk5CIjFxm5yMhFRi4ycpGRi4xcZOQiIxcZucjIRUYuMnKRkYuMXGTkIiMXGbnIyEVGLjJykZGLjFxk5CIjFxm5yMhFRi4ycpGRi4xcZOQiIxcZucjIRUYuMnKRacI98/pU910P7qxhGPnOHzpwU3PGtJg25lJ6cEvdR/gNo6QH1x0Js2K2+8y2JtzjR8zJDT1ykZGLjNyI+hevm1cZSuVCvgAAAABJRU5ErkJggg==) !important}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nbody{ background-color:#f4f4f4 !important;}\n\n#main{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAGQCAYAAACXuPEsAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAAVdEVYdENyZWF0aW9uIFRpbWUAMTAvMS8xMA6Pz8cAAADnSURBVHic7ZcxDoMwEASNxf//6UcAKaK01iGNJTbMtox8s3cVrRljjDHGvCPbGGObAtv38957n4K/7K21Etgr0K0XE0b/VZmEPSY4JpRJ2KOODKgjA+rIgDoyoI4MqCMD6siAOjKgjgyoIwPqyIA6MqCOTx39zjLemgHdIwMmlPHWDOgep0lwTCiTsMcEx4QyCXvUkQF1ZEAdGVBHBtSRAXVkQB0ZUEcG1JEBdWRAHRnQ32YGTCjjrRnQPTLgrTIleEGZ67r4F0tl6utZ4siDFW7RaNjxPM8amDD6zos18DiOGlgeXQU/vt9ELu/VMV8AAAAASUVORK5CYII=) !important;background-position: left bottom !important;background-repeat:  repeat-x !important;}\n\n\n\n#logo,.gbh, #gbar,\n.scroll-filler-recs-message .secondary,\n#directory-selector,\n#recommendations-tree,\n#lhn-recommendations,\n#viewer-footer,\n#friends-tree,\n#chrome-view-links,\n#trends-selector,\n#entries-status,\n.entry-likers,\n#settings-link,\n#search-restrict,\n#search-submit,\n#ogspacer,\n.entry-actions .star,\n.entry-title-go-to,\n#chrome-title,\n#lhn-selectors .selector-icon,\n.lhn-hidden #search,\n.like   {display: none !important;}\n\n\n#chrome-header, \n.card-actions,\n#viewer-top-controls, \n#chrome-view-links, \n#viewer-header, \n#viewer-footer, \n#chrome-lhn-toggle, \n.lhn-section, \n#chrome, \n#viewer-container, \n#entries.list .entry, \n.collapsed,\n#entries.list #current-entry.expanded,\n#entries.list #current-entry.expanded .entry-actions,\n.scroll-tree li,\n.card, \n.card-bottom,\n#search-restrict,\n#chrome.page-view #viewer-page-container,\n#footer  {\n	background: none !important;\n	border-color: transparent !important;\n	-webkit-box-shadow: 0 0 0 !important;\n}\n\n\n\n#directory-tour,\n#featured-bundles-container,\n#lhn-selectors .selector:hover,\n.lhn-menu #lhn-add-subscription-section .goog-button-body:hover,\n.friends-tree-notification-info,\n.friends-feeds-invite-info,\n#friends-tree .friends-tree-following-info,\n.progress-message .message-area-inner,\n.small-interruption,\n.preview-interruption,\n.friend-interruption.preview-interruption,\n.bookmarklet-container .bookmarklet-callout-inner,\n.recommended-feed-highlight,\n.scroll-tree li a:hover,\n.scroll-tree li .updated,\na:hover .tree-item-action-container,.scroll-tree li a.menu-open,\n#featured-bundles-promo,\n#explore-promo {\n	background: rgba(255,255,255,0.6) !important;\n}\n\n\n.goog-button,.goog-button div{\n	background: none !important;\n	border-color: transparent !important;\n	padding: 0 !important;\n}\n\n#entries-status{right: 36px !important;}\n\n\n.subscribe-button {\n	margin: 0 0 0 -6px !important;\n	background-position: -64px -81px !important;\n	height: 20px !important;\n}\n.subscribe-button,\n.folder-name-text,\n.scroll-tree .name,\n.selector .text,\na#sub-tree-subscriptions,\n#recommendations-tree-view-all,\n#chrome-lhn-menu .goog-button-body,\n#friends-tree-item-0-name,\n#footer a,\n#sub-tree-header,\n#friends-settings-link a,\n.interruption p {\ncolor: #888 !important; \nfont-weight: normal !important;\n}\n\n\n\n#mark-all-as-read {\npadding:0 5px!important;\nbackground:#fff!important;\nborder:1px solid #d1d1d1!important;\nborder-radius:3px!important;\n-moz-border-radius:3px!important;\n-webkit-border-radius:3px!important;\n}\n\n.entry-title {color: red !important;}\n\nh2 {\ncolor:#999!important;\n}\n\n#lhn-add-subscription  {\nmargin:5px 0 4px 10px!important;\n}\n\n#quick-add-bubble-holder {\nborder-radius:3px!important;\n-moz-border-radius:3px!important;\n-webkit-border-radius:3px!important;\n}\n\n#quick-add-bubble-holder form input {\nbackground:#fff!important;\ncolor:#888!important;\nmargin-top:2px!important;\npadding:4px!important;\nborder-radius:3px!important;\n-moz-border-radius:3px!important;\n-webkit-border-radius:3px!important;\n}\n\n#quick-add-bubble-holder form #quick-add-helptext {\nfont-size:0!important;\n}\n\n#quick-add-close {\nbackground:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADjSURBVBiVjdBBSsNQGMTx//doQkjRpg9LCz2HIiLoQhDBsxQXHsOVZ1FEXSgi9ShGq2RhK6l5zbgKBled3cAsfoxJYp3Ye5ZNMNtTXRdKkvNhni8A3kajrpXlhTnXR5rap/ebYbW6xWwXeLYoOqmdE8vltcEB0ouLomOTROF9r5LugB1gKqjao63Z7MsaY+F9L0j3gm2A9gjANdifOA41fP/pbVEmSWiqa+BtE/AEHMXz+dXreJwCWD4cdv/DZSZV1Q2wb/AQ0vTU8iw7MzgECtfpTBrTx2CwUYdwCfQFj7bu4b9UJXLFW9PV7QAAAABJRU5ErkJggg==) no-repeat!important;\n}\n\n#quick-add-btn {\nfont:bold 12px Helvetica, \"Helvetica Neue\", Helvetica-Neue, Helvetica, \"MgOpen Moderna\", sans-serif !important;\ntext-shadow: 0 2px 0 #fff;\nfloat:right!important;\nmargin:5px 8px 10px 0!important;\n} \n\n.goog-button-body {\ncolor:#999!important;\n}\n\n.goog-button-body:hover {\ncolor:#777!important;\n}\n\n.entry-main .entry-original {\nbackground:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARBJREFUeNpi/P//PwMMfBAQ4AJSAkDMA8ScUOHvQPwFLP3hwzeYWkaYRqAmUSAlBsQcDNjBDyB+BdT8Gq4RqkkaiJkZ8IO/QPwUpJkJ6jwxZE2cL1+e4bh+vZ9t1iwrRhkZNiSNIDViID1MUD9hOI+Rh0eVSUfHiCU1VZlRUpIVSQqkVoAFGhCYgI1NglFZOYFZWFiTUU1t46/IyF1IsjwsSKGHDkChxsgoIGDObGurCGQja+RkYiATsEDjiReLHCPY2g8fTv47d24jmtx3FmjkYmr89evF/8ePd/zdvXvvnxkz7qDJfgE59QM0clE9+OXL7X9Xrpz7M3v23f/Pn/9GSwgfyE4AlCU5chI5QIABAOY2c+Io6V46AAAAAElFTkSuQmCC) no-repeat!important;\n}\n\n.collapsed:hover {\nbackground:#f0f0f0!important;\n}\n\n\n\n#sub-tree-header{color:#bbb !important;}\n#friends-tree {margin: 0 0 0 15px !important;}\n#friends-tree .link {padding: 0 0 0 10px!important;}\n#friends-settings-link {padding: 0 0 0 33px!important;}\n#sub-tree .folder-name-text {margin: 0 0 0 4px !important;}\n.tree-link-selected { background: none !important; }\n.tree-link-selected .name-text { color: #000 !important;}\n\n#lhn-selectors .selected,#lhn-selectors .selected:hover{ background-color:transparent !important;}\n.selected .link,.selected .text {color: #000 !important;font-weight: bold !important;}\n\n\n\n#home {padding: 20px !important;}\n#overview .item-title {font-weight: bold !important;font-size: 16px; display: block;color: #333!important;}\n.overview-metadata{margin: 0 0 1em 0 !important;}\n\n\n\n\n\n\n\n\n\n\n.lhn-menu #nav {\nleft: auto !important;\nright: 80px !important;\n}\n#chrome-lhn-menu {\nposition: fixed !important;\nmargin: 0!important;\nleft: auto !important;\nz-index:9999 !important;\nheight:auto !important;\ntop: 36px !important;\nright: 12px !important;\n}\n\n#nav {\nmargin: 12px 0 0 0 !important;\nwidth: 200px !important;\n}\n\n#search {\nposition: fixed !important;\nmargin: 0!important;\nleft: 10px !important;\nbottom: 6px !important;\nz-index:9999 !important;\nheight:auto !important;\ntop: auto !important;\n}\n#search-input {\nborder: 1px solid #eee !important;\nborder-radius: 0;\nwidth: 183px !important;\nbackground-color:#f4f4f4 !important;\ncolor:#999!important;\nfont-weight:bold!important;\ntext-shadow: 0 1px 0 #fff;\n}\n#lhn-subscriptions {\nmargin: 0 !important;\n}\n.lhn-section-footer{\npadding-bottom: 32px !important;\n}\n\n\n.unread-count { color: #E91010;}\n.link {\npadding-left: 0px !important;\n}\n.folder-icon {\nmargin-left: 24px !important;\n}\n.folder-name {\npadding-left: 42px !important;\n}\n.sub-icon {\ndisplay:none;\n}\n.sub-name {\npadding-left: 26px !important;\n}\n\n#chrome {\nmargin: -50px 0 10px 200px !important;\n}\n.lhn-hidden #chrome {\nmargin: -50px 0 10px 0px !important;\n}\n\n\n\n#chrome-lhn-toggle-icon {\nborder-color: #f4f4f4 #ddd #f4f4f4 #ddd !important;\nmargin-left: 1.5px !important;\n}\n#chrome-lhn-toggle:hover #chrome-lhn-toggle-icon {\nborder-color: #f4f4f4 #aaa #f4f4f4 #aaa !important;\n}\n\n\n\n.entry-conversation {\nborder-color:#ddd !important;\n}\n#viewer-details-toggle {\ndisplay:none !important;\n}\n#entries {\nborder-top: 1px solid #ddd !important;\nborder-left: 1px solid #ddd !important;\n}\n#no-entries-msg,\n#current-entry .card,\n.card  {\nborder: 0 !important;\nborder-radius: 0 !important;\nbox-shadow: 0 0 0 !important;\nmargin: 0 !important;\nborder-bottom: 1px solid #ddd !important;\n}\n#current-entry .card-content,\n.card-content {\npadding: 6px !important;\n}\n.entry-author,\n.card-bottom {\ndisplay:none !important;\n}\n.entry-author,\n.entry-date {\ncolor: #ddd !important;\n}\n.entry-author:hover,\n.entry-date:hover {\ncolor: #aaa !important;\n}\n.entry .entry-body {\nline-height: 1.6 !important;\npadding-top:16px !important;\n}\n.entry .entry-icons {\npadding-top:2px !important;\n}\n.item-body {\npadding-bottom:6px !important;\n}\n#scroll-filler {\ndisplay:none;\n}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
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