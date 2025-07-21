// let arr = [1,2,3];
// arr.sayHello = ()=>{
//     console.log("Hello! I am arr..");
// }

const { name } = require("ejs");


// this is the first method
// function PersonMaker(name, age){
//     const person= {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };

//     return person;
// }


// this is the second method
// Constractors - dosen't return anything & start with capital
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk()= function(){
//     console.log(`Hi! My name is ${this.name}`);
// }

// let p1 = new Person("abhishek", 23);
// let p2 = new Person("naincy", 20);


// this is the third method
// with the use of classes
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi! My name is ${name}!`);
    }
}

let p1 = new Person("abhishek", 23);
let p2 = new Person("naincy", 20);