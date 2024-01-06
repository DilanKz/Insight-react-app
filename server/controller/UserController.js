const User = require('../models/userModel')

const userController={
    getUserCredentials:async function (req, res, next) {
        const { mail, password } = req.body;
        console.log(mail);
        console.log(password);
        const user = await User.findOne({ email:mail,password:password});
        console.log(user);
        res.send(user);
    },
    saveUserCredentials:async function (req, res, next) {
        const userCred = req.body;
        console.log(userCred)
        const user = await User.create(userCred);
        res.send(user);
    },
    getOTP:function(req, res, next) {
        let userCred = req.body;
        console.log(userCred)
        res.send('respond with a resource');
    },
    updateCredentials:function(req, res, next) {
        let userCred = req.body;
        console.log(userCred)
        res.send('respond with a resource');
    }
}

module.exports=userController