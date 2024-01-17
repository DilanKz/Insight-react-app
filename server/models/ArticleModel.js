const mongoose = require('mongoose');

const ArticleModel = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    postData: {
        type: Date,
        default: Date.now,
    },
    clicks: {
        type: Number,
        default: 0,
    },
    availability: {
        type: String,
        enum: ['available','requested'],
        default: 'regular',
    }
});

const Article = mongoose.model('Article', ArticleModel);
module.exports = Article;
