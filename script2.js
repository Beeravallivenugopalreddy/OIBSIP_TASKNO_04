document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const storedUsersJSON = localStorage.getItem('registeredUsers');
        const storedUsers = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];

        if (storedUsers.some(user => user.username === username)) {
            alert('Username already taken');
        } else {
            // Hash and salt the password (using bcrypt in a real-world scenario)
            const hashedPassword = hashPassword(password);
            storedUsers.push({ username, password: hashedPassword });

            localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));

            alert('Registration successful! You can now login.');
            window.location.href = 'login.html';
        }
    });

    function hashPassword(password) {
        // Use your preferred password hashing library (e.g., bcrypt) here
        // For simplicity, let's assume plain string storage
        return password;
    }
});
