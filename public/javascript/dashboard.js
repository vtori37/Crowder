const joinGroup = async (event) => {
  event.preventDefault();

  console.log('button clicked')
  const response = await fetch('/group/[0]', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to log out.');
    console.log('Failed to log out.');
  }
};


document.querySelector('#logout').addEventListener('click', logout);