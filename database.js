const mongoose = require('mongoose');
const URI = process.env.DB_URI || 'mongodb://localhost:27017/db-rest-server';
const DB_USER =  process.env.DB_USER || "";
const DB_PASS = process.env.DB_PASS || "";
const options = {
  user : DB_USER,
  pass : DB_PASS,
  useNewUrlParser: true
};


mongoose.connect(URI, options)
    .then(db => console.log('DB is connect'))
    .catch(err => console.error(err));

module.exports = mongoose;