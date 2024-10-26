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

  