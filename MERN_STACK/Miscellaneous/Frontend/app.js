// let arr = [1,2,3];
// arr.sayHello = ()=>{
//     console.log("Hello! I am arr..");
// }

// const { name } = require("ejs");


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
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi! My name is ${name}!`);
//     }
// }

// let p1 = new Person("abhishek", 23);
// let p2 = new Person("naincy", 20);


// class Person {
//     constructor(name, age){
//         console.log("Person class constructor!!");
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi! I am ${this.name}`);
//     }
// }
// class Student extends Person {
//     constructor(name, age, marks){
//         console.log("Student class constructor!!");
//         super(name, age); // parent class constructor is being called
//         this.marks = marks;
//     }
// }

// class Teacher extends Person {
//     constructor (name, age, subject){
//         console.log("Teacher class constructor!!");
//         super(name, age); // parent class constructor is being called
//         this.subject = subject;
//     }
// }

// let stu1 = new Student("aashi", 20, 94);


class Mammal {
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("I am eating.");
    }
}

class Dog extends Mammal {
    constructor(name){
        super(name);
    }
    bark(){
        console.log("wofff...");
    }

    eat(){  // this will override the parent class eat function as this is of same name.
        console.log("Dog is eating");
    }
}

class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow....");
    }
}