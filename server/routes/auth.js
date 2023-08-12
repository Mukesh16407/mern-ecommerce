const express = require("express");

const router = express.Router();

//middleware
const { authCheck, adminCheck } = require("../middlewares/auth");

//controller
const { createOrUpdateUsers, currentUsers } = require("../controllers/auths");

router.post("/create-or-update-user", authCheck, createOrUpdateUsers);
router.post("/current-user", authCheck, currentUsers);
router.post("/current-admin", authCheck, adminCheck, currentUsers);
module.exports = router;
