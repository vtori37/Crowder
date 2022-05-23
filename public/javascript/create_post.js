async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-text"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
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
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);