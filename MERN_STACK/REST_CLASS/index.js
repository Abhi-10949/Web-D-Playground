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
app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=>{
    res.send("server is working well!");
});

app.listen(port, ()=>{
    console.log(`Listning to port ${port}...`);
});