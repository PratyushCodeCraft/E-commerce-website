document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Get all registered users
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if user exists and password matches
  const validUser = users.find(user => user.username === username && user.password === password);

  if (validUser) {
    alert('Login successful!');
    window.location.href = 'index.html'; // Redirect to homepage
  } else {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Invalid username or password';
    errorMessage.style.color = 'red';
  }
});