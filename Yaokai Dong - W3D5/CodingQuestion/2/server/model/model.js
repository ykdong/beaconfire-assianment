const mongoose = require('mongoose');
const { Schema } = mongoose;
const refType = Schema.Types.ObjectId;

// define schema for each collection
const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  songs: [{ type: refType, ref: 'Songs'}],
  artists: [{ type: refType, ref: 'Artists'}]
});

const SongsSchema = new Schema({
  artist: { type: String, required: true },
  title: { type: String, required: true },
  language: { type: String, required: true },
  genre: { type: String, required: true }
});

const ArtistsSchema = new Schema({
  songs: [{ type: refType, ref: 'Songs'}],
  name: { type: String, required: true }
});

// make new model for each schema
const User = mongoose.model('User', UserSchema);
const Songs = mongoose.model('Songs', SongsSchema);
const Artists = mongoose.model('Artists', ArtistsSchema);

module.exports = {
  User,
  Songs, 
  Artists
}