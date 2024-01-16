const {articles} = require("../constants/const");
const Article = require("../models/ArticleModel");

const articleController = {

    getAllArticles: function (req, res, next) {
        res.send(articles);
    },

    postArticle: async function (req, res, next) {
        const article = req.body;

        const user = await Article.create({
            author: article.id,
            title: article.title,
            body: article.body,
            tags: article.tags,
            image: article.image,
        });

        res.send(user);
    },

    getAllFromAuthor:async function (req, res, next) {
        let id = req.body.id;
        let articles = await Article.find({author: id});
        console.log(articles);
        res.send(articles);
    }
}

module.exports = articleController;