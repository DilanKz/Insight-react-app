var express = require('express');
var router = express.Router();
let list=require('../constants/const')

/* GET all articles listing. */
router.get('/all', function(req, res, next) {
    res.send(list.at(0));
});

module.exports = router;
