const express = require("express");
const router = express.Router();
const upload = require("../Config/multerConfig");
const path = require("path");
const createUserController = require("../controllers/createUserController");

// // Multer configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     let ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
//   },
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: function (req, file, cb) {
//     // Validate the file type if needed
//     if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp|avif)$/)) {
//       return cb(new Error("Only image files are allowed!"), false);
//     }
//     cb(null, true);
//   },
// });

// routing for create user || post
router.post(
  "/createUser",
  upload.single("file"),
  createUserController.createUser
);

module.exports = router;
