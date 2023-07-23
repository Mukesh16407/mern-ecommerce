const express = require("express");

const router = express.Router();

//middleware
const { authCheck } = require("../middlewares/auth");

//controller
const { createOrUpdateUsers, currentUsers } = require("../controllers/auths");

router.post("/create-or-update-user", authCheck, createOrUpdateUsers);
router.post("/current-user", authCheck, currentUsers);

module.exports = router;
