const express = require("express");

const app = express(); // this will help us to create a server side 
// and this app is as object.
console.log(app);

let port = 3000; // *port are the logical endpoints of a network connection
// that is used to exchange the information between a web server and a web client

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
}); // this listen function is use to listen the incoming request
// NOTE : to start the server type : node index.js and to close press
// ctrl c and on the server side type localhost:3000, ensure that the server
// is get started

// app.use((req, res)=>{
//     // console.log(req);
//     console.log("request recevied");
//     // res.send("this is the basic response");
//     let code  = "<h1>Fruits</h1> <ul><li>apple</li><orange</li></ul>";
//     res.send(code);
// });


// NOTE: res.send() this function is used to send the respond to the browser with
// the help of server
// We can able to send only one responce for the same path it may be either : snigle string
// single HTML page  or it may be a single object



app.get("/", (req, res)=>{
    res.send("hello you contacted to root path");
})

app.get("/search", (req, res)=> {
    res.send("you contacted to search path");
})

app.get("/about", (req, res)=>{
    res.send("you contected to about path");
})


// We can treat this route as the while case 😉
// For any GET request that doesn’t match any 
// previously defined route, send this response.
// app.get("*", (req, res)=>{
//     res.send("this path does not exist.");
// })

app.post("/", (req,res)=>{
    res.send("you sent a post req to root");
})