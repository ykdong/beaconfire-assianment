const path = require("path");
require("dotenv").config(path.join(__dirname, "../../../.env"));
const mongoose = require("mongoose");
const { MONGO_URL } = process.env;

async function connectDB () {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected correctly to database");
  } catch (err) {
    console.log(err.stack);
  }
}

connectDB().catch(console.dir);
