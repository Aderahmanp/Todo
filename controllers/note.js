const Note = require("../models/note");

exports.create = (req, res) => {
  let note = Object.assign(req.body);
  const newnote = { ...note };
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
