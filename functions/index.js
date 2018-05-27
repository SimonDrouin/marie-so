const functions = require('firebase-functions');
const nodemailer = require('nodemailer');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});


// Contact Us mailing
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmail = functions.https.onRequest((request, response) => {
    console.log('request body! :: ', JSON.stringify(request.body))

    const subject = "subjects!!"
    const content = "contennnts!! omg"
    const userEmail = "skuuuut@gmail.com"

    const mailOptions = {
        from: `${userEmail} <noreply@eauxtroubles.ca>`,
        to: gmailEmail,
      };

      // Building Email message.
      mailOptions['subject'] = subject
      mailOptions['text'] = content

      mailTransport.sendMail(mailOptions)
        .then(() => console.log(`Email sent`, gmailEmail))
        .catch((error) => console.error('There was an error while sending the email:', error));

      return response.send('Contact Us Email sent!');
})