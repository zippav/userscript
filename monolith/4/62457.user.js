// Based on the original emoticonsforblogger by Kuribo (http://www.kuribo.info/2006/04/emoticons-for-blogger.html)
// Modified by thedieyna (http://dieyna-afieyna.blogspot.com/)

// FEATURES
// Works only in Compose modes
// Add the emoticons at the end of the text

// TODO
// modify the script to insert the emoticon directly after the cursor

// ==UserScript==
// @name           Kawaii Emoticons
// @namespace      http://nabilahaziz.blogspot.com/
// @description    You can use emoticons in Blogger.
// @include        http://*.blogger.com/post-edit.g?*
// @include        http://*.blogger.com/post-create.g?*
// ==/UserScript==

window.addEventListener("load", function(e) {


function setemoticons(domname)
{
var editbar = document.getElementById(domname);
  if (editbar) {

    var buttons = "<br />";
                     
        buttons += emoticonButton("twitter", "http://i277.photobucket.com/albums/kk70/safiena_album/twitter.gif");
buttons += emoticonButton("facebook", "http://i277.photobucket.com/albums/kk70/safiena_album/facebook.png");
buttons += emoticonButton("love", "http://i277.photobucket.com/albums/kk70/safiena_album/luv-2.gif");
buttons += emoticonButton("malaysia", "http://i277.photobucket.com/albums/kk70/safiena_album/my-1.gif");
buttons += emoticonButton("rumah", "http://i277.photobucket.com/albums/kk70/safiena_album/home-1.gif");
buttons += emoticonButton("surat", "http://i277.photobucket.com/albums/kk70/safiena_album/03_a05.gif");
buttons += emoticonButton("lollipop", "http://i277.photobucket.com/albums/kk70/safiena_album/lollipop2-2.gif");
buttons += emoticonButton("kasut", "http://i277.photobucket.com/albums/kk70/safiena_album/minishoe.gif");
buttons += emoticonButton("pen", "http://i277.photobucket.com/albums/kk70/safiena_album/luvpen.gif");



       
    buttons += separator();
    editbar.innerHTML += buttons;
  }
}


function emoticonButton(name, url) {
  return "<span class='' style='display: block;' id='htmlbar_undefined' title='" + name + "' onmouseover='ButtonHoverOn(this);' onmouseout='ButtonHoverOff(this);' onmouseup='' onmousedown='CheckFormatting(event);(function() {var rich_edit = document.getElementById(\"richeditorframe\");var rich_body = rich_edit.contentDocument.getElementsByTagName(\"body\");rich_body[0].innerHTML+=\"<img  class=\\\"emoticon\\\"  src=\\\""+url+"\\\" width=\\\"\\\" height=\\\"\\\" alt=\\\"" + name + "\\\" title=\\\"" + name + "\\\" />\";})();ButtonMouseDown(this);'><img src='" + url + "' alt='" + name + "' border='0'></span>\n";
}

function separator() {
  return "<div style=\"display: block;\" class=\"vertbar\"><span style=\"display: block;\" class=\"g\">&nbsp;</span><span style=\"display: block;\" class=\"w\">&nbsp;</span></div>\n";
}

setemoticons("formatbar");

 }, false);
