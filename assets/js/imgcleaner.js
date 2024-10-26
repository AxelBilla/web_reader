document.getElementById("clear-button").addEventListener('click', function test() {
  document.querySelector("#content-images").replaceChildren();
  document.getElementById("upload-box").style.display= "flex";
  document.getElementById('settings-content').style.marginTop  = "-5.5em";
  document.getElementById('settings-content').style.minHeight = "80%"

});