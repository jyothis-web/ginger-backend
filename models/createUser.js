const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image:{
    image:String,
    ContentType:String,
    imagePath:String,
  },
  updated_time: {
    type: Date,
    default: Date.now,
  },
  created_time: {
    type: Date,
    default: Date.now,
  },
});
const userModel = mongoose.model("createUser", userSchema);

module.exports = userModel;
