var express = require('express');
var router = express.Router();
const articleController=require('../controller/ArticleController')
/* GET all articles listing. */
router.get('/all', articleController.getAllArticles);
router.post('/add', articleController.postArticle);
router.post('/from', articleController.getAllFromAuthor);
router.delete('/from', articleController.deleteArticle);

module.exports = router;
