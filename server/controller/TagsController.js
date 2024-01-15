const {tags} = require("../constants/const");

const tagsController={

    getAllTags:function(req, res, next) {
        res.send(tags);
    },

    postTags:function(req, res, next) {
        console.log(req.body);
        res.send("Article has saved successfully");
    }
}

module.exports = tagsController;