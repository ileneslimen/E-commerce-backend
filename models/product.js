const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  image: {
    type: Object,
    required: true,
  },

  checked: {
    type: Boolean,
    default: false,
  },
  sold: {
    type: Number,
    default: 0,
  },
  imageup: String,
  category: { type: String, required: true },
  sub_category: { type: String, required: true },
  size: { type: String, enum: ["xs", "s", "m", "l"] },
  color: String,
  qty: { type: Number, default: 1 },
});

module.exports = mongoose.model("Product", productSchema);
