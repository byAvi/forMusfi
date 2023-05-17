<html><head><title>Index 16</title></head><body><h1>Index 16</h1><p>.
$(document).ready(function () {
  $("body").css("display", "none");
  $("body").fadeIn(2000);
});

$("#switch").click(function () {
  if (this.checked) {
    $("html").css("background-color", "#94B49F");
    $("html").css("transition", "3s");
    window.location.href = "index-17.html";
  } else {
    $("html").css("background-color", "#4C3A51");
  }
});</p></body></html>