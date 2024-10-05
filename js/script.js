function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    const serviceID = 'service_0q28umd'; // EmailJS service ID
    const templateID = 'template_dps91zb'; // EmailJS template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset the form
        }, (err) => {
            alert('Failed to send the message. Please try again.');
            console.error('Error:', err); // Log error to the console for debugging
        });
}
