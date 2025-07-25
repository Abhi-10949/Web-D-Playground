const express = require("express");
const app = express();
const port = 8080;
const path = require("path"); // to use folder in index.js first we have to require the path.

// to parse the data in the api request we use 
app.use(express.urlencoded({extended : true}));

// set view engine
app.set("view engine", "ejs");
// seting path for views folder
app.set("views", path.join(__dirname, "views"));
//seting path for public folder
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username : "abhishek",
        content : "I got selected for my first intership",
    },
    {
        username: "sradha",
        content: "I love coding",
    },
    {
        username: "rahulkumar",
        content: "I am a developer",
    },
];

app.get("/posts", (req, res)=>{
    // to send all values of posts we will have to render for that we will
    // make .ejs file in views
    // res.send("server is working well!");
    res.render("index.ejs",{posts});
});

app.get ("/posts/new", (req,res)=>{
    res.render("new.ejs");
});

app.post("/posts", (req,res)=>{
    let {username, content} = req.body;
    posts.push({username, content});
    console.log(req.body);
    res.redirect("/posts");
});

app.listen(port, ()=>{
    console.log(`Listning to port ${port}...`);
});