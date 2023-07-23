const express = require('express');
const { nanoid } = require("nanoid");
const ctrl = require('../../models/contacts');
const schemas = require("../../schemas/contacts")

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await ctrl.listContacts();
    res.json(result);
  } catch(error) {
    next(error)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ctrl.getContactById(id);
    res.json(result);
  } catch (error) {
    next()
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const { error, value } = schemas.addSchema.validate(data);
    if (error) {
      return res.status(400).json({ message: "missing required name field" });
    }
    const newContact = {
      id: nanoid(),
      ...data,
    };
    result = await ctrl.addContact(newContact);
    res.status(201).json(result)
  } catch(error) {
    next()
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await ctrl.removeContact(id);
    res.status(200).json({ message: 'contact deleted' })
  } catch (error) {
    next()
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (data && Object.keys(data).length === 0 && data.constructor === Object) {
      return res.status(400).json({ message: "missing fields" });
    }
    const { error, value } = schemas.addSchema.validate(data);
    if (error) {
      return res.status(400).json({ message: "missing required name field" });
    }
    result = await ctrl.updateContact(id, data);
    res.status(200).json(result)
  } catch(error) {
    next()
  }
});

module.exports = router
