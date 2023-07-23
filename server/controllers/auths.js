const User = require("../models/user");

exports.createOrUpdateUsers = async (req, res) => {
  const { name, picture, email } = req.user;

  const user = await User.findOneAndUpdate(
    { email },
    { name: email.split("@")[0], picture },
    { new: true }
  );

  if (user) {
    res.json(user);
    console.log("USER UPDATED", user);
  } else {
    const newUser = await new User({
      email,
      name: email.split("@")[0],
      picture,
    }).save();
    console.log("USER CREATED", newUser);
    res.json(newUser);
  }
};

exports.currentUsers = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).exec();
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
