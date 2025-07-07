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
})

app.listen(port, ()=>{
    console.log(`Listning on port ${port}`);
});