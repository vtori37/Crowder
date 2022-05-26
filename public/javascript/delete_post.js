async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
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
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
