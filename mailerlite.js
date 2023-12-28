document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('newsletter-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var formMessage = document.getElementById('form-message');

        // Validate the email...
        if (!email.includes('@')) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return;
        }

        // Display a success message
        formMessage.textContent = 'Subscription successful. Thank you for contacting us!';
        formMessage.style.color = 'green';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var formMessage = document.getElementById('form-message');

        // Validate the email...
        if (!email.includes('@')) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return;
        }

        // Display a success message
        formMessage.textContent = 'Subscription successful. Thank you for contacting us!';
        formMessage.style.color = 'green';
    });
});