const express = require('express');
const get = require('../../controllers/contacts/get');
const getById = require('../../controllers/contacts/getById');
const addContact = require('../../controllers/contacts/addContact');
const removeContact = require('../../controllers/contacts/removeContact');
const updateContact = require('../../controllers/contacts/updateContact');
const validateBodyUpd = require("../../middlewares/validateBodyUpd");
const validateBodyAdd = require("../../middlewares/validateBodyAdd");
const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get('/', get);

router.get('/:id', getById);

router.post('/', validateBodyAdd, addContact);

router.delete('/:id', removeContact);

router.put('/:id', validateBodyUpd, updateContact);

module.exports = router
