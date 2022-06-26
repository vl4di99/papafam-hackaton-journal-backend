const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JournalSchema = new Schema({
  thought: String,
  cognitive_error: String,
  rational_alternative: String,
  userid: {
    type: String,
    index: {
      unique: true,
      dropDups: true,
    },
  },
  date: Date,
});

// Compile model from schema
const JournalModel = mongoose.model("Journal", JournalSchema);

module.exports = JournalModel;
