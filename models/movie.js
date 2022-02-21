const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  userId: { type: mongoose.Schema.Types.ObjectId }, // jointure entre user et movie
});
module.exports = mongoose.model("Movie", MovieSchema);
