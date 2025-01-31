document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
   // Simple validation
    if (username === '' || password === '') {
      errorMessage.textContent = 'Please fill in all fields.';
      errorMessage.style.display = 'block';
    } else if (password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters.';
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
      alert(`Welcome, ${username}!`); // Simulate successful login
      // You can redirect to another page or perform other actions here
    }
  });