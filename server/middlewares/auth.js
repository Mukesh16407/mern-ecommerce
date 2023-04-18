const admin = require("../firbase");

exports.authCheck=(req,res, next)=>{
    console.log(req.headers) //token
    next()
}
