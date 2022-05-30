async function newFormHandler(e) {
  e.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea').value;
  // slice at 28th index (end of URL) to get the event_id 
  const event_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_text,
      event_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace(`/group/${event_id}`);
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.create-post-form').addEventListener('submit', newFormHandler);