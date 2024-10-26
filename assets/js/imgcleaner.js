document.getElementById("clear-button").addEventListener('click', function bike() {
  document.getElementById("clear-button-warning-box").style.display= "flex";
  document.getElementById("clear-button-warning-bg").style.display= "flex";

});

document.getElementById("clear-button-warning-bg").addEventListener('click', function mike() {
  document.getElementById("clear-button-warning-box").style.display= "none";
  document.getElementById("clear-button-warning-bg").style.display= "none";
  document.getElementById('settings-content').style.marginTop  = "-5.5em";
  document.getElementById('settings-content').style.minHeight = "80%"
});

document.getElementById("clear-button-warning-btn").addEventListener('click', function dike() {
  document.querySelector("#content-images").replaceChildren();
  document.getElementById("upload-box").style.display= "flex";
  document.getElementById("clear-button-warning-box").style.display= "none";
  document.getElementById("clear-button-warning-bg").style.display= "none";
  document.getElementById('settings-content').style.marginTop  = "-5.5em";
  document.getElementById('settings-content').style.minHeight = "80%"

});