const { User } = require('../model/model');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env')});
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().pattern(new RegExp('[a-zA-Z0-9]+@[a-z]+\.com')),
  password: joi.string().pattern(new RegExp('[a-zA-Z0-9]+'))
});

const signupSchema = joi.object({
  username: joi.string().pattern(new RegExp('[a-zA-Z0-9]+')),
  email: joi.string().pattern(new RegExp('[a-zA-Z0-9]+@[a-z]+\.com')),
  password: joi.string().pattern(new RegExp('[a-zA-Z0-9]+'))
});

exports.getAllSongs = async (req, res) => {
  const userId = req.session.userId;
  try {
    let data = await User.findOne({ _id: userId}).populate('songs');
    res.render('songList', { songs: data.songs, success: true });
  } catch(err) {
    res.render('songList', { success: false, msg: err.message });
  }
};

exports.updateProfile = async (req, res) => {
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

exports.createNewUser = async (req, res) => {
  try {
    const password = req.body.password;
    const username = req.body.username;
    const email = req.body.email;
    async function validInput(userInput) {
      return await signupSchema.validate(userInput);
    };
    if (validInput({username, email, password})) {
      const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT));
      const user = {
        username,
        email,
        hashedPassword
      }
      const jwtToken = jwt.sign(user, process.env.JWT_KEY, { expiresIn: "10m"});
      const result = await User.create({
        username,
        email,
        password: hashedPassword,
        songs: [],
        artists: []
      });
      req.session.userId = result._id;
      req.session.loggedin = true;
      req.jwtToken = jwtToken;
      res.redirect('/home');
    }
  } catch(error) {
    res.redirect('/');
  }
};

exports.loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  async function validInput(userInput) {
    return await loginSchema.validate(userInput);
  };
  if (validInput({email, password})) {
    try {
      const realUser = await User.findOne({email: email});
      const correctPassword = await bcrypt.compare(password, realUser.password);
      if (correctPassword) {
        const user = {
          email,
          password
        };
        const jwtToken = jwt.sign(user, process.env.JWT_KEY, { expiresIn: "10m"});
        req.session.jwtToken = jwtToken;
        req.session.userId = realUser._id.toString();
        req.session.loggedin = true;
        res.redirect('/home');
      } else {
        res.redirect('/');
      };
    } catch(error) {
      res.redirect('/');
    };
  };
};

exports.logoutUser = async (req, res) => {
  try {
    res.session.destroy();
    res.redirect('/');
  } catch(error) {
    res.redirect('/')
  }
};
