const artworkHandler = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/art/artwork/${id}`, {
      method: "GET",
    });

    if (response.ok) {
      document.location.replace(`/api/art/artwork/${id}`);
    } else {
      alert("Failed to load artwork.");
    }
  } else {
    alert("Failed to load artwork.");
  }
};

document.querySelector(".artwork").addEventListener("click", artworkHandler);
