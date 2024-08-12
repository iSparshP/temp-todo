const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/ToDoRoute");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5005;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to MongoDb`))
  .catch((err) => console.log(err));

app.use(router);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
