const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Set a higher timeout value
});

const connection = mongoose.connection;

//verify connection
connection.on("connected", () => {
  console.log("Mongo DB Connected Successfull");
});
//verify Connection error

connection.on("error", () => {
  console.log("Mongo Db Connection Error");
});
