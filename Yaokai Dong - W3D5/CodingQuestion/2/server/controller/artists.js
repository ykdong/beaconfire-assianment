const fileId = require('mongoose').Types.ObjectId;
const { User } = require('../model/model');

exports.followArtist = async (req, res) => {
  const userId = req.body.userId;
  const artistId = req.params.artistId;
  try {
    const result = await User.updateOne({ _id: userId }, { $push: {artists: fileId(artistId) }});
    res.status(201).json({ success: true, data: result});
  } catch(error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};