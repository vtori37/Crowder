async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];

  const confirm = window.confirm('Are you sure you want to delete this post?');

  if (confirm) {
    const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
    })

    if (response.ok) {
      document.location.replace('/dashboard');   
      alert('Post deleted!');
    } else {
      alert(response.statusText);
    };
  }
}

document.querySelector('.delete').addEventListener('click', deleteFormHandler);
