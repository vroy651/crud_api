const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = () => {
    mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log("connection failed!");
  });
};

module.exports = connectDB;
