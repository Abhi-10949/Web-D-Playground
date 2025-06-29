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

app.use((req, res)=>{
    console.log("request recevied");
});