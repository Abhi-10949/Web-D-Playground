const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true})); // this is used to parse the data

main().then(()=>{console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Index Route
app.get("/chats", async (req, res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    // res.send("working..");
    res.render("index.ejs", { chats })
});

// New chat route
 app.get("/chats/new", (req, res)=>{
    res.render("new.ejs");
 });

//  Create Route
app.post("/chats", (req, res)=>{
    let {from, to, msg, created_at} = req.body; // first we have to parse the date done above ↑
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat.save()
    .then(res => {console.log("chat was saved")})
    .catch(err => {console.log(err)});

    res.redirect("/chats");
});

// Edit Route
app.get("/chats/:id/edit", async (req, res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})

// let chat1 = new Chat({
//     from: "Naincy",
//     to: "Abhishek",
//     msg: "Send me your resume",
//     created_at: new Date(), //UTC: Universal Time Coordinated
// });

// chat1.save().then((res)=>{ 
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

app.get("/", (req, res)=>{
    res.send("root server is working");
});


app.listen(8080, ()=>{
    console.log("server is listning on port 8080..");
})