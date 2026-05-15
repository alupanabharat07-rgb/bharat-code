const express = require("express");
const app = express()
const PORT = 4000;

let collegeDetails=[];
app.use(express.json())

app.post("/add-student",(req,res)=>{
    const newStudent={
        stdName:req.body.name,
        stdRollNo:req.body.rollNo,
        stdBranch:req.body.branch,
        stdSkills:req.body.skills,

    };
    studentDetails.push(newStudent);
    res.status(200).json({message:"student added successfully",newStudent});
});
app.post("/add-multiplestudents",(re,res)=>{
    const allNewStudents=req.body.allStidents;
    studenetDetails.push(allNewStudent);
    res.status(200).json({message:"all students added successfully"})
})
app.get("/get-student",(req,res)=>{
    res.status(200).json
    ({student:studentDetails})
})




//app.post("add-student",(req,res)=>{

//})

//app.get("/", (requestAnimationFrame, res) => {
// res.status(200).send("server running get method called")
//})

//app.get("/get-users", (req, res) => {

  // res.status(200).json({
  //      name: "bharat",
    //    role: "developer",
   //    email: "alupanabharat07@gmail.com",
   //    phone: "7396826290",
   // });
/app.listen(PORT, () => {
    console.log("Server running on port", PORT);
})