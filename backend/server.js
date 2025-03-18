const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
connectDB();



app.use(cors({
    origin:"http://localhost:3001", // ✅ Allow the frontend to connect to this server
    credentials: true, // ✅ Allow cookies & authentication headers
    // Adjust if frontend is on a different port
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type","Authorization"]
}));
app.use(express.json());

  
app.use("/authRoute", require("./routes/authRoute"));
   
app.listen(5000, () => console.log("Server running on port 5000"));
