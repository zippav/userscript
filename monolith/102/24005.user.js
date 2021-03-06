// ==UserScript==
// @name           text_counter white background
// @namespace      based on the scrip wrote by gomaxfire.dnsdojo.com
// @include        *
// ==/UserScript==

function makeCounter(textarea){
   if(!textarea || textarea._already_count)
     return;
  var length = -1;

   setInterval(function(){
     var taLength = textarea.value.length;
     if(taLength != length){
       length = taLength;
       count();
     }
   }, 100);

   var div = document.createElement("div");
   with(div.style){
     textAlign = "left";
     backgroundColor = "#FFFFFF";
     color = "black";
   }
  div.appendChild(document.createTextNode("count:"));
  var countArea = document.createElement("span");
  countArea.style.margin = "5px";
  div.appendChild(countArea);
  div.appendChild(document.createTextNode("not include"));
  var checks = "line,space,tab".split(",");
  var inputs =  checks.map(function(check){
    var label = document.createElement("label");
    var input =document.createElement("input");
    input.type = "checkbox";
    input.style.margin = "2px";
    label.appendChild(input);
    label.appendChild(document.createTextNode(check));
    div.appendChild(label);
    return input;
  });
  inputs.forEach(function(input){
   input.addEventListener("change", count, true)
  });
  textarea.parentNode.insertBefore(div, textarea.nextSibling);
  textarea._already_count = true;

  function count(){
     var value = textarea.value;
     var filter = {
       line: /\r|\n/g,
       space: /\s/g,
      tab: /\t/g
    };
    for(var i=0;i<checks.length;i++){
      if(inputs[i].checked){
        value = value.replace(filter[checks[i]], "");
      }
     }
     var num = value.length;
       countArea.innerHTML = num;
  }
 }

 var tas = document.getElementsByTagName("textarea");
 Array.prototype.forEach.call(tas, function(ta){
  ta.addEventListener("dblclick",
                       function(e){makeCounter(ta)}, true);
 });