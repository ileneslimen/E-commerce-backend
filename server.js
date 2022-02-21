const express = require("express");
const connectDb = require("./config/connectDb");

require("dotenv").config();

const AuthRoute = require("./routes/auth");
const CartRoutes = require("./routes/cart");

const productRoute = require("./routes/product");

const app = express();
connectDb();

app.use(express.json());
app.use("/api/auth", AuthRoute);

app.use("/api/product", productRoute);
app.use("/api/cart", CartRoutes);

app.listen(process.env.port, () =>
  console.log(`server is running onport ${process.env.port}`)
);
