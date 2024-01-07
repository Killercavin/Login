document.querySelector('#login-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the email input element
    const emailInput = this.querySelector('input[type="email"]');

    // Create an error message element
    let errorMessage = document.createElement('span');
    errorMessage.className = 'error-message';

    // Define a regex for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // If the email is invalid, show an error message
    if (!emailRegex.test(emailInput.value)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling);
    }
});