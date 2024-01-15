const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {
    getUserCredentials: async function (req, res, next) {
        const { mail, password } = req.body;

        const user = await User.findOne({ email:mail});

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.send(user);

    },

    saveUserCredentials: async function (req, res, next) {
        try {
            const userCred = req.body;

            const hashedPassword = await bcrypt.hash(userCred.password, 10);
            const savedUser = await User.findOne({ email:userCred.email });

            if (!savedUser) {
                const user = await User.create({
                    email: userCred.email,
                    password: hashedPassword,
                    name: userCred.name,
                    image: userCred.image,
                });

                res.send(user);
            }else {
                return res.status(401).json({ message: 'User already exists' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    getOTP: function (req, res, next) {
        let userCred = req.body;
        console.log(userCred)
        res.send('respond with a resource');
    },

    updateCredentials: async function (req, res, next) {
        try {
            const {email, name, address, contact, image} = req.body;
            const savedUser = await User.findOne({email: email});

            if (savedUser) {
                savedUser.set({
                    name: name || savedUser.name,
                    address: address || savedUser.address,
                    contact: contact || savedUser.contact,
                    image: image || savedUser.image,
                });

                const updatedUser = await savedUser.save();

                console.log('User updated:', updatedUser);
            } else {
                console.log('User not found');
            }


        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    }
}

module.exports = userController