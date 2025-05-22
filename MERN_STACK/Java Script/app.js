// console.log("Hello World!");
// console.log("Abhishek Kumar");

// let a = 10;
// let b = 5;
// console.log("Sum is : ", a+b);

// let pencil = 10;
// let eraser = 5;
// // let output = "The total price : "+ (pencil + eraser)+ " Rupees";

// // This is template literals
// let output = `The total price : ${pencil+eraser} Rupees.`;  //this is called back ticks
// console.log(output);

// // arithmetic operator 
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a**b);
// console.log(a%b);

// // == this operator only compares the values not the type of the value
// // === this operator compares the values and also the type of the value
// let n = 5; 
// let str = '5';
// console.log(n == str); // == is used and it will give true
// console.log(n === str); // === is used and it will give false

// // if condition 
// let firstName = "Abhishek";
// if (firstName == "Abhishek"){
//     console.log(`Welocome ${firstName}`);
// }


// // traffic light 
// let color = "red";
// if(color==="red"){
//     console.log("Stop");
// }
// else if(color==="yellow"){
//     console.log("Wait for a while..");
// }
// else{
//     console.log("GO");
// }

// // Popcorn pries 
// let size = "XL";
// if(size==="XL"){
//     console.log("Price is 250 rupees.");
// } else if(size === "L"){
//     console.log("Price is 200 rupees.");
// } else if (size === "M"){
//     console.log("Price is 100 rupees.");
// } else {
//     console.log("Price is 50 rupees.")
// }

// // to check wheter the string is good or not by checking it's 1st character as 'a' and
// // also have the minimum of 3 character.

// let str1 = "spp";
// let s = str1.length;
// if((str1[0] === "a") && (s>3)){
//     console.log("The given string is the GOOD String.");
// } else {
//     console.log("String is not GOOD.")
// }

// // Switch Case
// let colour = "red";
// switch(colour){
//     case "red":
//         console.log("Stop!!");
//         break;
    
//     case "yellow":
//         console.log("Yellow.");
//         break;

//     case "green":
//         console.log("Green.");
//         break;
        
//     default:
//         console.log("Broken light.");
// }

// // alert 
// // alert("this is a simple alert!");

// // console.error("This is an error message!");
// // console.warn("This is an warning message!")

// // prompts
// // let fN=prompt("Enter your name:");
// // console.log(fN);


// // to check whether the two number having the same last digit 
// // let num1 = prompt("Enter the first number");
// // let num2 = prompt("Enter the second number:");

// // let n1 = num1.length;
// // let n2 = num2.length;

// // if(num1[n1-1]==num2[n2-1]){
// //     console.log("Both the number have the same last digits.");
// // } else{
// //     console.log("The last digits are different to both the numbers.")
// // }



// // tirm method

// let msg = "     Hello     ";
// // console.log(msg.trim())

// // method chaining
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// let msg1 = "ILoveCoding";


// let student = ["radhae", "shyam", "balram"];


// // console.log("Hello World!");
// // console.log("Sum of ", a+b);

// // let pencilPrice = 5;
// // let eraserPrice = 3;
// // let output1 = `The total price ${pencilPrice+eraserPrice} Rupees. `
// // console.log(output1);

// // let output2 = `The total price ${eraserPrice} Rupees. `
// // console.log(output2);


// // let value = prompt("Enter your name");
// // console.log(value);

// // let firstName1 = prompt("Enter the first name:");
// // let lastName2 = prompt("Enter the last name:");
// // console.log(firstName1,lastName2);



// let cross = [["X",null,"O"],
//              [null,"X",null],
//              [null,"O","X"]];

// console.log(cross);
// cross[0][1]="O";


// // let n2 = prompt("Enter the number to be printed:");
// // n2 = parseInt(n2); //to take the integer value of any number which is in the string 
// // // format
// // for(let i = n2;i<=n2*10;i=i+n2){
// //     console.log(i);
// // }

// // guessing the favroit movie
// // const favMovie = "avtar";
// // let guess = prompt("Guess the favroit movie");

// // while((guess!= favMovie) && (guess != "quit")){
// //     guess = prompt("Wrong guess! Please try againg.");
// // }

