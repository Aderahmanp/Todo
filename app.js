const express = require("express");
const noteRoutes = require("./routes/note");
const mongoose = require("mongoose");

try {
  dotEnv = require("dotenv").config();
} catch (err) {
  console.log(err.message);
}

// Initial PORT
const PORT = process.env.PORT || 1234;
const mongoUrl = process.env.MONGGO_DB_URL;

// Connecting Mongoose
mongoose.set("useCreateIndex", true);
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log(`Mongoose connected at ${mongoUrl}`);
  })
  .catch(err => {
    throw new Error(err);
  });

// Running Express Application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialization of plug'in Middleware, Routes
app.use("/", noteRoutes);

// Listen server
app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});

module.exports = app;
