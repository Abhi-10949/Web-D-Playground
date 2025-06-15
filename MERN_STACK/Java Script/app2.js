// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color = color;
//     }, delay);
// }


// changeColor("red", 1000);
// changeColor("violet", 2000);
// changeColor("orange", 3000);
// changeColor("green", 4000);
// changeColor("yellow", 5000);
// changeColor("purple", 6000);
// changeColor("pink", 7000);
// changeColor("yellowgreen", 8000);


// all about callBack Hell & Promises(the promise object represent the 
// eventual completion (or faliure) of an asynchronous operation and it's 
// resulting value.
// the promise has the two elements :
// 1.resolve[success]
// 2.reject[failure] )



// function savedB(data, success, faliure){
//     let internetSpeed = Math.floor(Math.random() *10)+1;
//     if(internetSpeed > 4){
//         success();
//     } else{
//         faliure();
//     }
// }

// savedB("apna college", ()=>{
//     console.log("success : your data was saved");
// }, ()=>{
//     console.log("faliure : week connection data was not saved.");
// });


function savedB(data){
    return new Promise((resolve, reject)=> {
        let internetSpeed = Math.floor(Math.random() *10)+1;
        if(internetSpeed > 4){
            resolve("success : data was saved.");
        } else{
            reject("failure : weak connection.");
        }
    })
};


let request = savedB("apna college"); //req = promise object

request.then(()=> { // .then will happened when promise will resolved
    console.log("promise was resolved."); 
    console.log(request);
})
.catch(()=> { // .catch will happened when promice failure will be catched and resolved.
    console.log("promise was rejected.");
    console.log(request);
})