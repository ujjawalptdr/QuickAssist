// const nodemailer = require("nodemailer");
// require("dotenv").config();

// // to send otp mail
// function sendOtpMail(Email, otp) {
//     // let transporter = nodemailer.createTransport({
//     //     service: "gmail",
//     //     auth: {
//     //         user: process.env.NODE_MAILER_USER,
//     //         pass: process.env.NODE_MAILER_PASS,
//     //     },
//     //     tls: {
//     //         rejectUnauthorized: false,
//     //     },
//     // });

//     let transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",  // <- changed
//         port: 587,               // <- added
//         secure: false,           // <- added, use TLS
//         auth: {
//             user: process.env.NODE_MAILER_USER,
//             pass: process.env.NODE_MAILER_PASS,
//         },
//         tls: {
//             rejectUnauthorized: false,
//         },
//     });


//     let mailOptions = {
//         from: process.env.NODE_MAILER_USER,
//         to: Email,
//         subject: "One Time Password - QuickAssist",
//         html: `Please keep your OTP confidential and do not share it with anyone. The OTP will be valid for five minutes only. <br><strong>OTP: ${otp}</strong><br><br>Thank you for choosing QuickAssist!<br><br>If you have any questions, please contact us at:<br>ujjawalpatidar0303@gmail.com`,
//     };

//     transporter.sendMail(mailOptions, function (err, success) {
//         if (err) {
//             console.log(err);
//         }
//         // else {
//         //     console.log("Otp Email sent successfully");
//         // }
//     });
// }

// // to send job start otp mail
// function sendJobStartOtpMail(Email, otp) {
//     // let transporter = nodemailer.createTransport({
//     //     service: "gmail",
//     //     auth: {
//     //         user: process.env.NODE_MAILER_USER,
//     //         pass: process.env.NODE_MAILER_PASS,
//     //     },
//     //     tls: {
//     //         rejectUnauthorized: false,
//     //     },
//     // });

//     let transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",  // <- changed
//         port: 587,               // <- added
//         secure: false,           // <- added, use TLS
//         auth: {
//             user: process.env.NODE_MAILER_USER,
//             pass: process.env.NODE_MAILER_PASS,
//         },
//         tls: {
//             rejectUnauthorized: false,
//         },
//     });


//     let mailOptions = {
//         from: process.env.NODE_MAILER_USER,
//         to: Email,
//         subject: "Job Start One Time Password - QuickAssist",
//         html: `Please share this OTP with the handyman once he arives. <br><strong>OTP: ${otp}</strong><br><br>Thank you for choosing Local Handyman!<br><br>If you have any questions, please contact us at:<br>ujjawalpatidar0303@gmail.com`,
//     };

//     transporter.sendMail(mailOptions, function (err, success) {
//         if (err) {
//             console.log(err);
//         }
//         // else {
//         //     console.log("Job Start Otp Email sent successfully");
//         // }
//     });
// }

// // to send Login Verification Mail
// function sendLoginVerificationMail(Details) {
//     // let transporter = nodemailer.createTransport({
//     //     service: "gmail",
//     //     auth: {
//     //         user: process.env.NODE_MAILER_USER,
//     //         pass: process.env.NODE_MAILER_PASS,
//     //     },
//     //     tls: {
//     //         rejectUnauthorized: false,
//     //     },
//     // });

//     let transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",  // <- changed
//         port: 587,               // <- added
//         secure: false,           // <- added, use TLS
//         auth: {
//             user: process.env.NODE_MAILER_USER,
//             pass: process.env.NODE_MAILER_PASS,
//         },
//         tls: {
//             rejectUnauthorized: false,
//         },
//     });


//     let mailOptions = {
//         from: process.env.NODE_MAILER_USER,
//         to: Details.email,
//         subject: `Login Successful - at QuickAssist`,
//         html: `Dear <i>${Details.name}</i>,<br><br>You have successfully logged in to your account at QuickAssist! Thank you for being a part of our community.<br><br>If you have any questions or concerns, please don't hesitate to reach out to us. We're here to help please contact us at:<br>ujjawalpatidar0303@gmail.com.<br><br>Best regards,<br>Team - QuickAssist`,
//     };

//     transporter.sendMail(mailOptions, function (err, success) {
//         if (err) {
//             console.log(err);
//         }
//         // else {
//         //     console.log("Login Verification Mail sent successfully");
//         // }
//     });
// }

