const path = require('path');
require('dotenv').config(path.join(__dirname, '../../../.env'));
const mongoose = require('mongoose');
const { MONGO_URL } = process.env;
const { Songs } = require('../model/model');

async function createSongs() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected!");

    const songs = [];
    for (let i = 0; i < 10; i++) {
      songs.push({
        artist: `artist for ${i}`,
        title: `title for ${i}`,
        language: `language for ${i}`,
        genre: `genre for ${i}`
      })
    }
    const insertManySongs = await Songs.insertMany(songs);
    console.log(insertManySongs);
  } catch(err) {
    console.log(err.stack);
  } finally {
    await mongoose.connection.close();
  }
}

createSongs().catch(console.dir);