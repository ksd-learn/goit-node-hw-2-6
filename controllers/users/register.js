const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { Users } = require('../../models/users');

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
        const result = await Users.create({password: hashPassword, email, avatarURL});
        res.status(201).json({
            email: result.email,
            subscription: result.subscription
        })
    } catch(error) {
        next()
    }
}

module.exports = register;