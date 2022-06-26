const express = require("express");

const journal = require("../controllers/journalController");

const router = express.Router();
router.post("/", journal.postJournalRecord);
router.post("/byUserId", journal.getJournalElementsByUserid);

module.exports = router;
