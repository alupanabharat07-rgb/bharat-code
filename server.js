const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());
const connection=require("./config/db");
connection()
const studentRouter=require("./routes/studentRouter");
const collegeRouter=require("./routes/collegeRouter");

app.use("/students",studentRouter);
app.use("/college",collegeRouter);

app.listen(PORT,()=>{
    console.log("server running on port",PORT);
});