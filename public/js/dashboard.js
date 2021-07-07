const newArtHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
  
    const description = document.querySelector('#description').value.trim();
    
    const category = document.querySelector('#category').value.trim();

    const image = document.querySelector('#file');
  
    if (description && category && image) {
      const response = await fetch(`/api/upload`, {
        method: 'POST',
        body: JSON.stringify({ name, description, category, image}),
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

    const str = window.location.pathname;
    const id = str.split("/").reverse().join().split(",",1);

    console.log(id);

    const newBio = document.querySelector('#text').value.trim();
    
  
    if (newBio) {
      const response = await fetch(`/api/dashboard/updateBio/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ newBio, id}),
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