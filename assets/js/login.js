document.querySelector('#login-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Check if the form is valid
    if (this.checkValidity()) {
        // Form is valid, you can submit it
        console.log('Form is valid, submitting...');
    } else {
        // Form is not valid, show an error message
        console.log('Form is not valid, please check your inputs.');
    }
});