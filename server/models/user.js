const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
      // when we want to perform such actions,
      //it is better to have the index property.
      //So that will allow us to query the database more
      // efficiently when we have the index set to true.
    },
    role: {
      type: String,
      default: "subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    // wishlist:[{type:ObjectId,ref:"Product"}]
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
