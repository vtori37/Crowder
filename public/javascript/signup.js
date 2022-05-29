const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  // default user img & bio 
  const userImg = 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'
  const userBio = 'You have no bio yet! Hang in tight, that feature will be coming to the user experience shortly.'

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({ username, email, password, userImg, userBio }),
      headers: {'Content-Type': 'application/json'}
    })
    if (response.ok) {
      console.log("Sigup Successful!");
      document.location.replace("/dashboard");
    } else {
      alert('Failed to signup. Try again.');
      console.log('Failed to signup. Try again.');
    }
  }
}

document.querySelector('.form-signup').addEventListener('submit', signupFormHandler);