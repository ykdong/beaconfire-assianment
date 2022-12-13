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

document.getElementById('signupBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const userInput = {
    username,
    email,
    password
  };
  async function validInput(userInput) {
    return await signupSchema.validate(userInput);
  };
  if (validInput(userInput)) {
    fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(userInput)
    });
  };
});

// handle login in functionality
document.getElementById('loginBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPass').value;
  const userInput = {
    email,
    password
  };
  async function validInput(userInput) {
    return await loginSchema.validate(userInput);
  };
  if (validInput(userInput)) {
    fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(userInput)
    });
  };
});