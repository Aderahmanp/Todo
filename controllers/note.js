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

exports.update = (req, res) => {
  let note = Object.assign(req.body);
  const update = {};
  note.content ? (update.content = note.content) : null;
  note.title ? (update.title = note.title) : null;

  Note.findByIdAndUpdate(req.params.id, update, { new: true })
    .then(data => {
      res.status(200).json({
        success: true,
        message: "Successfuly",
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

exports.delete = (req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(data => {
      res.status(200).json({
        success: true,
        message: "Successfuly",
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

exports.find = (req, res) => {
  Note.findById(req.params.id)
    .then(data => {
      res.status(200).json({
        success: true,
        message: "Successfuly",
        data: data
      });
    })
    .catch(data => {
      res.status(400).json({
        success: false,
        message: err.message
      });
    });
};
