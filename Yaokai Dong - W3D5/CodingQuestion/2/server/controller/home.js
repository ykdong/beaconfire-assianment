const { User, Songs, Artists } = require('../model/model');
const jwt = require('jsonwebtoken');

exports.getAllInfo = async (req, res) => {
  const decoded_jwt = jwt.verify(req.session.jwtToken, process.env.JWT_KEY);
  // i am not sure if i am using the jwt correct here
  if (req.session.loggedin && decoded_jwt) {
    try {
      const userId = req.session.userId;
      const userAllInfo = await User.findOne({_id: userId}).populate('songs').populate('artists');
      const info = {
        username: userAllInfo.username,
        email: userAllInfo.email
      };
      const songs = userAllInfo.songs;
      const artists = userAllInfo.artists;
      // I could correctly render the home page for a certain user from server
      // but could not display the home page for the user correctly
      res.render('home', { 
        info,
        songs,
        artists, 
        success: true 
      });
    } catch(err) {
      res.render('home', { success: false, msg: err.message });
    }
  } else {
    res.redirect('/');
  }
};