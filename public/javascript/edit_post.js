async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    //   if (response.ok) {
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
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
