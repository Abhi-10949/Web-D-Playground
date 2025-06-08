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
let btns = document.querySelectorAll("button");
// console.dir(btns);

// btn.onclick = function(){
//   alert("Button was clicked.");
// };

for(btn of btns){
  btn.onclick = sayHello;
  btn.onmouseenter = function(){
    console.log("You entered a button.")
  }
}

function sayHello(){
  alert("Hello");
};

// function likeMe(){
//   alert("Like My Post!");
// };

// function comment(){
//   alert("Comment on my posts.");
// };

// btns.onclick = sayHello;
// btns.onclick = likeMe;
// btns.onclick = comment;