const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: 'smtp-relay.gmail.com',
    port: 123,
    auth: {
        user: ''
    }
})


export default function handler(req, res) {
    res.status(200).json(req.body)
}