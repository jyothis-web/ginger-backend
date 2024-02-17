const createusermodel = require("../models/createUser");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
// for register
const createUser = async (req, res) => {
    try {
      const { name} = req.body;
      const file = req.file;
    //   console.log(req.body); 
    //   console.log(req.file);
      // validation
      if (!name) {
        return res.status(400).json({ mesage: "Name is required" });
      }
      // user checking
      const existingUser = await createusermodel.findOne({ name });
  
      // existing user checking
      if (existingUser) {
        return res.status(200).json({
          success: false,
          message: "Already registered, please login",
        });
      }
      // save
      const user = new createusermodel({ name, image: {
        data: file.buffer, 
        contentType: file.mimetype,
        imagePath: `uploads/${file.filename}`,
      },});
      await user.save();
  
      return res
        .status(201)
        .json({ success: true, message: "User created successfully",user });
    } catch (error) {
      // return console.error(error);
      return res.status(500).json({
        success: false,
        message: "Error in registration",
        error: error.message,
      });
    }
  };
  
  module.exports = {createUser}