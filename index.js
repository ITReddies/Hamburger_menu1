
function change() {
  var decider = document.getElementById("menu_checkbox");
  if (decider.checked) {
    document.getElementById("myNav").style.width = "100%";
  } else {
    document.getElementById("myNav").style.width = "0%";
  }
}