// // if(guess == favMovie){
// //     console.log("Congrats!!");
// // } else{
// //     console.log("you quit");
// // }

// // let fruits = ["mango", "apple", "banana", "litichi", "orange"];
// // fruits[5]= "pineapple";
// // for(let i = 0;i<fruits.length;i++){
// //     console.log(i,fruits[i]);
// // }


// // let heroes = [ ["ironman", "spiderman", "thor"],
//             //    ["'superman", "wonder woman", "flash"]];

// // for(let i =0;i<heroes.length;i++){
// //     console.log(i, heroes[i],heroes[i].length);
// //     for(let j =0 ;j<heroes[i];j++){
// //         console.log(`j = ${j}, ${heroes[i][j]}`);
// //     }
// // }

// // let students = [["aman", 95], ["sradha",94.5],["abhishek",98]];
// // for(let i = 0;i<students.length;i++){
// //     console.log(i, students[i], students[i].length);
// //     for(let j = 0;j<students[i].length;j++){
// //         console.log(`j = ${j}, ${students[i][j]}`);
// //     }
// // }

// // for(student of students){
// //     for(substudent of student){
// //         console.log(substudent);
// //     }
// // }


// TO-DO App
/* list - to show all list 
   add - to add a todo
   delete - to delete a task 
   quit - to exit a todo
 */


//    let todo=[];
//    let req = prompt("please enter your request");

//    while(true){
//     if(req == "quit"){
//         console.log("quiting app!");
//         break;
//     }

//     if(req == "list"){
//         console.log("---------------------");
//         for(let i = 0;i<todo.length;i++){
//             console.log(i, todo[i]);
//         }
//         console.log("---------------------");
//     } else if(req == "add"){
//         let task = prompt("please enter the task you want to add");
        // todo.push(task);
//         console.log("task added");
//     } else if (req = "delete"){
//         let idx = prompt("please enter the task index");
//         todo.splice(idx,1);
//         console.log("Task deleted");
//     } else{ 
//         console.log("wrong request")
//     }

//     req = prompt("please enter your request");
//    }


// let arr=[1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr)


// to find the largest number in the given array itself

// let arr = [2,5,10, 4, 2, 7, 1, 9];
// let largest = 0;

// for(let i = 0;i< arr.length;i++){
//     if(largest< arr[i]){
//         largest = arr[i];
//     }
// }

// console.log(largest);




// now we are going to start OBJECT Literals
// const student = {
//     name : "abhishek",
//     age: 19,
//     cgpa: 7.79
// };

// const posts= {
//     username : "@abhi77rajput",
//     content : "This is my #firstPost",
//     likes : 120,
//     reposts: 2,
//     tags: ["@codeForce", "@leetCode", "@hackerRank"]
// };

// conversion in get values

// let obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };


// nested objects 
// const classInfo ={
//     aman: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     sradha: {
//         grade: "A",
//         city: "Lucknow"
//     },
//     rajat: {
//         grade: "A+",
//         city: "Patna"
//     }
// };

// Guessing Game
// const max = prompt("Enter the maximum number:");

// const random = Math.floor(Math.random()*max)+1;

// let guess = prompt("Guess the number:");

// while(true){
//     if(guess == "quit"){
//         console.log("user quit");
//         break;
//     }

//     if(guess == random){
//         console.log("Congrats!! you are right! random number was ", random);
//         break;
//     } else if(guess<random){
//         guess = prompt("your guess was too small. please try again");
//     } else{
//         guess = prompt("your guess was too large. please try againg")
//     }
// }

// const car = {
//     name: "G-Wagon",
//     model: "top variant",
//     color: "white"
// };
// console.log(car.name);

// functions in java script
// function hello(){
//     console.log("Hello world!!");
// }

// hello();  // this is the function calling 
// hello();  // this is the function calling 
// hello();  // this is the function calling 

// function fun1to5(){
//     for(let i =1;i<=5;i++){
//         console.log(i+" ");
//     }
// }

// fun1to5();

let i = prompt("Enter the value");
function eligible(){
    if(i>=18 && i<=28){
        console.log("You are eligible for the upcoming CDS examination.");
    } else{
        console.log ("You are not eligible for the upcoming examination.");
    }
}

eligible();