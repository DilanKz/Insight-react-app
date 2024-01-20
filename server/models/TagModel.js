const mongoose = require('mongoose');

const TagModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    subtags: {
        type:[String],
        required:true
    }
});

const Tag = mongoose.model('Tag', TagModel);
module.exports = Tag;