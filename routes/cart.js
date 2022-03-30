const express = require("express");
const { isAuth } = require("../middlewares/isAuth");
const CartRoutes = express.Router();
const CartSchema = require("../models/cart");
const productSchema = require("../models/product");

// CartRoutes.post("/:id", isAuth, async (req, res) => {
//   try {
//     const product = await productSchema.findById(req.params.id);

//     const cart = new CartSchema({
//       userId: req.user.id,
//     });

//     cart.products = [...cart.products, product];
//     // cart.products.map((el) =>
//     //   el._id == req.params.id ? { ...el, qty: qty + 1 } : { ...el, qty: 1 }
//     // );

//     await cart.save();
//     res.status(200).send(cart);
//   } catch (error) {
//     res.status(500).send({ msg: "could not add product", error });
//   }
// });

CartRoutes.post("/:id", isAuth, async (req, res) => {
  try {
    let cart = await CartSchema.findOne({ userId: req.user.id });
    const product = await productSchema.findById(req.params.id);

    if (cart) {
      const x = await cart.products.find((el) => el._id == req.params.id);

      if (x) {
        cart.products = await cart.products.map((el) =>
          el._id == req.params.id ? { ...el, qty: el.qty + 1 } : el
        );
      } else {
        cart.products.push(product);
      }

      //   if (p) {
      //     cart.products.push({ ...product, qty: product.qty + 1 });
      //   } else {
      //     cart.products.push({ ...product, qty: 1 });
      //   }

      await cart.save();

      return res.status(200).send({ msg: "your cart", cart });
    } else {
      const cart = new CartSchema({
        userId: req.user.id,
        products: [{ ...product, qty: 1 }],
      });
      await cart.save();
      return res.status(200).send({ msg: "your new cart", cart });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

CartRoutes.get("/:id", isAuth, async (req, res) => {
  try {
    const cart = await CartSchema.findById(req.params.id);
    res.status(200).send({ msg: "your cart", cart });
  } catch (error) {
    res.status(500).send("could not get your cart");
  }
});
CartRoutes.put("/decrement/:id", isAuth, async (req, res) => {
  try {
    const cart = await CartSchema.findOne({ userId: req.user.id });

    // cart.products = await cart.products.map((el) =>
    //   el._id == req.params.id
    //     ? { ...el, qty: el.qty > 0 ? el.qty - 1 : null }
    //     : el
    // );

    // if (x) {
    //   return CartSchema.deleteOne({x});
    // }

    cart.products = await cart.products.map((el) =>
      el._id == req.params.id ? { ...el, qty: el.qty - 1 } : el
    );

    console.log(cart.products);
    await cart.save();
    res.status(200).send({ msg: "deleted", cart });
  } catch (error) {
    res.status(500).send({ msg: "could not remove item", error });
  }
});

CartRoutes.put("/removeitem/:id", isAuth, async (req, res) => {
  try {
    const cart = await CartSchema.findOne({ userId: req.user.id });

    cart.products = cart.products.filter((el) => el.qty > 1);
    console.log(cart.products);
    cart.save();
    res.status(200).send({ msg: "ndhafet lcart", cart });
  } catch (error) {
    res.status(500).send({ msg: "could not remove item", error });
  }
});
module.exports = CartRoutes;
