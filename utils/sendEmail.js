const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user:process.env.SMTP_MAIL,
          pass: process.env.SMTP_PASSWORD
        }
      }); 

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: "HI",
        html: options.data.reset_url,
    };

     
      

};

module.exports = sendEmail;