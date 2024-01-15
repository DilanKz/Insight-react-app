var express = require('express');
var router = express.Router();
const articleController=require('../controller/ArticleController')
/* GET all articles listing. */
router.get('/all', articleController.getAllArticles);
router.post('/add', articleController.postArticle);
router.get('/from/:id', articleController.getAllFromAuthor);

module.exports = router;
