document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const fullName = document.getElementById('fullName').value;
    const phoneNo = document.getElementById('phoneNo').value;
    const emailId = document.getElementById('emailId').value;
    const message = document.getElementById('message').value;
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const nameError = document.getElementById('nameError');
    const messageError = document.getElementById('messageError');


    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^\d{3}\d{3}\d{4}$/;

    nameError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    if (fullName === '' || !namePattern.test(fullName)) {
        nameError.textContent = 'Name invalid. Only letters and spaces allowed.';
    } else if (phoneNo === '' || !phonePattern.test(phoneNo)) {
        phoneError.textContent = 'Phone number invalid';
    } else if (emailId === '' || !emailPattern.test(emailId)) {
        emailError.textContent = 'Email invalid';
    } else if (message === '' || message.length <= 30) {
        messageError.textContent = 'Message must be at least 30 characters long.';
    } else {
        alert('Form submitted successfully!');
    }
});