const { Users } = require('../../models/users');

const logout = async (req, res, next) => {
    const { _id } = req.user;
    await Users.findByIdAndUpdate(_id, { token: ""});
    res.status(204).json({message: "No Content"})
}

module.exports = logout;