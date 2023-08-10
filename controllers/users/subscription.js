const { Users } = require('../../models/users');

const subscription = async (req, res, next) => {
    const { _id } = req.user;
    const {subscription} = req.body;
    const result = await Users.findByIdAndUpdate(_id, {subscription}, { new: true });
    res.status(200).json(result)
}

module.exports = subscription;