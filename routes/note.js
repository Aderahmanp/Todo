const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note");

router.post("/notes", noteController.create);

module.exports = router;