// // to send ticket
// function sendTicket(Details) {
//     // let transporter = nodemailer.createTransport({
//     //     service: "gmail",
//     //     auth: {
//     //         user: process.env.NODE_MAILER_USER,
//     //         pass: process.env.NODE_MAILER_PASS,
//     //     },
//     //     tls: {
//     //         rejectUnauthorized: false,
//     //     },
//     // });

//     let transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",  // <- changed
//         port: 587,               // <- added
//         secure: false,           // <- added, use TLS
//         auth: {
//             user: process.env.NODE_MAILER_USER,
//             pass: process.env.NODE_MAILER_PASS,
//         },
//         tls: {
//             rejectUnauthorized: false,
//         },
//     });


//     let mailOptions = {
//         from: process.env.NODE_MAILER_USER,
//         to: Details.email,
//         subject: `Your Online Event Pass for ${Details.event_name} - Local Handyman✨`,
//         html: `Dear <i>${Details.name}</i>,<br><br>Thank you for registering for ${Details.event_name}! We are excited to have you join us and want to make sure that you have all the information you need to have a great time.<br><br>Your online pass has been generated and is ready for you to use. Please remember to keep this pass with you at all times during the event and do not share it with anyone else.<br><br><strong>Pass Number: ${Details.pass}</strong><br><br>Here are the details of your registration:<br>Name: ${Details.name}<br>Amount Paid: ${Details.price}<br>Address: ${Details.address1} <br> City: ${Details.city} <br> PinCode: ${Details.zip}<br><br>If you have any questions or concerns, please don't hesitate to reach out to us. We're here to help please contact us at:<br>email : ujjawalpatidar0303@gmail.com.<br><br>Best regards,<br>The QuickAssist team`,
//     };

//     transporter.sendMail(mailOptions, function (err, success) {
//         if (err) {
//             console.log(err);
//         }
//         // else {
//         //     console.log("Ticket Email sent successfully");
//         // }
//     });
// }

// module.exports = {
//     sendOtpMail,
//     sendLoginVerificationMail,
//     sendTicket,
//     sendJobStartOtpMail,
// };




// Sencond try


// const nodemailer = require("nodemailer");
// require("dotenv").config();

// // Reusable transporter using SendGrid
// // const transporter = nodemailer.createTransport({
// //     host: "smtp.sendgrid.net",
// //     port: 587,
// //     secure: false, // TLS
// //     auth: {
// //         user: "apikey",               // literal string required by SendGrid
// //         pass: process.env.SENDGRID_API, // your SendGrid API key
// //     },
// // });

// const transporter = nodemailer.createTransport({
//     host: "smtp.sendgrid.net",
//     port: 465,
//     secure: true, // SSL/TLS
//     auth: {
//         user: "apikey", // literal string
//         pass: process.env.SENDGRID_API,
//     },
// });


// // Common from object with display name
// const FROM = {
//     name: "QuickAssist",
//     address: process.env.NODE_MAILER_USER, // your verified sender email
// };

// // to send otp mail
// function sendOtpMail(Email, otp) {
//     let mailOptions = {
//         from: FROM,
//         to: Email,
//         subject: "One Time Password - QuickAssist",
//         html: `Please keep your OTP confidential and do not share it with anyone. The OTP will be valid for five minutes only. <br><strong>OTP: ${otp}</strong><br><br>Thank you for choosing QuickAssist!<br><br>If you have any questions, please contact us at:<br>ujjawalpatidar0303@gmail.com`,
//     };

//     transporter.sendMail(mailOptions, (err, success) => {
//         if (err) console.log(err);
//     });
// }

// // to send job start otp mail
// function sendJobStartOtpMail(Email, otp) {
//     let mailOptions = {
//         from: FROM,
//         to: Email,
//         subject: "Job Start One Time Password - QuickAssist",
//         html: `Please share this OTP with the handyman once he arrives. <br><strong>OTP: ${otp}</strong><br><br>Thank you for choosing Local Handyman!<br><br>If you have any questions, please contact us at:<br>ujjawalpatidar0303@gmail.com`,
//     };

//     transporter.sendMail(mailOptions, (err, success) => {
//         if (err) console.log(err);
//     });
// }

