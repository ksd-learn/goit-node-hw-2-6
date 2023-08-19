const express = require('express');
const register = require('../../controllers/users/register');
const login = require('../../controllers/users/login');
const logout = require('../../controllers/users/logout');
const current = require('../../controllers/users/current');
const subscription = require('../../controllers/users/subscription');
const updateAvatar = require('../../controllers/users/updateAvatar');
const resendEmail = require('../../controllers/users/resendEmail');
const verify = require('../../controllers/users/verify');
const validateBodyRegister = require('../../middlewares/users/validateBodyRegister');
const validateBodyLogin = require('../../middlewares/users/validateBodyRegister');
const validateBodySubscription = require('../../middlewares/users/validateBodySubscription');
const validateAuthorization = require('../../middlewares/users/validateAuthorization');
const upload = require('../../middlewares/users/upload');
const updatepPictureAvatar = require('../../middlewares/users/updatepPictureAvatar');
const validateBodyEmail = require('../../middlewares/users/validateBodyEmail');

const router = express.Router();

router.post('/register', validateBodyRegister, register);
router.get("/verify/:verificationToken", verify);
router.post("/verify", validateBodyEmail, resendEmail);
router.post('/login', validateBodyLogin, login);
router.get('/logout', validateAuthorization, logout);
router.get('/current', validateAuthorization, current);
router.patch('/subscription', validateAuthorization, validateBodySubscription, subscription);
router.patch("/avatars", validateAuthorization, upload.single("avatar"), updatepPictureAvatar, updateAvatar);

module.exports = router