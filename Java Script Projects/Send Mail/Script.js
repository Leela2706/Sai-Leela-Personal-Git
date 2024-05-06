<script src="https://smtpjs.com/v3/smtp.js"></script>
    function sendEmail() {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "vijayram964932@gmail.com",
            Password: "password",
            To: 'vijayram964932.com',
            From: document.getElementById("email").value,
            Subject: "This is the subject",
            Body: "And this is the body"
        }).then(
            message => alert(message)
        );
    }
