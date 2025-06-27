// this is the 3rd method
// module.exports.sum = (a,b)=> a+b;

// const sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a*b; // in this method we can also use only (exports)
// module.exports.g = 9.8;
// module.exports.PI = 3.14;

// module.exports = 123;

// let obj = { //this is one of the method
//     sum: sum,
//     mul: mul,
//     g : g,
//     PI: PI
// };

// this is the 2nd method
// module.exports = {
//     sum: sum,
//     mul: mul,
//     g : g,
//     PI: PI
// };

// module.exports = obj;


// we are dealing with import module: for this we need to first (export)
// export is the keyword
// this all value will export individually instead of objects

export const sum = (a, b) => a+b;
export const mul = (a, b) => a*b;
export const g = 9.18;
export const PI = 3.14;