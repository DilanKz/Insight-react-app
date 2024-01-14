const mongoose = require('mongoose');

const UserModel = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        primaryKey: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    accountType: {
        type: String,
        enum: ['regular', 'author', 'requested' ,'banned'],
        default: 'regular',
    },
});

const User = mongoose.model('User', UserModel);
module.exports = User;
