
var light = "assets/image_assets/gallerycover2.PNG";
var dark = "assets/image_assets/gallerycover3.PNG";
var lighttheme ="//stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
var darktheme ="//stackpath.bootstrapcdn.com/bootswatch/4.1.2/darkly/bootstrap.min.css";



//eventlisteners

document.getElementById('light').addEventListener("click", lightmode);

document.getElementById('dark').addEventListener("click", darkmode);


//functions
function lightmode(){
document.cookie = "theme=lighttheme;path=/";
document.getElementById('pagestyle').setAttribute('href', lighttheme);


// document.getElementById('main-nav').setAttribute('class', document.getElementById('main-nav').getAttribute('class')+' nav_light navbar-light bg-light');
$('#main-nav').removeClass( "navbar-special bg-primary navbar-dark" );
$('#main-nav').addClass( "navbar-light bg-white" );

var url = window.location;
$('ul.navbar-nav a').filter(function () {
    return this.href == url;
  }).removeClass('text-success').addClass('text-primary');

console.log(mode);
}

function darkmode(){
mode = document.cookie = "theme=darktheme;path=/";
document.getElementById('pagestyle').setAttribute('href', darktheme);
$('#main-nav').removeClass( "bg-white" );
$('#main-nav').addClass( "navbar-special bg-primary" );

var url = window.location;
$('ul.navbar-nav a').filter(function () {
    return this.href == url;
  }).removeClass('text-primary').addClass('text-success'); 
console.log(mode);
}

