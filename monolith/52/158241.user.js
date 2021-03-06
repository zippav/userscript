// ==UserScript==
// @name        Twitter User Timeline RSS Link
// @namespace   http://userscripts.org/users/464753
// @include     http://twitter.com/*
// @include     https://twitter.com/*
// @version     1
// ==/UserScript==
setTimeout(function(){addRSSLink(1);}, 1000);

function addRSSLink(count){
	var url = window.location.href;	

  var url2 = url.substring(20);
  var pos2 = url2.indexOf("/");
  var username = url2;
  if(pos2>0){
    username = url2.substring(0,pos2);
  }

  var profileClasses = document.getElementsByClassName("profile-card-inner");
  if(profileClasses.length>0){
    var profileInfo = profileClasses[0];
    var usernames = profileInfo.getElementsByClassName("username");
    if(usernames.length>0){
      var usernameContainer = usernames[0];
      var rssDiv = document.createElement("span");
      var icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH2QcREw0tTXE0vAAAAsNJREFUOI1tkk1oXFUUx3/nfrzOTEOb1LwBtZ2kjYpCNVCrlVTRhaJQ3bgwXbSNCIUGuijaIkJxoS78ALcSVxFUUCIUqaJLF4KQxtR+LVqxltA2TJMZ0XQmb96797iYNBji4V7OXdzf4f8/5wjAuSODr/al6YdGTL8xiBhBjCACYoDVt6CodtrFQuNG/cTOT/78TC6MD45V761NZotNrBOMN1gvGLf+ihWM7RbvhDLXZq+OydzJ3XVaWbqhOsDGJ0fRpTph/iJx/jzG6v/CYiB0lEZd684lvl+zDrYvpbL3AHdCW03yc1MUv32BxOV1cMgiSdmnBhDjDbK8SHb+O4q5WYgFUukjeeIw5YNTuG2ProOLLKIBkfn3RtTm7TVe7cZN+J378I+9hpR6IRaEnz8gv3h6FQ5ZJDcljBgwTkhqj7DpyCkqL3+Mv/9pwqVvyL/eT7z5KxiH3fsmVHetwkUWQcGIrDTJO0zvVtyOp0iefZvS6JdIT0r48Rjx+hkwjg0vvEukTJFFYq7EqBhWFNC4QnbqKMXMJGT/IL0D+Jc+JVZqLJ9+C73dQCpbSPaMEXMl5IpGMCLdAqJt4s0zhJkJ8qn96K1L4Mv4598nX7pN66cJACp7RonREjoRov7HghX88Cv4Z04iSZnO92+grSZm81bcgy/Smv4WzTOk1IMb3E3MFVW6FsQKNh3CjbyOeWAfsmuc4q8G2cxXAPiHniO02mS/TwOQ1IaJhaJdBaixAstN6CwBEBevUWSRzpVfAHDVIUKu5LfmALCbq8RCQUXl+juP1/vvtqkYiP4utHwP2R+zhCwQtIQfGiEWsDT9A656HzbdTr4wT/vyWZJtPXW5MD44NjC8Y9Jpa82S3BlVyJXQWRlboSvSoVLbQrNx45AAnD28/WC1ln7knK0SkRi6nzSuzah2j9f63wuLxx+euPr5vxbuZpK4rkZRAAAAAElFTkSuQmCC";
      rssDiv.innerHTML = "<a class=\"url\" href=\"http://api.twitter.com/1/statuses/user_timeline.rss?screen_name="+username+"\"><img class=\"icon\" width=\"16px\" height=\"16px\" title=\"RSS Feed of the Tweets of "+username+"\" alt=\"RSS\" src=\"" + icon + "\"/></a>";
      rssDiv.style.marginLeft="3px";
      usernameContainer.appendChild(rssDiv);
    }
  }else{
    if(count<5){
      setTimeout(function(){addRSSLink(count+1);}, 5000);
    }
  }
  
  if(count==1){
    var headerLink = document.createElement('link');
    headerLink.rel = 'alternate';
    headerLink.type = 'application/rss+xml';
    headerLink.title = 'RSS Feed for the Tweets of '+username;
    headerLink.href = 'http://twitter.com/statuses/user_timeline/'+username+'.rss';
    var header = document.getElementsByTagName('head')[0];
    header.appendChild(headerLink);
  }

}