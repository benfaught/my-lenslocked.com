// dropdown on hover

$('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(250);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(250);
  });

// adds active to nav links according to page users are currently on

var url = window.location;
var theme = decodeURIComponent(document.cookie);
if (theme == "theme=lighttheme") {
  $('ul.navbar-nav a').filter(function () {
    return this.href == url;
  }).removeClass('text-success').addClass('text-primary');
} else {
  $('ul.navbar-nav a').filter(function () {
    return this.href == url;
  }).removeClass('text-primary').addClass('text-success');  }
