const JournalModel = require("../models/Journal");

exports.getSingleJournalElement = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const element = await JournalModel.findById(id);
    res.status(200).json(element);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

exports.postJournalRecord = async (req, res) => {
  const newPost = new JournalModel(req.body);
  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

exports.getJournalElementsByUserid = async (req, res) => {
  try {
    const userid = req.body.userid;
    const journalRecords = await JournalModel.find({
      userid: userid,
    });
    res.status(200).json(journalRecords);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};
