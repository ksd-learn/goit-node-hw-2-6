const { Schema, model } = require('mongoose');

const emailReqExp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/

const userSchema = new Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        match: emailReqExp,
        required: [true, 'Email is required'],
        unique: true,
    },
    avatarURL: {
        type: String,
        required: true
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    }
})

const Users = model('users', userSchema);

module.exports = { Users }