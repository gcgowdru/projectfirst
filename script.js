document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-msg');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here, you should make an AJAX request to your server for authentication
        // For this example, I'm just using a simple mock of username and password
        if (username === 'user' && password === 'password') {
            // Authentication successful
            // You can redirect to another page or do something else here
            alert('Login successful!');
        } else {
            // Authentication failed
            errorMessage.textContent = 'Invalid username or password';
        }
    });
});
