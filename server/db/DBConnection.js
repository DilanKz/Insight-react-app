const mongoose = require("mongoose");
require('dotenv').config();

const db = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.info(`Mongo DB Connected  ${connection.connection.host}`);
    }catch (e) {
        console.error(`Couldn't connect to MongoDB  ${e}`);
    }
}