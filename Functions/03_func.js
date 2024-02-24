//  shoping card function example 
// adding multiple arguments

/*
function countCartPrice(num1) {
	return num1
}

console.log(countCartPrice(100, 200, 300, 400)); // this not exept multiple argumenst 

*/

// That's why we will this function syntax

function countCartPrice(...num1) {
	return num1;
} // ...num1 (...) is a rest method to help function parameter to pass multipel arguments

const price = countCartPrice(200, 300, 400, 500)
console.log(price);


// Passing a Object in function

const person = {
	name: "Akash Singh",
	age: 20, 
	city: "Mirzaput",
	bestFriend: "Anuj Viswakarma"
}

function myFriend(anyObject) {
	return anyObject;
}

const myBestFriend = myFriend(person)
console.log(myBestFriend);


//  Let object (car)

const car = {
	name: "Dodge", 
	price: 100000000,
	color: "Black",
	model: 2020
}

function myCar(anyObject) {
	return anyObject;
}

const DreamCar = myCar(car)
console.log(DreamCar);
console.log(DreamCar.name);
console.log(DreamCar.color);


// Passing an Array in function

const fruite = ["Apple", "Banana", "Mango", "Orange"]

function newArray(anyArray) {
//  return anyArray[2];
	return anyArray;
}
const myFruite = newArray(fruite)
console.log(myFruite);
console.log(myFruite[2]);