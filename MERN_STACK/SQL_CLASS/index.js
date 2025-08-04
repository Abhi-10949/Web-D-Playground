const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");

app.set("veiw engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD
});


let getRandomUser = ()=>{
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
}


// let query = "SHOW TABLES";

// inserting new data usig placeholder. (mannually)
// let query = "INSERT INTO user (id, username, email, password) VALUES ?";
// let user = [["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//             ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]];

// let data =[];
// for(let i =1; i<=100;i++){
//     data.push(getRandomUser()); // 100 fake user's data
// }


// try{
//     connection.query(query, [data], (err, results)=>{
//     if(err) throw err;
//     console.log(results); // results contains rows returned by server
//     // console.log(results.length);
//     // console.log(results[0]);
//     // console.log(results[1]);
// })
// } catch(err){
//     console.log(err);
// }

// connection.end();

// let getRandomUser = ()=>{
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// }

// console.log(getRandomUser());

// Home page
app.get ("/", (req, res)=>{
    let q = `SELECT COUNT(*) FROM user`;
    try{
    connection.query(q, (err, results)=>{
    if(err) throw err;
    let count = results[0]["COUNT(*)"];
    // console.log(results[0]["COUNT(*)"]); // results contains rows returned by server
    res.render("home.ejs", {count});
    })
    } catch(err){
        console.log(err);
        res.render("some error in database!");
    }
});

// Show Route
app.get("/user", (req, res)=>{
    let q = `SELECT * FROM user`;

    try{
    connection.query(q, (err, users)=>{
    if(err) throw err;
    // console.log(results);
    // res.send(results);
    res.render("showuser.ejs", {users});
    })
    } catch(err){
        console.log(err);
        res.render("some error in database!");
    }
});

// Edit Route


app.listen("8080", ()=>{
    console.log("Serever is listning to port 8080...");
});