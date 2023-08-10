const jwt = require('jsonwebtoken');
const { Users } = require('../../models/users');

const { SECRET_KEY } = process.env;

const validateAuthorization = async (req, res, next) => {
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== 'Bearer') {
        return res.status(401).json({ message: "Not authorized" });
    }
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await Users.findById(id);
    if (!user || !user.token || user.token !== token) {
        return res.status(401).json({ message: "Not authorized" });
    }
    req.user = user;
        
    next()
}

module.exports = validateAuthorization;