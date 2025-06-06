// console.dir(document.querySelectorAll("h1"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelectorAll("div a"))

let links = document.querySelectorAll('.box a');


// this is with the help of for loop
// for(let i = 0 ;i<links.length;i++){
//   links[i].style.color = "yellow";
// }


// this is with the help of for-of loop
for(link of links){
  link.style.color = "yellow";
}