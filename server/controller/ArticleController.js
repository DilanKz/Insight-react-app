const {articles} = require("../constants/const");

const articleController={

    getAllArticles:function(req, res, next) {
        res.send(articles);
    }
}

module.exports = articleController;