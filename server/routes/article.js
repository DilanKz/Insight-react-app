var express = require('express');
var router = express.Router();
let {articles}=require('../constants/const')
const articleController=require('../controller/ArticleController')
/* GET all articles listing. */
router.get('/all', articleController.getAllArticles);

module.exports = router;