// // to send Login Verification Mail
// function sendLoginVerificationMail(Details) {
//     let mailOptions = {
//         from: FROM,
//         to: Details.email,
//         subject: `Login Successful - at QuickAssist`,
//         html: `Dear <i>${Details.name}</i>,<br><br>You have successfully logged in to your account at QuickAssist! Thank you for being a part of our community.<br><br>If you have any questions or concerns, please don't hesitate to reach out to us. We're here to help please contact us at:<br>ujjawalpatidar0303@gmail.com.<br><br>Best regards,<br>Team - QuickAssist`,
//     };

//     transporter.sendMail(mailOptions, (err, success) => {
//         if (err) console.log(err);
//     });
// }

// // to send ticket
// function sendTicket(Details) {
//     let mailOptions = {
//         from: FROM,
//         to: Details.email,
//         subject: `Your Online Event Pass for ${Details.event_name} - Local Handyman✨`,
//         html: `Dear <i>${Details.name}</i>,<br><br>Thank you for registering for ${Details.event_name}! We are excited to have you join us and want to make sure that you have all the information you need to have a great time.<br><br>Your online pass has been generated and is ready for you to use. Please remember to keep this pass with you at all times during the event and do not share it with anyone else.<br><br><strong>Pass Number: ${Details.pass}</strong><br><br>Here are the details of your registration:<br>Name: ${Details.name}<br>Amount Paid: ${Details.price}<br>Address: ${Details.address1} <br> City: ${Details.city} <br> PinCode: ${Details.zip}<br><br>If you have any questions or concerns, please don't hesitate to reach out to us. We're here to help please contact us at:<br>email : ujjawalpatidar0303@gmail.com.<br><br>Best regards,<br>The QuickAssist team`,
//     };

//     transporter.sendMail(mailOptions, (err, success) => {
//         if (err) console.log(err);
//     });
// }

// module.exports = {
//     sendOtpMail,
//     sendLoginVerificationMail,
//     sendTicket,
//     sendJobStartOtpMail,
// };




// worked but in spam

const sgMail = require("@sendgrid/mail");
require("dotenv").config();

// Set API key
sgMail.setApiKey(process.env.SENDGRID_API);

// Sender object
const FROM = {
    name: "QuickAssist",
    email: process.env.NODE_MAILER_USER, // verified sender email
};

// --- Functions ---

// Send OTP Mail
function sendOtpMail(Email, otp) {
    const msg = {
        to: Email,
        from: FROM,
        subject: "One Time Password - QuickAssist",
        html: `Please keep your OTP confidential and do not share it with anyone. The OTP will be valid for five minutes only. <br><strong>OTP: ${otp}</strong><br><br>Thank you for choosing QuickAssist!<br><br>If you have any questions, please contact us at:<br>ujjawalpatidar0303@gmail.com`,
    };

    sgMail
        .send(msg)
        .then(() => console.log(`OTP email sent to ${Email}`))
        .catch((err) => console.log(err));
}

// Send Job Start OTP Mail
function sendJobStartOtpMail(Email, otp) {
    const msg = {
        to: Email,
        from: FROM,
        subject: "Job Start One Time Password - QuickAssist",
        html: `Please share this OTP with the handyman once he arrives. <br><strong>OTP: ${otp}</strong><br><br>Thank you for choosing Local Handyman!<br><br>If you have any questions, please contact us at:<br>ujjawalpatidar0303@gmail.com`,
    };

    sgMail
        .send(msg)
        .then(() => console.log(`Job start OTP email sent to ${Email}`))
        .catch((err) => console.log(err));
}

// Send Login Verification Mail
function sendLoginVerificationMail(Details) {
    const msg = {
        to: Details.email,
        from: FROM,
        subject: `Login Successful - at QuickAssist`,
        html: `Dear <i>${Details.name}</i>,<br><br>You have successfully logged in to your account at QuickAssist! Thank you for being a part of our community.<br><br>If you have any questions or concerns, please don't hesitate to reach out to us. We're here to help please contact us at:<br>ujjawalpatidar0303@gmail.com.<br><br>Best regards,<br>Team - QuickAssist`,
    };

    sgMail
        .send(msg)
        .then(() => console.log(`Login verification email sent to ${Details.email}`))
        .catch((err) => console.log(err));
}

