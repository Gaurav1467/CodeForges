const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_SERVER_URI);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = connectDB;
