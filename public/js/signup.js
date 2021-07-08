/* Selecting both id's togglePassword and password */
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password-signup');

/* Attaching an event listener to the togglePassword icon */
/* Toggle type of password field & icon class */
togglePassword.addEventListener('click', function (eyeball)  {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});

  const signupFormHandler = async (event) => {
    event.preventDefault();

    const user_name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const isArtist = document.querySelector('#isArtist').checked;
  
    if (user_name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user_name, email, password, isArtist}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response);

        const response2 = await fetch('/dashboard', {
          method: 'GET',
        });

        if(response2.ok) {
          alert("You are now logged in. Thank you for joining!")
          document.location.replace('/dashboard')
        } else {
          alert(response2.statusText);
        }
      } else {
        alert("An account with that email already exists")
      }
    
    } else {
      alert("Please fill in all fields.")
    }
  };
  
  document
    .querySelector('.signUpButton')
    .addEventListener('click', signupFormHandler);
