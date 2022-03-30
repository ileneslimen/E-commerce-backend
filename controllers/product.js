const productSchema = require("../models/product");

exports.addProduct = async (req, res) => {
  try {
    const product = new productSchema({
      ...req.body,
      image: req.file.filename,
    });
    await product.save();
    res.status(200).send({ msg: "product added ", product });
  } catch (error) {
    res.status(500).send({ msg: "could not add product ", error });
  }
};
exports.getProducts = async (req, res) => {
  try {
    const products = await productSchema.find();
    res.status(200).send({ msg: "your products", products });
  } catch (error) {
    res.status(500).send({ msg: "could not get products" });
  }
};
exports.getOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productSchema.findById(id);
    res.status(200).send({ msg: "your product", product });
  } catch (error) {
    res.status(500).send({ msg: "could not get product" });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productSchema.findByIdAndUpdate(id, {
      $set: { ...req.body, image: req.file ? req.file.filename : req.imageup },
    });
    res.status(200).send({ msg: "product updated", product });
  } catch (error) {
    res.status(500).send({ msg: "could not update", error });
  }
};
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await productSchema.findByIdAndDelete(id);

    res.status(200).send({ msg: "product deleted" });
  } catch (error) {
    res.status(500).send({ msg: "could not delete product", error });
  }
};
