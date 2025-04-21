console.log("Hello World!");
console.log("Abhishek Kumar");

let a = 10;
let b = 5;
console.log("Sum is : ", a+b);

let pencil = 10;
let eraser = 5;
// let output = "The total price : "+ (pencil + eraser)+ " Rupees";

// This is template literals
let output = `The total price : ${pencil+eraser} Rupees.`;  //this is called back ticks
console.log(output);

// arithmetic operator 
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a**b);
console.log(a%b);

// == this operator only compares the values not the type of the value
// === this operator compares the values and also the type of the value
let n = 5; 
let str = '5';
console.log(n == str); // == is used and it will give true
console.log(n === str); // === is used and it will give false

// if condition 
let firstName = "Abhishek";
if (firstName == "Abhishek"){
    console.log(`Welocome ${firstName}`);
}


// traffic light 
let color = "red";
if(color==="red"){
    console.log("Stop");
}
else if(color==="yellow"){
    console.log("Wait for a while..");
}
else{
    console.log("GO");
}

// Popcorn pries 
let size = "XL";
if(size==="XL"){
    console.log("Price is 250 rupees.");
} else if(size === "L"){
    console.log("Price is 200 rupees.");
} else if (size === "M"){
    console.log("Price is 100 rupees.");
} else {
    console.log("Price is 50 rupees.")
}

// to check wheter the string is good or not by checking it's 1st character as 'a' and
// also have the minimum of 3 character.

let str1 = "spp";
let s = str1.length;
if((str1[0] === "a") && (s>3)){
    console.log("The given string is the GOOD String.");
} else {
    console.log("String is not GOOD.")
}

// Switch Case
let colour = "red";
switch(colour){
    case "red":
        console.log("Stop!!");
        break;
    
    case "yellow":
        console.log("Yellow.");
        break;

    case "green":
        console.log("Green.");
        break;
        
    default:
        console.log("Broken light.");
}

// alert 
// alert("this is a simple alert!");

// console.error("This is an error message!");
// console.warn("This is an warning message!")

// prompts
// let fN=prompt("Enter your name:");
// console.log(fN);


// to check whether the two number having the same last digit 
// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number:");

// let n1 = num1.length;
// let n2 = num2.length;

// if(num1[n1-1]==num2[n2-1]){
//     console.log("Both the number have the same last digits.");
// } else{
//     console.log("The last digits are different to both the numbers.")
// }



// tirm method

let msg = "     Hello     ";
// console.log(msg.trim())

// method chaining
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

let msg1 = "ILoveCoding";


let student = ["radhae", "shyam", "balram"];

