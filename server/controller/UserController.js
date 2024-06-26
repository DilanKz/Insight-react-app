const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
let mailSender = require('../utils/mailSender');
let otpGenerator = require('../utils/otpGenerator');
const mongoose = require('mongoose');

const userController = {
    getUserCredentials: async function (req, res, next) {
        const {mail, password} = req.body;

        const user = await User.findOne({email: mail});

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({message: 'Invalid email or password'});
        }

        res.send(user);

    },

    saveUserCredentials: async function (req, res, next) {
        try {
            const userCred = req.body;

            const hashedPassword = await bcrypt.hash(userCred.password, 10);
            const savedUser = await User.findOne({email: userCred.email});

            if (!savedUser) {
                const user = await User.create({
                    email: userCred.email,
                    password: hashedPassword,
                    name: userCred.name,
                    image: userCred.image,
                });

                res.send(user);
            } else {
                res.status(401).json({message: 'User already exists'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    getOTP: async function (req, res, next) {
        let {email} = req.body;
        const savedUser = await User.findOne({email: email});

        if (savedUser) {

            let otp = otpGenerator.getOtp();

            const dummyMailOptions = {
                from: 'falonh45@gmail.com',
                to: email,
                subject: 'OTP Code',
                text: `This is your otp code for password reset ${otp}`,
            };

            await mailSender.sendMail(dummyMailOptions);

            res.send(otp);
        } else {
            res.status(401).json({message: 'User doesn\'t exist'});
        }

    },
    getRequested: async function (req, res, next) {
        const users = await User.find({accountType: 'requested'});
        res.send(users);
    },
    updateCredentials: async function (req, res, next) {
        try {
            const {email, name, address, contact, image} = req.body;

            const updatedUser = await User.findOneAndUpdate(
                {email: email},
                {
                    $set: {
                        name: name || '',
                        address: address || '',
                        contact: contact || '',
                        image: image || '',
                    },
                },
                {new: true}
            );

            if (updatedUser) {
                console.log('User updated:', updatedUser);
                res.send(updatedUser);
            } else {
                console.log('User not found');
                res.status(401).json({message: 'User not found'});
            }


        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    updatePassword: async function (req, res, next) {
        const {mail, password} = req.body;
        console.log(mail)
        try {
            const savedUser = await User.findOne({email: mail});
            console.log(savedUser)
            if (savedUser) {
                const hashedPassword = await bcrypt.hash(password, 10);

                savedUser.set({
                    password: hashedPassword,
                });

                await savedUser.save();

                return res.status(200).json({message: 'Password successfully changed'});
            } else {
                return res.status(401).json({message: 'User doesn\'t exist'});
            }
        } catch (error) {
            console.error('Error updating password:', error);
            return res.status(500).json({message: 'Internal Server Error'});
        }


    },
    swapAccount: async function(req,res,next){
        const {email, type} = req.body;

        try {
            const updatedUser = await User.findOneAndUpdate(
                {email: email},
                {
                    $set: {
                        accountType:type
                    },
                },
                {new: true}
            );
            return res.status(200).json(updatedUser);
        }catch (e) {
            return res.status(200).json({message:'error changing account'});
        }

    },
    getOne:async function(req,res,next){

        try {
            let id = req.body._id;
            const user = await User.findOne({_id:id});
            return res.status(200).json(user);
        }catch (e) {
            return res.status(200).json({message:'error finding account'});
        }
    },

    /*updateCredentials: async function (req, res, next) {
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
    },

    updatePassword: async function (req, res, next) {
        const {email, password} = req.body;
        const savedUser = await User.findOne({email: email});

        if (savedUser){

            savedUser.set({
                name: password || savedUser.password
            });

            await savedUser.save();

            res.status(200).json({message:'password successfully changed'});
        }else {
            res.status(401).json({message: 'User doesn\'t exist'});
        }

    }*/

    getStats:async function(req,res,next){
        const db = mongoose.connection.db;
        const dbStats = await db.stats();

        const storageSizeMB = dbStats.storageSize / (1024 * 1024);
        const dataSizeMB = dbStats.dataSize / (1024 * 1024);
        const mbLeft = storageSizeMB - dataSizeMB;

        res.json({ storageSizeMB, dataSizeMB, mbLeft });
    }
}

module.exports = userController