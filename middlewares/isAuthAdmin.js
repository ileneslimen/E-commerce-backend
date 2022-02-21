const UserSchema = require("../models/auth");

exports.isAuthAdmin = async (req, res, next) => {
  try {
    const user = await UserSchema.findOne({
      _id: req.user._id,
    });

    if (user.role === "user")
      return res.status(400).send({ msg: "Admin only" });

    next();
  } catch (err) {
    return res.status(500).send({ msg: "server error auth admin" });
  }
};
