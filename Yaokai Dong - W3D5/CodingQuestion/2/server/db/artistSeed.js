const path = require('path');
require('dotenv').config(path.join(__dirname, '../../../.env'));
const mongoose = require('mongoose');
const { MONGO_URL } = process.env;
const { Artists } = require('../model/model');
const fileId = mongoose.Types.ObjectId;

async function createUser() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected!");
    let artist1 = {
      "name": "artist1",
      "songs": [
        fileId("63953b31772b94dcb442239d"),
        fileId("63953b31772b94dcb442239c"), 
        fileId("63953b31772b94dcb442239b"), 
        fileId("63953b31772b94dcb442239a")
      ]
    };
    let artist2 = {
      "name": "artist1",
      "songs": [
        fileId("63953b31772b94dcb4422399"),
        fileId("63953b31772b94dcb4422398"), 
        fileId("63953b31772b94dcb4422397"), 
        fileId("63953b31772b94dcb4422396")
      ]
    }
    const insertManyArtists = await Artists.insertMany([artist1, artist2]);
    console.log(insertManyArtists);
  } catch(err) {
    console.log(err.stack);
  } finally {
    await mongoose.connection.close();
  }
}

createUser().catch(console.dir);