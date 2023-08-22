const nodemailer = require("nodemailer");
const { Users } = require('../../models/users');

const { BASE_URL, META_PASSWORD } = process.env;

const resendEmail = async (req, res) => {
    const { email } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    if (user.verify) {
        return res.status(404).json({ message: "Verification has already been passed" });
    }
    
    const nodemailerConfig = {
        host: "smtp.meta.ua",
        port: 465, // 25, 465, 2525
        secure: true,
        auth: {
            user: "ksd2000@meta.ua",
            pass: META_PASSWORD,
        }
    };
    const transport = nodemailer.createTransport(nodemailerConfig); 
    const mail = {
        to: email,
        from: "ksd2000@meta.ua",
        subject: "title",
        html: `<a target="_blank" href="${BASE_URL}/users/verify/${user.verificationToken}">Click to verify you email</a>`
    };
    transport.sendMail(mail)
    .then(()=> console.log("Verify token is required, sendMail success"))
    .catch(error => console.log(error.message))

    res.json({
        message: "Verification email sent"
    })
}

module.exports = resendEmail;
