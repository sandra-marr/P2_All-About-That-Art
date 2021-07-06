// document.querySelector(".uk-link-Cards").addEventListener("click", event =>{
//   console.log('target', event.target)
//   console.log('currentTarget:' event.currentTarget);
// });

const { values } = require("sequelize/types/lib/operators");

const artistProf = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/artist/profile/${id}`, {
      method: "GET",
    });

    if (response.ok) {
      document.location.replace(`/api/artist/profile/${id}`);
    } else {
      alert("Failed to load artist.");
    }
  } else {
    alert("no data id.");
  }
};

document.querySelector("#entireCard").addEventListener("click", artistProf);
