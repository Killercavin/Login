document.querySelector('#login-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the password input element
    const passwordInput = this.querySelector('input[type="password"]');

    // Create an error message element
    let errorMessage = document.createElement('span');
    errorMessage.className = 'error-message';

    // If the password is too short, show an error message
    if (passwordInput.value.length < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters long.';
        passwordInput.parentNode.insertBefore(errorMessage, passwordInput.nextSibling);
    }
});