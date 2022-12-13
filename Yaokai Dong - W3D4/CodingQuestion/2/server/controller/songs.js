const { Songs, User } = require('../model/model');
const fieldId = require('mongoose').Types.ObjectId;

exports.getByLanguage = async (req, res) => {
  const lan = req.query.language;
  try {
    const result = await Songs.find({ language: lan });
    res.status(200).json({ success: true, data: result })
  } catch(error) {
    res.status(500).json({ success: false, msg: error.message });
  }
}

exports.getByCategory = async (req, res) => {
  const userGenre = req.params.category;
  try {
    const result = await Songs.find({ genre: userGenre });
    res.status(200).json({ success: true, data: result });
  } catch(error) {
    res.status(500).json({ success: false, msg: error.message });
  }
}

exports.getByParam = async (req, res) => {
  const userParams = req.params.search;
  try {
    const result = await Songs.find({ artist: {$regex: userParams}, title: {$regex: userParams}});
    res.status(200).json({ success: true, data: result });
  } catch(error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

exports.likeASong = async (req, res) => {
  const userId = req.body.userId;
  const songId = req.params.songId;
  try {
    const result = await User.updateOne({ _id: userId}, { "$push": { songs: fieldId(songId) }});
    res.status(201).json({ success: true, data: result});
  } catch(error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};