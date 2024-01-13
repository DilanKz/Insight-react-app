const mongoose = require('mongoose');

const TagsModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subtags: {
        type: [String],
        default: [],
    },
});

const Tags = mongoose.model('Tags', TagsModel);
module.exports = Tags;
