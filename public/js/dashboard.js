const newArtHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
  
    const description = document.querySelector('#form-stacked-text').value.trim();
    
    const category = document.querySelector('#category').value;

    const file = document.querySelector('#file').getAttribute('src');

    if (description && category && file && name) {
      const response = await fetch(`/api/upload`, {
        method: 'POST',
        body: JSON.stringify({ name, description, category, file}),
        headers: {
          // 'Content-Type': 'multipart/form-data',

          'Name': 'Content-Type', 
          'Direction': 'In', 
          'Type': 'String', 
          'Value': "multipart/form-data"
        },
      });
  
      if (response.ok) {
        console.log(response)
        // document.location.reload();
      } else {
        alert(response.statusText);
      }

    }
  };
  

const updateInfo = async (event) => {
    event.preventDefault();

    const bio = document.querySelector('#text').value.trim();
    const email = document.querySelector('#email').value.trim();
    const user_name = document.querySelector('#user_name').value.trim();
    const linkedin = document.querySelector('#linkedin').value.trim();
    const instagram = document.querySelector('#instagram').value.trim();
    const facebook = document.querySelector('#facebook').value.trim();
    const twitter = document.querySelector('#twitter').value.trim();
    const isArtistCheck = document.querySelector('#artist').value;
    let isArtist;

    if(isArtistCheck === "on") {
      isArtist = true;
    } else {
      isArtist = false;
    }

    if (bio || email || user_name || linkedin || instagram || facebook || twitter || isArtist) {
      const response = await fetch(`/api/dashboard/updateInfo`, {
          method: 'PUT',
          body: JSON.stringify({ bio, email, linkedin, instagram, facebook, twitter, isArtist }),
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
  
  // document
  //   .querySelector('#addNewArt')
  //   .addEventListener('click', newArtHandler);

    document
    .querySelector('#updateInfo')
    .addEventListener('click', updateInfo);