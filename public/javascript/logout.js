const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
    console.log('Logout successful.')
  } else {
    alert('Failed to log out.');
    console.log('Failed to log out.');
  }
};

document.querySelector('#logout').addEventListener('click', logout);