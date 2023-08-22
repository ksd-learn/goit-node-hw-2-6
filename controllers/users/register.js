const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { nanoid } = require("nanoid");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { Users } = require('../../models/users');

const { BASE_URL, META_PASSWORD } = process.env;

const register = async (req, res, next) => {
    try {
        const {password, email} = req.body;
        const user = await Users.findOne({ email });
        
        if (user) {
            return res.status(409).json({ message: "Email in use" });
        };

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const avatarURL = gravatar.url(email);
        const verificationToken = nanoid();
        const result = await Users.create({ password: hashPassword, email, avatarURL, verificationToken });
        
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
            html: `<a target="_blank" href="${BASE_URL}/users/${verificationToken}">Click to verify you email</a>`
        };
        transport.sendMail(mail)
        .then(()=> console.log("Verify token is required, sendMail success"))
        .catch(error => console.log(error.message))

        res.status(201).json({
            email: result.email,
            subscription: result.subscription,
            verificationToken: result.verificationToken
        })
    } catch(error) {
        next()
    }
}

module.exports = register;