// Send Ticket Mail
function sendTicket(Details) {
    const msg = {
        to: Details.email,
        from: FROM,
        subject: `Your Online Event Pass for ${Details.event_name} - Local Handyman✨`,
        html: `Dear <i>${Details.name}</i>,<br><br>Thank you for registering for ${Details.event_name}! We are excited to have you join us and want to make sure that you have all the information you need to have a great time.<br><br>Your online pass has been generated and is ready for you to use. Please remember to keep this pass with you at all times during the event and do not share it with anyone else.<br><br><strong>Pass Number: ${Details.pass}</strong><br><br>Here are the details of your registration:<br>Name: ${Details.name}<br>Amount Paid: ${Details.price}<br>Address: ${Details.address1} <br> City: ${Details.city} <br> PinCode: ${Details.zip}<br><br>If you have any questions or concerns, please don't hesitate to reach out to us. We're here to help please contact us at:<br>email : ujjawalpatidar0303@gmail.com.<br><br>Best regards,<br>The QuickAssist team`,
    };

    sgMail
        .send(msg)
        .then(() => console.log(`Ticket email sent to ${Details.email}`))
        .catch((err) => console.log(err));
}

// Export functions
module.exports = {
    sendOtpMail,
    sendLoginVerificationMail,
    sendTicket,
    sendJobStartOtpMail,
};




// const nodemailer = require("nodemailer");
// require("dotenv").config();

// // --- Transporter using SendGrid SMTP ---
// const transporter = nodemailer.createTransport({
//     host: "smtp.sendgrid.net",
//     port: 465,          // SSL port
//     secure: true,       // must be true for port 465
//     auth: {
//         user: "apikey",                // literal string "apikey"
//         pass: process.env.SENDGRID_API, // your SendGrid API key
//     },
// });

// // --- Sender object ---
// const FROM = {
//     name: "QuickAssist",
//     address: process.env.NODE_MAILER_USER, // verified sender email
// };

// // --- Helper to send email ---
// function sendMail({ to, subject, html, text }) {
//     const mailOptions = {
//         from: FROM,
//         to,
//         subject,
//         html,
//         text: text || html.replace(/<[^>]*>?/gm, ""), // convert HTML to plain text if not provided
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//             console.log("Error sending email:", err);
//         } else {
//             console.log(`Email sent to ${to} - Message ID: ${info.messageId}`);
//         }
//     });
// }

// // --- Functions ---

// // Send OTP Mail
// function sendOtpMail(Email, otp) {
//     sendMail({
//         to: Email,
//         subject: "One Time Password - QuickAssist",
//         html: `Please keep your OTP confidential and do not share it with anyone. The OTP will be valid for five minutes only. <br><strong>OTP: ${otp}</strong><br><br>Thank you for choosing QuickAssist!<br><br>If you have any questions, please contact us at:<br>ujjawalpatidar0303@gmail.com`,
//     });
// }

// // Send Job Start OTP Mail
// function sendJobStartOtpMail(Email, otp) {
//     sendMail({
//         to: Email,
//         subject: "Job Start One Time Password - QuickAssist",
//         html: `Please share this OTP with the handyman once he arrives. <br><strong>OTP: ${otp}</strong><br><br>Thank you for choosing Local Handyman!<br><br>If you have any questions, please contact us at:<br>ujjawalpatidar0303@gmail.com`,
//     });
// }

// // Send Login Verification Mail
// function sendLoginVerificationMail(Details) {
//     sendMail({
//         to: Details.email,
//         subject: `Login Successful - at QuickAssist`,
//         html: `Dear <i>${Details.name}</i>,<br><br>You have successfully logged in to your account at QuickAssist! Thank you for being a part of our community.<br><br>If you have any questions or concerns, please contact us at:<br>ujjawalpatidar0303@gmail.com.<br><br>Best regards,<br>Team - QuickAssist`,
//     });
// }

// // Send Ticket Mail
// function sendTicket(Details) {
//     sendMail({
//         to: Details.email,
//         subject: `Your Online Event Pass for ${Details.event_name} - Local Handyman✨`,
//         html: `Dear <i>${Details.name}</i>,<br><br>Thank you for registering for ${Details.event_name}! We are excited to have you join us.<br><br>Your online pass has been generated and is ready for you to use.<br><br><strong>Pass Number: ${Details.pass}</strong><br><br>Details:<br>Name: ${Details.name}<br>Amount Paid: ${Details.price}<br>Address: ${Details.address1}, ${Details.city}, ${Details.zip}<br><br>If you have any questions, contact us at:<br>ujjawalpatidar0303@gmail.com.<br><br>Best regards,<br>The QuickAssist team`,
//     });
// }

// // --- Export functions ---
// module.exports = {
//     sendOtpMail,
//     sendLoginVerificationMail,
//     sendTicket,
//     sendJobStartOtpMail,
// };
