const {articles} = require("../constants/const");
const Article = require("../models/ArticleModel");

const articleController = {

    getAllArticles:async function (req, res, next) {
        let all = await Article.find();
        res.send(all);
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
        res.send(articles);
    },

    getAllRequested: async function (req, res, next) {
        let articles = await Article.find({availability: "requested"});
        res.send(articles);
    },

    deleteArticle: async function (req, res, next) {
        try {
            const { id } = req.params;
            let article = await Article.deleteOne({ _id: id });

            if (article.deletedCount > 0) {
                res.status(200).json({ success: true, message: "Article deleted successfully." });
            } else {
                res.status(404).json({ success: false, message: "Article not found." });
            }
        } catch (error) {
            next(error);
        }
    },

    askForDelete: async function (req, res, next) {
        try {
            let id = req.params.id;
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

    updateViews: async function (req, res, next) {
        try {
            let id = req.params.id;
            const updatedArticle = await Article.findByIdAndUpdate(
                id,
                { $inc: { clicks: 1 } },
                { new: true }
            );

            if (!updatedArticle) {
                return res.status(404).json({ message: 'Article not found' });
            }

            res.json("Article click count incremented");
        } catch (error) {

        }
    },


    getMostClickedArticles: async function (req, res, next) {
        try {
            const articles = await Article.find().sort({ clicks: -1 }).limit(10);
            res.send(articles);
        } catch (error) {

        }
    },

    getArticlesByTags: async function (req, res, next) {
        try {
            const tags = req.body.tags;
            const articles = await Article.find({ tags: { $in: tags } });
            res.send(articles);
        } catch (error) {

        }
    },

    getRecentArticles: async function (req, res, next) {
        try {
            const articles = await Article.find().sort({ postData: -1 }).limit(10);
            res.send(articles);
        } catch (error) {

        }
    },
}

module.exports = articleController;