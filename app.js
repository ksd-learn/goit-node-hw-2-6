const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const contactsRouter = require('./routes/api/contacts');
const authRouter = require('./routes/users/auth');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(express.static("public"));

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static("public"))

app.use('/users', authRouter);
app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
});

module.exports = app

// QUw4oGCLcpMqzg2c
// Postman   Request Trace: 64b43f835b4123219ce464ecd0155425
