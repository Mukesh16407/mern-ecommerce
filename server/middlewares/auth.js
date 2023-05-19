const admin = require("../firbase");

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
