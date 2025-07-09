const express = require("express");
const app = express();
const path = require("path"); // we require the path

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // setting views in the app to this path

app.get("/", (req, res) =>{
    // res.send("this is home"); // instead of this we will use res.render("home.ejs")
    res.render("home.ejs");
});
app.get("/hello", (req, res)=>{
    res.send("hello");
});

app.get("/ig/:username", (req,res)=>{
    // const followers = ["abhishek", "harshita", "naincy", "parag", "shubham", "ayush", "rachit"];
    // let {username} = req.params;
    // // console.log(username);
    // res.render("instagram.ejs", {username, followers});

    let {username} = req.params;
    const instaData = require("./data.json");
    // console.log(instaData);
    const data = instaData[username];
    if(data){
        res.render("./instagram.ejs", {data});
    } else{
        res.render("./error.ejs");
    }
});

app.get("/rolldice", (req, res)=>{
    let dicevalue = Math.floor(Math.random() * 6)+1;
    res.render("rolldice.ejs",{num : dicevalue});
})

app.listen(port, ()=>{
    console.log(`Listning on port ${port}`);
});