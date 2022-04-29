const ejs = require('ejs')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const smtpTransport = require('nodemailer-smtp-transport')

async function createTransporter() {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        // requireTLS: true,
        // service: 'gmail',
        auth: {
            // type: "OAuth2",
            
            // clientId: process.env.CLIENT_ID,
            // clientSecret: process.env.CLIENT_SECRET,
            // refreshToken: process.env.REFRESH_TOKEN,
            // accessToken: process.env.ACCESS_TOKEN,
            user: process.env.EMAIL, 
            pass: process.env.APP_PASSWORD, 
            
        },
        // tls: {
        //     ciphers: "SSLv3",
        // },
    });

    return transporter
}

async function sendClientContactEmail(body) {
    const transporter = await createTransporter()

    ejs.renderFile('emailTemplates/clientContact.ejs', { name: body.name }, function (err, str) {
        if (err) {
            console.log(err)
        } else {
            const mailOptions = {
                from: 'william@rwilabs.io',
                to: body.email,
                subject: 'Quote Request',
                html: str
            }

            transporter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    console.error('mailer', err);
                } else {
                    console.log("Email sent successfully");
                }
            });
        }
    })
}

sendClientContactEmail({ name: 'William Tester', email: 'will_weiland@hotmail.ca' })