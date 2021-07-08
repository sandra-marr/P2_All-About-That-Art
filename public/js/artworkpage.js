const submitBtn = document.querySelector('#newComment');

const addNewComment = async (event) => {
  event.preventDefault();

  const str = window.location.pathname;
  const id = str.split("/").reverse().join().split(",",1);

  const comment_body = document.querySelector('#comment_body').value.trim();

  if (comment_body && id) {
    const response = await fetch(`/api/comment/new/${id}`, {
        method: 'POST',
        body: JSON.stringify({ comment_body, id }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }

  }

};
submitBtn.addEventListener('click', addNewComment);

const ratingBtn = document.querySelector('#ratingbtn')

const addRating = async (event) => {
  event.preventdefault();

  const str = window.location.pathname;
  const id = str.split("/").reverse().join().split(",",1);

  const rating = document.querySelector("#rating").value.trim();

  if(typeof(rating) === number){
    const response = await fetch(`api/art/rating/${id}`, {
      method: 'POST',
      body: JSON.stringify({ rating, id }),
      headers: {'Content-Type': 'application/json'},
    });
    if(response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }

}

submitBtn.addEventListener('click', addRating);