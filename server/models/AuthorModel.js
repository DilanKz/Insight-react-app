const mongoose = require('mongoose');

const AuthorModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
});

const Author = mongoose.model('Author', AuthorModel);
module.exports = Author;
