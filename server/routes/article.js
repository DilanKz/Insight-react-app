var express = require('express');
var router = express.Router();
const articleController=require('../controller/ArticleController')
/* GET all articles listing. */
router.get('/all', articleController.getAllArticles);
router.post('/add', articleController.postArticle);
router.post('/from', articleController.getAllFromAuthor);
router.get('/requested', articleController.getAllRequested);
router.delete('/remove/:id', articleController.deleteArticle);
router.put('/request/:id', articleController.askForDelete);
router.put('/clicked/:id', articleController.updateViews);

module.exports = router;
