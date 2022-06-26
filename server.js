require("dotenv").config();

const express = require("express");
const cors = require("cors");
// get MongoDB driver connection
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, function () {
  console.log("Backend listening on port", PORT);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// perform a database connection when the server starts
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) throw err;
  }
);

const mongoData = mongoose.connection;
mongoData.on("error", console.error.bind(console, "connection error: "));
mongoData.once("open", function () {
  console.log("Connected successfully to MongoDB");
});

app.use(require("./routes/routes"));

app.get("/", (req, res) => {
  res.json({ message: "Hey! This is your server response!" });
});
