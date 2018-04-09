const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: '465',
  secure: 'true',
  auth: {
    user: 'adithya7dhoni@gmail.com',
    pass: 'adithyalovesdhoni'
  }
})

const formSubmission = (ctx, next) => {
  let data = JSON.parse(ctx.request.body.data),
      mailOptions = {
        from: 'Aditya <adithya7dhoni@gmail.com>',
        to: 'Adithya <adithyapsv@gmail.com>',
        subject: 'Contact Mail',
        text: 'Name: '+data.name+'\nE-mail: '+data.email+'\nOrganisation: '+data.organisation+'\nSubject: '+data.message
      }
  console.log('okay');
  transporter.sendMail(mailOptions, (error, response) => {
      error ? console.log(error) : console.log('Message sent')
      // smtpTransport.close(); // shut down the connection pool, no more messages. Comment this line out to continue sending emails.
  });
}

module.exports = formSubmission