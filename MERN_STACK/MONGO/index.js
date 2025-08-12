const mongoose = require('mongoose');
//NOTE: [https://]--> protocol, localhost[127.0.0.1], 8080--> this the port number for MongoDB [27017]
// [/test]--> this is to connect to the database

// mongoose.connect('mongodb://127.0.0.1:27017/test');


// connect() <-- this is the async process (i.e., the process which take the extra time 
// which do not go with code) , the above connection is also just like the way we can also
// handle it asynchronous

// This is the way to handle the code asynchronously
main()
.then(() =>{
    console.log("Connection Successfull!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

// User.insertMany([
//     {name :"Radha", email:"radha@google.com", age: 20},
//     {name: "Krishna", email:"krishna@yahoo.in", age: 21},
//     {name: "Balram", email:"balram@google.com", age:22}
// ]).then(res=>{
//     console.log(res);
// });

// User.findById("689a780ec5260e97468815f0").then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err)
// });


// User.updateOne({_id: "689a780ec5260e97468815f0"}, {age:25}).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// });

// User.findOneAndUpdate({name: "Krishna"}, {age: 22}, {new : true}).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// User.deleteOne({_id: "689a76481798074b4f1b27fd"}).then(res=>{
//     console.log(res);
// });

User.deleteMany({
    $and: [
        {age: {$gt: 18}},
        {age: {$lt: 20}}
    ]
}).then(res=>{
    console.log(res);
})




// const user1 = new User({name:"Abhishek", email:"abhi@yahoo.in", age: 20});
// user1.save();
// const user2 = new User({name: "Naincy", email:"naincy@hotmail.com", age: 19});
// user2.save().then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// });


// const Employee = mongoose.model("Employee", userSchema);
