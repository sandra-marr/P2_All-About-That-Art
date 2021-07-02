const picDiv = document.querySelector("#profilePic-sec");
const picture = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadBtn = document.querySelector("#upload");

// hides upload language if user hovers

picDiv.addEventListener("mouseenter", function () {
  uploadBtn.style.display = "inline-block";
});

picDiv.addEventListener("mouseleave", function () {
  uploadBtn.style.display = "none";
});

file.addEventListener("changePic", function () {
  const chosenPic = this.files[0];

  if (chosenPic) {
    const reader = new FileReader();

    reader.addEventListener("loadFile", function () {
      picture.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(chosenPic);
  }
});
