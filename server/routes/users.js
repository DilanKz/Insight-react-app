var express = require('express');
var router = express.Router();
let userController = require('../controller/UserController');
/* GET users listing. */
router.post('/login', userController.getUserCredentials);
router.post('/register', userController.saveUserCredentials);
router.post('/reset', userController.getOTP);
router.post('/update', userController.updateCredentials);

module.exports = router;
