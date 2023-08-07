const express = require('express');
const get = require('../../controllers/contacts/get');
const getById = require('../../controllers/contacts/getById');
const addContact = require('../../controllers/contacts/addContact');
const removeContact = require('../../controllers/contacts/removeContact');
const updateContact = require('../../controllers/contacts/updateContact');
const updateStatusContact = require('../../controllers/contacts/updateStatusContact');
const validateBodyUpd = require("../../middlewares/validateBodyUpd");
const validateBodyAdd = require("../../middlewares/validateBodyAdd");
const validateBodyUpdStatusContact = require("../../middlewares/validateBodyUpdStatusContact");
const validateAuthorization = require("../../middlewares/users/validateAuthorization");

const router = express.Router();

router.get('/', validateAuthorization, get);

router.get('/:id', validateAuthorization, getById);

router.post('/', validateAuthorization, validateBodyAdd, addContact);

router.delete('/:id', validateAuthorization, removeContact);

router.put('/:id', validateAuthorization, validateBodyUpd, updateContact);

router.patch('/:id/favorite', validateAuthorization, validateBodyUpdStatusContact, updateStatusContact);

module.exports = router
