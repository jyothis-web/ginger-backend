const express = require("express");
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./Config/dbconnection');
const authRoutes = require('./routes/authRoutes')
const createUserRoutes = require('./routes/createUserRoutes')


const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

//routes
app.use("/Gingerauth",authRoutes);
app.use("/GingerCreateUser",createUserRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server started on port :${PORT}`);
});
connectDB()