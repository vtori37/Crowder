async function newFormHandler(e) {
  e.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea').value;
  // slice at 28th index (end of URL) to get the event_id 
  const event_id = document.URL.slice(28)

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
<<<<<<< HEAD
      post_text
=======
      post_text,
      event_id
>>>>>>> jamel
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
<<<<<<< HEAD
    /* let currentUrl = "/group/"
      switch(currentUrl) {
        case "/group/0":
          break;
        case "/group/1":
          break;
        case "/group/2":
          break;
        case "/group/3":
          break;
        case "/group/4":
          break;
          default: "/"  
      } */
      document.location.reload();   
      // document.location.replace(currentUrl);
    console.log("It Works")
=======
    document.location.replace(`/group/${event_id}`);
>>>>>>> jamel
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.create-post-form').addEventListener('submit', newFormHandler);