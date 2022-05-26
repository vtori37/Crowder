async function editFormHandler(e) {
  e.preventDefault();

  const title = document.querySelector('input[name="post_title"]').value.trim();
  const post_text = document.querySelector('input[name="post_text"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];

  const confirm = window.confirm('Are you sure you want to edit this post?');

  if (confirm) { 
    const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

    if (response.ok && confirm) {
      document.location.reload();
      alert('Post successfully edited!');
    } else {
      alert(response.statusText);
    }
  }
}
  




  

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
