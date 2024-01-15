var express = require('express');
var router = express.Router();
let {articles}=require('../constants/const')
const tagsController=require('../controller/TagsController')
/* GET all articles listing. */
router.get('/all', tagsController.getAllTags);
router.post('/add', tagsController.postTags);

module.exports = router;
