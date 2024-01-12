const mongoose = require('mongoose');

const AuthorModel = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    bio: {
        type: String,
    },
    books: [
        {
            title: {
                type: String,
                required: true,
            },
            genre: {
                type: String,
            },
        },
    ],
});

const Author = mongoose.model('Author', AuthorModel);
module.exports = Author;
