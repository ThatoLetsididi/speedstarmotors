document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });
});

function validateForm() {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const feedback = document.querySelector('#feedback').value.trim();
    let isValid = true;

    if (name === '') {
        alert('Name is required.');
        isValid = false;
    }

    if (email === '') {
        alert('Email is required.');
        isValid = false;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (feedback === '') {
        alert('Feedback is required.');
        isValid = false;
    }

    if (isValid) {
        alert('Feedback submitted successfully!');
        // You can submit the form or perform other actions here
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}