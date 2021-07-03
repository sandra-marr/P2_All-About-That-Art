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

        const nextResponse = await fetch('/api/art', {
            method: 'PUT',
            body: JSON.stringify({ response }), 
            headers: {
                'Content-Type': 'application/json',
            }}) 
      } if(nextResponse.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostHandler);