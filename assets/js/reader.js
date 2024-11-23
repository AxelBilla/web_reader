function readFiles() {
    const content = document.querySelector("#content-images");
    const files = document.querySelector("input[type=file]").files;
  
    function readAndDisplay(file, index) {
        const reader = new FileReader();
  
        reader.addEventListener(
          "load",
          () => {
            const image = new Image();
            image.src = reader.result;
            image.style.order=index;
            image.classList.add("imgDisplay")
            content.appendChild(image);
          },
          false,
        );
  
        reader.readAsDataURL(file);
    }
  
    if (files) {
      Array.from(files).toSorted((file1, file2) => {
        file1.name.localeCompare(file2.name)
      }).forEach(readAndDisplay);
      document.getElementById("upload-box").style.display= "none";
    }
  }
  const picker = document.querySelector("#upload");
  picker.addEventListener("change", readFiles);

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
  