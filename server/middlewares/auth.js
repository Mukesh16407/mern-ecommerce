const admin = require("../firbase");
const User = require("../models/user");

exports.authCheck = async (req, res, next) => {
  try {
    const firbaseUser = await admin.auth().verifyIdToken(req.headers.authtoken);
    //console.log("FIREBASE USER IN AUTHCHECK", firbaseUser);
    req.user = firbaseUser;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};
exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;

  const adminUser = await User.findOne({ email }).exec();

  if (adminUser.role !== "admin") {
    res.status(403).json({
      err: "Admin resource. Access denied.",
    });
  } else {
    next();
  }
};
