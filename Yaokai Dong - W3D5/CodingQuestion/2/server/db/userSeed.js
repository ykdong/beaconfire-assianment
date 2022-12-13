const path = require('path');
require('dotenv').config(path.join(__dirname, '../../../.env'));
const mongoose = require('mongoose');
const { MONGO_URL } = process.env;
const { User } = require('../model/model');
const fileId = mongoose.Types.ObjectId;

async function createUser() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected!");
    let user1 = {
      "username": "user1",
      "email": "user1@email.com",
      "password": "user1pass",
      "songs": [
        fileId("63953b31772b94dcb442239d"),
        fileId("63953b31772b94dcb442239c"), 
        fileId("63953b31772b94dcb442239b"), 
        fileId("63953b31772b94dcb442239a")
      ],
      "artists": []
    };
    let user2 = {
      "username": "user2",
      "email": "user2@email.com",
      "password": "user2pass",
      "songs": [
        fileId("63953b31772b94dcb4422399"),
        fileId("63953b31772b94dcb4422398"), 
        fileId("63953b31772b94dcb4422397"), 
        fileId("63953b31772b94dcb4422396")
      ],
      "artists": []
    }
    const insertManyUser = await User.insertMany([user1, user2]);
    console.log(insertManyUser);
  } catch(err) {
    console.log(err.stack);
  } finally {
    await mongoose.connection.close();
  }
}

createUser().catch(console.dir);