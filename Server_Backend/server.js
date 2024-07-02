const express = require("express");
const dotenv = require("dotenv");
const { chitchat } = require("./UserData/UserData");
const app = express();

dotenv.config();
app.get("/", (req, res) => {
    res.send("API is Running Successfully");
  }); 

app.get("/api/chitchat:id", (req, res) => {
    const aPersonChat = chitchat.find((c) => c._id ===req.params.id);
    res.send(aPersonChat);
}); 

app.get("/api/chitchat:id", (req, res) => {
    res.send(chitchat);
    }); 

const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`Server is running on port ${PORT}`));
