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
if(color=="red"){
    console.log("Stop");
}
else if(color=="yellow"){
    console.log("Wait for a while..");
}
else{
    console.log("GO");
}