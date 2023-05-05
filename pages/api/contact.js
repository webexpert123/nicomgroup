let nodemailer = require('nodemailer')

export default function (req, res) {

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD,
        },
        secure: true,
    })
    const mailData = {
        from: "no-reply@accounts.google.com",
        // to: process.env.GMAIL_USERNAME,
        to: "kanhaiya@indiainfotech.com",
        subject: `Message From ${req.body.name}`,
    
    html: 
    `<table>
        <tr>
            <td>Name:</td>
            <td><b>${req.body.name}</b></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td><b>${req.body.email}</b></td>
        </tr>
        <tr>
            <td>Regarding:</td>
            <td><b>${req.body.regarding}</b></td>
        </tr>
        <tr>
            <td>Message:</td>
            <td><b>${req.body.message}</b></td>
        </tr>
    </table>`

}
transporter.sendMail(mailData, function (err, info) {
    if (err) {
        res.status(200).json(err)
    } else {
        //   console.log('info', info)
        res.status(200).json({ 'success': true })
    }
})
}