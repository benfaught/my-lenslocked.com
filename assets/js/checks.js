
function themeCheck() {
    var lighttheme ="//stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
    var darktheme ="//stackpath.bootstrapcdn.com/bootswatch/4.1.2/darkly/bootstrap.min.css";
    var theme = decodeURIComponent(document.cookie);
    if (theme == "") {
       document.getElementById('pagestyle').setAttribute('href', darktheme)
    } else if (theme == "theme=darktheme") {
        document.getElementById('pagestyle').setAttribute('href', darktheme)
    } else if (theme == "theme=lighttheme") {
       document.getElementById('pagestyle').setAttribute('href', lighttheme)
    }
}


function navBarCheck() {
    var lightclass ="navbar navbar-expand-lg fixed-top nav-pad navbar-light bg-white";
    var darkclass ="navbar navbar-expand-lg nav-pad navbar-dark bg-primary fixed-top navbar-special";
    var theme = decodeURIComponent(document.cookie);
    if (theme == "") {
       document.getElementById('main-nav').setAttribute('class', darkclass)
    } else if (theme == "theme=darktheme") {
        document.getElementById('main-nav').setAttribute('class', darkclass)
    } else if (theme == "theme=lighttheme") {
        document.getElementById('main-nav').setAttribute('class', lightclass);
    }
} 