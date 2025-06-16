h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        let num = Math.floor(Math.random()*5)+1;
        if(num< 3){
            reject("promise was rejected"); // here the promise will get rejected
        }
        h1.style.color = color;
        resolve("color changed!")
    }, delay);
    })
}

async function demo(){
    try{
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
        await changeColor("yellow", 1000);
    } catch(err){
        console.log("error caught.");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number = ", a+3);
}

// changeColor("red", 1000)
// .then(()=>{
//     console.log("red color was completed.")
//     return changeColor("orange", 1000)
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("green", 1000)
// })
// .then(()=>{
//     console.log("green color was changed")
//     return changeColor("blue", 1000)
// })
// .then(()=>{
//     console.log("Blue color was changed")
// })

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


// function savedB(data){
//     return new Promise((resolve, reject)=> {
//         let internetSpeed = Math.floor(Math.random() *10)+1;
//         if(internetSpeed > 4){
//             resolve("success : data was saved.");
//         } else{
//             reject("failure : weak connection.");
//         }
//     })
// };


// //req = promise object

// savedB("apna college")
//     .then((result)=> { // .then will happened when promise will resolved
//         console.log("data1 saved"); 
//         // console.log(request);
//         console.log("result of promise "+result);
//         return savedB("hello World");
//         })
//         // here you will see the promice chaining
//         .then((result)=>{
//             console.log("data2 saved.");
//             return savedB("abhishek");
//             console.log("result of promise "+result);
//         })
//         .then((result)=>{
//             console.log("data3 saved.");
//             console.log("result of promise "+result);
//         })
//     .catch((error)=> { // .catch will happened when promice failure will be catched and resolved.
//         console.log("promise was rejected.");
//         // console.log(request);
//         console.log("result of promise "+error);
//     })





// All about async function: 
// async function are by default return the promices 
// async keyword is used while initilizing the async function
// which creates the async function


// async function greet(){
//     // throw "some random error"
//     return "hello world"; //returns a promise
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was: ", result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with err: ", err);
// })

// let hello = async () => {return 5}; //return a promise with arrow function also






// All about await keyword: 
// it pause's the extecution of it's surrounding async function
// untiled the promise is settled(resolve or rejected)


// function getNum(){
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000)
//     })
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
// }


// accessing data from JSON 
// JSON.parse(data) method: this is used to parse the string data into a js object
let jsonRes = '{"fact":"Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever possible.","length":110}';
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

// JSON.stringify(json) method: this is used to parse a js object into data into JSON
let student = {
    name: "abhishek",
    uid: "23bcs10949",
    branch: "CSE"
};


// TO test the API request we use [tools]:
// 1. Hoppscoth-> this is free to use available on brouser
// 2. Postman-> for this we need to download it and get signUP to it

// Ajax: Asynchronous javascript and XML.
// this is the process through which we call api and in our response data is recived.
// NOTE: instead of XML we use JSON only we name it as ajax.


// HTTPs Verbs(i.e any work):
// ex: GET, POST, DELETE


// Status Code: Examples
// 200 - OK
// 404 - Not Found
// 400 - Bad Request
// 500 - Internal Server Error etc.