const express = require("express");
const app = express();
const prot = 8080;

app.use(express.urlencoded({extended : true})); // this is also important for post request for handling the post request.
app.use(express.json()); // this line is very important to write 

app.get("/register", (req, res)=>{
    let {user, password} = req.query;
    res.send(`Standard GET response. Welcome ${user}!`);
});

app.post("/register", (req, res)=>{
    console.log(req.body);
    let {user, password} = req.body;

    res.send(`Standard POST response. Wellcome ${user}!`);
});

app.listen(prot, ()=>{
    console.log(`listining to port ${prot}`);
});