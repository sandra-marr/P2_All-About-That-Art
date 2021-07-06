// const picDiv = document.querySelector("#profilePic-sec");
// const picture = document.querySelector("#photo");
// const file = document.querySelector("#file");
// const uploadBtn = document.querySelector("#upload");

// // hides upload language if user hovers

// picDiv.addEventListener("mouseenter", function () {
//   uploadBtn.style.display = "inline-block";
// });

// picDiv.addEventListener("mouseleave", function () {
//   uploadBtn.style.display = "none";
// });

// file.addEventListener("changePic", function () {
//   const chosenPic = this.files[0];

//   if (chosenPic) {
//     const reader = new FileReader();

//     reader.addEventListener("loadFile", function () {
//       picture.setAttribute("src", reader.result);
//     });

//     reader.readAsDataURL(chosenPic);
//   }
// });

const artistProfileCard = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/artist/profile/${id}` {
      method: "GET",
    });

    if (response.ok) {
      document.location.replace(`/api/artist/profile/${id}`);
    } else {
      alert("Failed to load artist");
    }
  } else {
    alert("Failed to load artist");
  }
};

document
  .querySelector(".profilePg")
  .addEventListener("click", artistProfileCard);
å;
