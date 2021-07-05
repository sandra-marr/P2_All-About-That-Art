const artworkHandler = async (event) => {
    event.preventDefault();

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    console.log(id);

    const response = await fetch(`/api/artist/profile/${id}`, {
      method: 'GET',
      });

      if (response.ok) {
        document.location.replace(`/api/artist/profile/${id}`);
      } else {
        alert('Failed to load artist.');
      }
    } else {
      alert('no data id.');
    }
};
  
document
    .querySelector('.artwork')
    .addEventListener('click', artworkHandler);

