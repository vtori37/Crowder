function Menu(e) {
  let list = document.querySelector('ul');

  e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
};

const loginFormHandler = async (event) => {
  event.preventDefault();
  
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();


  if (email && password) {
    const response = await fetch('api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {"Content-Type": "application/json"}
    })
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    };
  };
};



document.querySelector('.form-login').addEventListener('submit', loginFormHandler);

