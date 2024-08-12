const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  try {
    const toDo = await ToDoModel.find();
    res.status(200).send(toDo); // Added status code
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch to-do items" }); // Added error handling
  }
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  try {
    const data = await ToDoModel.create({ text });
    console.log("Added Successfully....");
    console.log(data);
    res.status(201).send(data); // Added status code
  } catch (err) {
    res.status(500).send({ error: "Failed to save to-do item" }); // Added error handling
  }
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  try {
    await ToDoModel.findByIdAndUpdate(_id, { text });
    res.status(200).send("Updated Successfully..."); // Changed to res.status
  } catch (err) {
    res.status(500).send({ error: "Failed to update to-do item" }); // Added error handling
  }
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  try {
    await ToDoModel.findByIdAndDelete(_id);
    res.status(200).send("Deleted Successfully..."); // Changed to res.status
  } catch (err) {
    res.status(500).send({ error: "Failed to delete to-do item" }); // Added error handling
  }
};
