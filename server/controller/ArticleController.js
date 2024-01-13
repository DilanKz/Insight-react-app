const {articles} = require("../constants/const");

const articleController={

    getAllArticles:function(req, res, next) {
        res.send(articles);
    },

    postArticle:function(req, res, next) {
        console.log(req.body);
        res.send("Article has saved successfully");
    }
}

module.exports = articleController;