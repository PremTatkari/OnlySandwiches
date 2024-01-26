const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log("Connected to MongoDB");
    } catch(err) {
        console.log(err);
    }
};

module.exports = dbConnect;