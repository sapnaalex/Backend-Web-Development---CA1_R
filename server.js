const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

let users = [];

app.get("/", (req, res)=>{
    res.send("The Server is live!!");
});

app.post("/signup", (req, res)=>{
    const {Username, Email, Password, DOB} = req.body;

    if(!Username || !Email ||!Password || !DOB){
        res.status(400).json({ message: "The the fields are required."});
    }
    if(Username.trim()==""){
        res.status(400).json({message: "Username cannot be empty."});
    }
    if(Email.trim()==""){
        res.status(400).json({message: "Email cannot be empty"})
    }
    if(Password.length()<8|| Password.length()>16){
        res.status(400).json({ message: "Password length should be greater than 8 or less than or equal to 16."})
    }
    const user = {
        Username, Email, Password, DOB
    };

    users.push(user);
    res.status(201).json({ message: "User registered Successfully", user: user});
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})