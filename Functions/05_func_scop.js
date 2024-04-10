// Scope

// let a = 10;
// const b = 20;
// var c = 30;



{} // this a scop there is not a object. when {} come white function or if else than colled scope of function and if else scope
// for example 
// var c = 300
let a = 300
if(true) {
let a = 10;
const b = 20;
// var c = 30;
console.log("inner ", a);
}
console.log(a); 
// console.log(b);
// console.log(c); // this is problem becouse output of c is 30 but that value not come out of if statement 


