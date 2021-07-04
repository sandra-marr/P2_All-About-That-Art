const artist = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/artist`, {
    method: "GET",
  });

  if (response.ok) {
    document.location.replace("/api/artist");
  } else {
    alert("Failed to get artist");
  }
};

document.querySelector(".artist).addEventListener("click", artist);
