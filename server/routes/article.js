var express = require('express');
var router = express.Router();
let {articles}=require('../constants/const')

/* GET all articles listing. */
router.get('/all', function(req, res, next) {
    res.send(articles);
});

module.exports = router;
