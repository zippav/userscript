// ==UserScript==
// @name           Delta College - Educator Autologin
// @namespace      http://www.lonecanoe.com
// @author         Dustin Chilson
// @include        https://*.delta.edu/educator/*
// @include        http://*.delta.edu/educator/*
// ==/UserScript==

var timer = 1000; // Milliseconds to wait for form to autofill (necessary in Firefox 1.5 - slower computers may need to wait longer)
var timo, maySubmit = true;  // Not currently typing (so we can submit it)

// Locate form elements
var form = document.forms.namedItem('form');
var uid = form.elements.namedItem('username');
var pw = form.elements.namedItem('password');

// Don't submit form as we are typing into it
pw.addEventListener('keydown', function(e) {
	maySubmit = false;
	
	clearTimeout(timo);
	
	timo = setTimeout(function() {
		maySubmit = true;
		doSignIn();
	}, 2000);
	
}, true);

function doSignIn() {
	if(uid.value.length && pw.value.length && maySubmit) {  // Form must be non-empty and not being typed into
		form.submit();
	} else {  // Bide our time...
		window.setTimeout(doSignIn, timer);
	}
}

// Attempt to sign in
doSignIn();
