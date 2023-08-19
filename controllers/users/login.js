const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Users } = require('../../models/users');

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
    try {
        const { password, email } = req.body;
        const user = await Users.findOne({ email });
        if (!user || !user.verify) {
            return res.status(401).json({ message: "Email or password is wrong" });
        };
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(401).json({ message: "Email or password is wrong" });
        };
        const payload = {
            id: user._id
        };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
        const result = await Users.findOneAndUpdate(user._id, { token }, { new: true });
        res.status(201).json({
            token: result.token,
            user: {
                email: result.email,
                subscription: result.subscription
            }
        })
    } catch(error) {
        next()
    }
}

module.exports = login;