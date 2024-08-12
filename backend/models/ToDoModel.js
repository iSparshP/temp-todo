const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true, // Corrected from 'require' to 'required'
  },
});

module.exports = mongoose.model("ToDo", todoSchema);
