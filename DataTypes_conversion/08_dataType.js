//  Primitive 

//  7 type : String, Number, Boolean, Null, undefined, Symbol, BigInt, 


//++ JavaScript is Dynamiclly Typed language it means A language is called Dynamically typed if the 'type' of a variable is checked only during the runtime unlike at compile time in a statically typed language. With this support, the developers need not specify the data type of any variable while writing code.
const outSideTemp = null; // typeOf == object
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId)  // false;

const bigNumber =
12345678901234567890123456n;
console.log(typeof(bigNumber));






// Reference (Non-primitive)


//  Array, Objects, Functions

const heros = ["thor", "spiderman", "ironman"];

let myObj ={
	name: "Akash",
	age: 20,
	isMarried: false
}

const myFun = function() {
     console.log("Hello, world");
}