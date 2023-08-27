document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const storedUsersJSON = localStorage.getItem('registeredUsers');
        const storedUsers = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];

        const storedUser = storedUsers.find(user => user.username === username);

        if (storedUser && validatePassword(password, storedUser.password)) {
            // Successful login
            alert('Login successful! Redirecting to secured page...');
            window.location.href = 'secured.html';
        } else {
            alert('Invalid username or password');
        }
    });

    function validatePassword(inputPassword, storedPassword) {
        // Use your preferred password hashing library to compare hashed passwords
        // For simplicity, let's assume plain string comparison here
        return inputPassword === storedPassword;
    }
});
