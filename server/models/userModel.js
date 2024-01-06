let mongoose = require('mongoose')

const UserModel = mongoose.Schema(
    {
        "email": {
            type: String,
            require: true,
            unique:true,
            index: true,
            primaryKey:true
        },
        "password": {
            type: String,
            require: true
        },
        "name": {
            type: String,
            require: true
        },
        "image": {
            type: Buffer
        }
    }
);

const user = mongoose.model("User", UserModel);
module.exports = user;