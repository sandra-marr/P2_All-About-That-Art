const newArtHandler = async (event) => {
    event.preventDefault();
  
    const description = document.querySelector('#description').value.trim();
    
    const category = document.querySelector('#category').value.trim();

    const image = document.querySelector('#file');
  
    if (description && category && image) {
      const response = await fetch(`/api/upload`, {
        method: 'POST',
        body: JSON.stringify({ image , description, category}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {

        console.log(response);
        document.location.reload();
      } else {
        alert(response.statusText);
      }

    }
  };
  


  const updateBio = async (event) => {
    event.preventDefault();
    const newBio = document.querySelector('#text').value;
  
    if (newBio) {
      const response = await fetch('/api/artist/updateBio', {
          method: 'PUT',
          body: JSON.stringify({newBio}),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          console.log(response);
          document.location.reload();
        } else {
          alert(response.statusText);
        }
  
    }
  
  }; 
  
  document
    .querySelector('#addNewArt')
    .addEventListener('click', newArtHandler);

    document
    .querySelector('#updateBio')
    .addEventListener('click', updateBio);