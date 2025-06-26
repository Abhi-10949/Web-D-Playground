// let n = 5;
// for(let i = 0;i<n;i++){
//     console.log("Hello",i);
// }

// console.log("Bye!");

// let n1=[1,2,3,4,5];
// for(i of n1){
//     console.log("index's", i);
// }

// console.log(process.argv);

let args = process.argv;
for(let i = 2;i<args.length;i++){
    console.log("Hello to ", args[i]);
}