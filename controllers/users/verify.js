const { Users } = require('../../models/users');

const verify = async(req, res)=> {
    const {verificationToken} = req.params;
    const user = await Users.findOne({ verificationToken });

    if(!user){
        console.log("verify - error 404")
        return res.status(404).json({ message: "verify - User not found" });
    }
    
    await Users.findByIdAndUpdate(user._id, {verify: true, verificationToken: ""});

    res.json({
        message: "Email verify success, Verify token is required"
    })
}

module.exports = verify;