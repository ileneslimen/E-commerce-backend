const mongoose = require("mongoose");
const product = require("./product");

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId },
  products: [],
});

module.exports = mongoose.model("Cart", CartSchema);
