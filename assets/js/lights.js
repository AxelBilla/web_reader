window.addEventListener("load",function(){
  document.getElementById("modifier").setAttribute("href",localStorage.cssSheet);
});

function swapStyleSheet(sheet) {
  document.getElementById("modifier").setAttribute("href", sheet);
  if(sheet == 'light.css' || sheet == 'index.css'){
    localStorage.cssSheet = '../../'+sheet;}
  else {
    localStorage.cssSheet = sheet;
  }
}

document.getElementById("light-modes").addEventListener('click', function test() {

  var dark = document.getElementById('dark-switch');
  var light = document.getElementById('light-switch');
  var butt =  document.getElementById("light-modes");
  var mainPage = document.getElementById("indexPage");

  if (mainPage) {
    if (dark.style.display == 'flex') {
      dark.style.display = 'none';
      light.style.display = 'flex';
      butt.onClick = swapStyleSheet("light.css");
    
    }
    else {
      dark.style.display = 'flex';
      light.style.display = 'none';
      butt.onClick = swapStyleSheet("index.css");
    }
  }
  else {
    if (dark.style.display == 'flex') {
      dark.style.display = 'none';
      light.style.display = 'flex';
      butt.onClick = swapStyleSheet("../../light.css");
    
    }
    else {
      dark.style.display = 'flex';
      light.style.display = 'none';
      butt.onClick = swapStyleSheet("../../index.css");
  }};
});