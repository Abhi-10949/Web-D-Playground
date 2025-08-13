const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


Chat.insertMany([
    {
    from: "Naincy",
    to: "Abhishek",
    msg: "Send me your resume",
    created_at: new Date(), //UTC: Universal Time Coordinated
    },
    {
    from: "Ramesh",
    to: "Pragya",
    msg: "Send me your notes for exam preparation",
    created_at: new Date(),
    },
    {
    from: "Mehak",
    to: "Abhishek",
    msg: "Send me all the code's of ADBMS",
    created_at: new Date(),
    },
    {
    from: "Apporva",
    to: "Dhruv",
    msg: "Explain me the min-stack problem.",
    created_at: new Date(),
    },
    {
    from: "Aryan",
    to: "Anjali",
    msg: "Let's prepare for the next upcoming trip.",
    created_at: new Date(),
    },
]);