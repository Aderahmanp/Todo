const Note = require("../models/note");

exports.create = (req, res) => {
  let note = Object.assign(req.body);
  const newnote = { ...note };
  if (!note.body)
    return res.status(400).send({
      message: "Note can not be empty"
    });

  return Note.create(newnote)
    .then(data => {
      res.status(201).json({
        success: true,
        message: "Successful",
        data: data
      });
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: err.message
      });
    });
};

exports.allnote = (req, res) => {
  Note.find({})
    .then(data => {
      res.status(200).json({
        success: true,
        message: "succesfuly",
        data: data
      });
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: err.message
      });
    });
};
