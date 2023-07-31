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

const router = express.Router();

router.get('/', get);

router.get('/:id', getById);

router.post('/', validateBodyAdd, addContact);

router.delete('/:id', removeContact);

router.put('/:id', validateBodyUpd, updateContact);

router.patch('/:id/favorite', validateBodyUpdStatusContact, updateStatusContact);

module.exports = router
