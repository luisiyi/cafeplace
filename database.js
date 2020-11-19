const mongoose = require('mongoose');

const URI = 'mongodb://localhost/cafeplace';

mongoose.connect(URI)
    .then(db => console.log("BD esta conectada"))
    .catch(err => console.error(err));

module.exports = mongoose;