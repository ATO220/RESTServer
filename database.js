const mongoose = require('mongoose');
const URI = 'mongodb://localhost/db-rest-server';

mongoose.connect(URI)
    .then(db => console.log('DB is connect'))
    .catch(err => console.error(err));

module.exports = mongoose;