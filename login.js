document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  // Simple login credentials
  if (user === 'admin' && pass === '12345') {
    alert('Login successful!');
    window.location.href = 'index.html'; // user ko homepage pe le jao
  } else {
    document.getElementById('error-message').innerText = 'Invalid username or password.';
  }
});
