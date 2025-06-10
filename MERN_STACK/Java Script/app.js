// console.dir(document.querySelectorAll("h1"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelectorAll("div a"))

// let links = document.querySelectorAll('.box a');


// this is with the help of for loop
// for(let i = 0 ;i<links.length;i++){
//   links[i].style.color = "yellow";
// }


// this is with the help of for-of loop
// for(link of links){
//   link.style.color = "yellow";
// };


// DOM Events 
// let btns = document.querySelectorAll("button");
// console.dir(btns);

// btn.onclick = function(){
//   alert("Button was clicked.");
// };

// for(btn of btns){
  // btn.onclick = sayHello;
  // btn.onclick = sayName;

  // btn.onmouseenter = function(){
  //   console.log("You entered a button.")
  // }

  // event listners
  // btn.addEventListener("click", sayHello);
  // btn.addEventListener("click", sayName);
//   btn.addEventListener("dblclick", function(){
//     console.log("You double clicked me!");
//   });
// }

// function sayHello(){
//   alert("Hello");
// };

// function sayName(){
//   alert("Abhishek Kumar! Welcome to JS World!!");
// };

// function likeMe(){
//   alert("Like My Post!");
// };

// function comment(){
//   alert("Comment on my posts.");
// };

// btns.onclick = sayHello;
// btns.onclick = likeMe;
// btns.onclick = comment;



// activity : generate the random color

// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//   let h3 = document.querySelector("h3");
//   let randomColor = getRandomColor();
//   h3.innerText = randomColor;

//   let div= document.querySelector("div");
//   div.style.backgroundColor = randomColor;

//   console.log("Color updated");
// });

// function getRandomColor(){
//   let red = Math.floor(Math.random()* 255);
//   let green = Math.floor(Math.random()* 255);
//   let blue = Math.floor(Math.random()* 255);

//   let color = `rgb(${red}, ${green}, ${blue})`;
//   return color;

// }


// let p = document.querySelector('p');
// p.addEventListener("click", function(){
//   console.log("Paragrap was clicked.")
// })


// let div = document.querySelector('.div');
// div.addEventListener("mouseenter", function(){
//   console.log("Mouse is under the div.")
// })



//  (this) in event listners

// let btn = document.querySelector('button');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let p = document.querySelector('p');
// function changeColor(){
//   this.style.backgroundColor = "yellow";
// }

// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);




// KeyBoard Events

// let input = document.querySelector('input');

// input.addEventListener("keydown", function(event){
//   console.log("Code: ",event.code);
//   if(event.code== "ArrowUp"){
//     console.log("Character moves forward!");
//   } else if(event.code== "ArrowDown"){
//     console.log("Character moves backward!");
//   } else if(event.code== "ArrowLeft"){
//     console.log("Character moves left!");
//   } else if (event.code== "ArrowRight"){
//     console.log("Character moves right!");
//   }
// })

// input.addEventListener("keyup", function(){
//   console.log("Key was pressed!")
// })




// Form Events
// Extracting Form Data


// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//   event.preventDefault(); // this will help to be on the current page only.
//   // alert("form submitted!");
//   let user = this.elements[0]; // form.elements[0]
//   let pass = this.elements[1]; // form.elements[1]
//   // let user = document.querySelector('#user');
//   // let pass = document.querySelector('#pass');
//   console.dir(form);
//   // console.dir(user);
//   // console.dir(pass);
//   // console.log(inp.innerText)  //this will not show the text inside this
//   console.log(user.value);
//   console.log(pass.value);

//   alert(`Hi ${user.value}, your password is set to ${pass.value}.`);

// });


//More Events

// let user = document.querySelector('#user');

// user.addEventListener("change", function(event){
//   event.preventDefault();
//   console.log("Change event");
//   console.log("Final value: ", user.value);
// });


// user.addEventListener("change", function(event){
//   event.preventDefault();
//   console.log("Input event");
//   console.log("Final value: ", user.value);
// });


// let inp = document.querySelector('#text');
// let p = document.querySelector('p');

// inp.addEventListener('input', function(){
//   console.log(inp.value);
//   p.innerText = inp.value;
// })


// Event Bubbling

let div = document.querySelector('div');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

div.addEventListener("click", function(){
  console.log("div was clicked.");
});

ul.addEventListener("click", function(event){
  event.stopPropagation();
  console.log("ul was clicked.");
});

for(lis of li){
lis.addEventListener("click", function(event){
  event.stopPropagation();
  console.log("li was clicked.");
})
}