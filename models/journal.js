var Schema = mongoose.Schema;

var JournalSchema = new Schema({
  username: String,
  journal_content: String,
});

// Compile model from schema
var JournalModel = mongoose.model("Journal", JournalSchema);
