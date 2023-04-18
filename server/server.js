const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./config/db.Config')
require('dotenv').config();
const fs = require('fs')

//import routes

//app
const app = express();
const port = process.env.PORT || 8000;




//MIDDLEWARES
app.use(morgan("dev"));
app.use(bodyParser.json({limit:"2mb"}));
app.use(cors());


//route middleware

fs.readdirSync('./routes').map((r)=>app.use("/api",require("./routes/" + r)))





app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})
