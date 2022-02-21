const express = require("express");
const productRoute = express.Router();

const { isAuthAdmin } = require("../middlewares/isAuthAdmin");
const { upload } = require("../middlewares/upload");
const { isAuth } = require("../middlewares/isAuth");
const {
  addProduct,
  getProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

productRoute.post(
  "/addProduct",
  isAuth,
  isAuthAdmin,
  upload.single("image"),
  addProduct
);

productRoute.get("/", getProducts);

productRoute.get("/:id", getOneProduct);

productRoute.put(
  "/:id",
  isAuth,
  isAuthAdmin,
  upload.single("image"),
  updateProduct
);

productRoute.delete("/:id", isAuth, isAuthAdmin, deleteProduct);
module.exports = productRoute;
