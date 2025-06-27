// let n = 5;
// for(let i = 0;i<n;i++){
//     console.log("Hello",i);
// }

// console.log("Bye!");

// let n1=[1,2,3,4,5];
// for(i of n1){
//     console.log("index's", i);
// }

// console.log(process.argv);

// let args = process.argv;
// for(let i = 2;i<args.length;i++){
//     console.log("Hello to ", args[i]);
// }

// const someValue = require("./math"); // this require() will exprot all the property
// console.log(someValue.g);

// const info = require("./fruits");
// console.log(info);

// const figlet = require("figlet");

// figlet("Abhishek Kumar!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// we are dealing with import modules
import {sum, PI} from "./math.js"; // in ES6 file extension is required
import { generate, count } from "random-words";

// console.log(sum(1,2));
// console.log(PI);
console.log(generate());