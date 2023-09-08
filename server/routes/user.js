const express = require("express");

const router = express.Router();

//middleware
const { authCheck } = require("../middlewares/auth");

//controller
const { createOrUpdateUsers } = require("../controllers/auths");

router.post("/user", authCheck, createOrUpdateUsers);
router.get("/user", (req, res) => {
  res.json({
    data: "hey you hit user api endPoint",
  });
});

module.exports = router;
