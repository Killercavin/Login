document.querySelector('#login-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get all input elements
    const inputs = this.querySelectorAll('input');

    // Loop through each input
    inputs.forEach(input => {
        // Create an error message element
        let errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';

        // If the input is invalid, show an error message
        if (!input.validity.valid) {
            errorMessage.textContent = 'Please fill out this field.';
            input.parentNode.insertBefore(errorMessage, input.nextSibling);
        }
    });
});