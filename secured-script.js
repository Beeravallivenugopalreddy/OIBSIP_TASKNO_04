document.addEventListener('DOMContentLoaded', function () {
    const Button = document.getElementById('button');
    Button.addEventListener('click', function () {
        // Clear the stored user data and redirect to the landing page
        localStorage.removeItem('registeredUser');
        alert('Logged out successfully.');
        window.location.href = 'index.html'; // Redirect to the landing page
    });
});
