const serviceID = "service_eyo4xn8";
const templateID = "template_4gif7w6";

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {
    console.log("Reached send mail function");
    event.preventDefault();

    emailjs.sendForm(serviceID, templateID, contactForm)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        contactForm.reset();
        setInterval(() => window.location.reload(true), 3000);
     }, function(error) {
        console.log('FAILED...', error);
     });
}) 