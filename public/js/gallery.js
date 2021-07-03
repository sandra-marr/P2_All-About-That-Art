const paintingsHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/galleries/matrix-painting`, {
    method: 'GET',
    });
  
    if (response.ok) {
        document.location.replace('api/galleries/matrix-painting');
      } else {
        alert('Failed to get paintings');
      }
};
  
const sculpturesHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/galleries/matrix-sculpture`, {
    method: 'GET',
    });
  
    if (response.ok) {
        document.location.replace('api/galleries/matrix-sculpture');
      } else {
        alert('Failed to get sculptures');
      }
};
  
const photographsHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/galleries/matrix-photograph`, {
    method: 'GET',
    });
  
    if (response.ok) {
        document.location.replace('api/galleries/matrix-photograph');
      } else {
        alert('Failed to get photographs');
      }
};
  
document
    .querySelector('.paintings')
    .addEventListener('click', paintingsHandler);

document
    .querySelector('.sculptures')
    .addEventListener('click', sculpturesHandler);
    
document
    .querySelector('.photographs')
    .addEventListener('click', photographsHandler);
