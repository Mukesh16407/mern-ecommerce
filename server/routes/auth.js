const express = require('express')

const router = express.Router();

//middleware
const {authCheck} = require("../middlewares/auth");

//controller
const {createOrUpdateUsers} = require('../controllers/auths')

router.post('/create-or-update-user',authCheck,createOrUpdateUsers)

module.exports=router