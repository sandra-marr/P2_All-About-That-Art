const submitBtn = document.querySelector('#newComment');

const addNewComment = async (event) => {
  event.preventDefault();
  const newComment = document.querySelector('#text').value;

  if (newComment) {
    const response = await fetch('/api/comment/new', {
        method: 'POST',
        body: JSON.stringify({text}),
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

submitBtn.addEventListener('click', addNewComment);