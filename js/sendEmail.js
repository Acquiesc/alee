const serviceID = "service_eyo4xn8";
const templateID = "template_4gif7w6";

function sendEmail(params) {
    console.log("Reached send mail function");

    var tempParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        msg: document.getElementById("msg").value,
    };

    emailjs.send(serviceID, templateID, tempParams, "eYU0IJ5TEK13rkVPq")
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });

}

document.getElementById("submitBtn").addEventListener("click", sendEmail);