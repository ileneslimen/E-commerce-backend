const express = require("express");
const productSchema = require("../models/product");

const {
  RegisterValidation,
  Validation,
  LoginValidation,
} = require("../middlewares/Register");
const { isAuth } = require("../middlewares/isAuth");
const { Register, Login } = require("../controllers/auth");
const AuthRoute = express.Router();
const AuthSchema = require("../models/auth");
const cart = require("../models/cart");

AuthRoute.post("/signUp", RegisterValidation, Validation, Register);

AuthRoute.post("/signIn", LoginValidation, Validation, Login);

AuthRoute.get("/current", isAuth, (req, res) => res.send(req.user));

AuthRoute.put("/:id", isAuth, async (req, res) => {
  const product = await productSchema.findById(req.params.id);
  try {
    await AuthSchema.findOneAndUpdate(
      { _id: req.user.id },
      { $set: { cart: [...cart, { ...product, qty: 1 }] } }
    );

    return res.send({ msg: "Added to cart" });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
});

module.exports = AuthRoute;
