let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){

    let item = document.createElement("li");  // this is used to 
    item.innerText = inp.value; // add the new element to
    ul.appendChild(item);  // the code and add it to the list

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);

    console.log(inp.value);
    // to automatically remove the input value after being added we use
    inp.value = "";
});


// let delBtns = document.querySelectorAll(".delete");
// for(delButtons of delBtns){
//     delButtons.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         // console.log("element deleted!!");
// });
// }


ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("delete");
    }

    // console.log(event.target);
    // console.log("button click!")
})