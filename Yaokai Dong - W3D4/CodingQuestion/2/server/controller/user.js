const { User } = require('../model/model');

exports.getAllSongs = async (req, res) => {
  try {
    let data = await User.findOne({ _id: "63953dbfc89aad329e43d89d"}).populate('songs');
    res.status(200).json({songs: data.songs, success: true});
  } catch(err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  // get correct information from request body
  const userId = req.body.id;
  const key = req.body.key;
  let updateObj;
  if (key === 'password') updateObj = { password: req.body[key] };
  else if (key === 'email') updateObj = { email: req.body[key] };
  else if (key === 'username') updateObj = { username: req.body[key] };
  
  try {
    let response = await User.updateOne({ _id: userId }, updateObj)
    console.log(response)
    res.status(200).json({ success: true, msg: response });
  } catch(err) {
    res.statsu(500).json({ success: false, msg: err.message });
  }
};