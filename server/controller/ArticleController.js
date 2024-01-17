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

    getAllFromAuthor: async function (req, res, next) {
        let id = req.body.id;
        let articles = await Article.find({author: id});
        console.log(articles);
        res.send(articles);
    },

    deleteArticle: async function (req, res, next) {
        try {
            let id = req.body.id;
            let article = await Article.deleteOne({ _id: id });

            if (article.deletedCount > 0) {
                res.status(200).json({ success: true, message: "Article deleted successfully." });
            } else {
                res.status(404).json({ success: false, message: "Article not found." });
            }
        } catch (error) {
            next(error); // Forward the error to the next middleware or error handler
        }
    },

    askForDelete: async function (req, res, next) {
        try {
            let id = req.body.id;
            const updatedArticle = await Article.findByIdAndUpdate(
                id,
                { $set: { availability: 'requested' } },
                { new: true }
            );

            if (!updatedArticle) {
                return res.status(404).json({ message: 'Article not found' });
            }

            res.json("article is requested to delete");
        } catch (error) {
        }
    },

    getMostClickedArticles: async function (req, res, next) {
        try {
            const articles = await Article.find().sort({ clicks: -1 }).limit(10);
            res.send(articles);
        } catch (error) {
            next(error);
        }
    },

    getArticlesByTags: async function (req, res, next) {
        try {
            const tags = req.body.tags;
            const articles = await Article.find({ tags: { $in: tags } });
            res.send(articles);
        } catch (error) {
            next(error);
        }
    },

    getRecentArticles: async function (req, res, next) {
        try {
            const articles = await Article.find().sort({ postData: -1 }).limit(10);
            res.send(articles);
        } catch (error) {
            next(error);
        }
    },
}

module.exports = articleController;