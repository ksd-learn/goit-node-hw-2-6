const fs = require('node:fs/promises');
const path = require('node:path');

const FILE_PATH = path.join(__dirname, '/contacts.json');

const listContacts = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(FILE_PATH, 'utf8'));
    return contacts
  } catch(error) {
    res.status({error: error.message})
  }
 };

const getById = async (contactId) => {
  try {
    const contacts = JSON.parse(await fs.readFile(FILE_PATH, 'utf8'));
    const contactById = contacts.filter(item => item.id === contactId);
    if (!contactById.length) {
      next()
    }
    return contactById[0]
  } catch(error) {
    res.status({error: e.message})
  }
 };

const removeContact = async (contactId) => {
  try {
    const contacts = JSON.parse(await fs.readFile(FILE_PATH, 'utf8'));
    const contactById = contacts.filter(item => item.id === contactId);
    if (!contactById.length) {
      next()
    }
    const contactsUpdate = contacts.filter(item => item.id !== contactId);
    await fs.writeFile(FILE_PATH, JSON.stringify(contactsUpdate));
  } catch(error) {
    res.status({error: e.message})
  }
 };

const addContact = async (body) => {
  try {
    const contacts = JSON.parse(await fs.readFile(FILE_PATH, 'utf8'));
    contacts.push(body);
    await fs.writeFile(FILE_PATH, JSON.stringify(contacts));
    return body
  } catch(error) {
    res.status({error: e.message})
  }
 };

const updateContact = async (contactId, body) => {
  try {
    const contacts = JSON.parse(await fs.readFile(FILE_PATH, 'utf8'));
    const index = contacts.findIndex(item => item.id === contactId);
    if (!index) {
      return next();
    }
    contacts[index] = {
      id: contactId,
      ...body
    };
    await fs.writeFile(FILE_PATH, JSON.stringify(contacts));
    return contacts[index]
  } catch(error) {
    res.status({error: e.message})
  }
 };

module.exports = {
  listContacts,
  getById,
  removeContact,
  addContact,
  updateContact,
}
