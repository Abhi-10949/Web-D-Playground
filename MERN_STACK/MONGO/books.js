const mongoose = require('mongoose');

//connection to the DB
main()
.then(() =>{
    console.log("Connection Successfull!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// defining Schema this is the way to define multiple constraints
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 30,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for amazon selling!"],
    },
    discount:{
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: {
        type: [String],
    },
})

// defining Models
const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("689a9a34578a8a3cf1827b5f", {price: -100}, {runValidators: true})
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err.errors.price.properties.message);
});


// insertion
// let book1 = new Book({
//     title: "Marvel Comics v2",
//     price: "699",
//     genre: ["fiction", "subper-hero's", "comics"],
// });

// book1.save().then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// });