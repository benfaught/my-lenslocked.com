var light = "assets/image_assets/gallerycover2.PNG";
var dark = "assets/image_assets/gallerycover3.PNG";
var lighttheme ="//stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
var darktheme ="//stackpath.bootstrapcdn.com/bootswatch/4.1.2/darkly/bootstrap.min.css";

document.getElementById('light').addEventListener("click", lightphoto);
document.getElementById('dark').addEventListener("click", darkphoto);

if (document.getElementById('pagestyle').getAttribute('href') == darktheme) {
    document.getElementById('photo').setAttribute('src', dark);
} else if (document.getElementById('pagestyle').getAttribute('href') == lighttheme) {
    document.getElementById('photo').setAttribute('src', light);
}

function lightphoto(){
    document.getElementById('photo').setAttribute('src', light);
}

function darkphoto(){
    document.getElementById('photo').setAttribute('src', dark);
}
