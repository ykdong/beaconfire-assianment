const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  priority: { type: String, required: true },
  timeStamp: { type: String, required: true }
});

const todoList = mongoose.model('todoList', todoSchema, 'todoList');

module.exports = todoList;