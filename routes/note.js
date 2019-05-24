const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note");

router.post("/notes", noteController.create);

router.get("/notes", noteController.allnote);

module.exports = router;
