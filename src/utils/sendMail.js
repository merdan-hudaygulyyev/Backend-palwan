const nodemailer = require("nodemailer");
const APIError = require("./errors");

const sendEmail = async (mailOptions) => {
    const transporter = await nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Ulgamda ýalňyşlyk döredi Email Ugradylmady ! : ", error);
            throw new APIError("Email Ugradylmady !")
        }
        console.log("info : ",info);
        return true
    })
}

module.exports = sendEmail