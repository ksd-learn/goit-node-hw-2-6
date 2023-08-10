require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;
const MONGO_CONNECT_DB_CONTACTS = process.env.MONGO_CONNECT_DB_CONTACTS;

mongoose.connect(MONGO_CONNECT_DB_CONTACTS, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.log('Database connection successful');
  app.listen(PORT, () => console.log(`Server running. Use our API on port: ${PORT}`));
}).catch(e => {
    console.log(e.message);
    process.exit(1)
})



