document.getElementById("setting-div").addEventListener('click', function test() {

var scroll = document.getElementById('settings-content');
var displaySetting = scroll.style.marginTop ;

if (displaySetting == '-0.3em') {
  scroll.style.marginTop  = "-5.5em";
  scroll.style.minHeight = "80%"


}
else {
  scroll.style.marginTop  = "-0.3em";
  scroll.style.minHeight = "100%"
}
});