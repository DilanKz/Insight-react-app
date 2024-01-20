const {tags} = require("../constants/const");
const Tag =require( '../models/Tags');

const tagsController={

    getAllTags:function(req, res, next) {
        res.send(tags);
    },

    postTags:async function(req, res, next) {

        let tag = req.body;

        res.send("Article has saved successfully");
        await Tag.create({
            name:tag.name,
            image:tag.image,
            subtags:tag.subtags
        });

    },

    updateTag: async function(req, res, next) {
        let tag = req.body;
        const tagName = req.params.tagName;

        res.send("Tag has been updated successfully");
        await Tag.findOneAndUpdate({ name: tagName }, {
            name: tag.name,
            image: tag.image,
            subtags: tag.subtags
        });
    },

    deleteTag: async function(req, res, next) {
        const name = req.params.name;

        res.send("Tag has been deleted successfully");
        await Tag.findOneAndDelete(name);
    }
}

module.exports = tagsController;