const { Schema, model } = require('mongoose');

const contact = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
}, {
  versionKey: 'revision',
  timestamps: true
});

const Contacts = model('contacts', contact);

module.exports = { Contacts }
