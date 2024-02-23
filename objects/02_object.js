/* 
A javascript object is a way to store multiple pieces of related information together. Think of it like a container that can hold various properties, each with its own value. These propeties can be anything: strings, numbers, other objects, functions, etc. object in js are flexible and powerful, making them a core part of the language for organization and manpulating data.
*/



/* +++++ Declaring object ++++++ */

//  1. Object literal notation: 
// This is simplest and most comman way to create objects in JavaScript. We define key-value pairs inside curly bracets '{}'.

let person = {
	name: "Anuj",
	lastName: "Viswakarma",
	fullName: "",
	age: 21,
	location: "Mirzapur",
	realation: "Best Friend"
}
console.log("The name of person is: ",person.name);
console.log("The last name of person is: ", person["lastName"]);

person.fullName = "Anuj Viswakarma";
console.log("The full name of the person is:", person["fullName"]);
console.log("age:", person.age);



/* +++++ Constructor Function +++++*/
// A constructor function in javascript is a special type of function used to create and initialize objects. it serves as a blueprint for creating multiple objects with similar properties and methods. When we can constructor function using the "new" keyword. it creates a new object and sets the "this" keyword to refer to that newly created object within the functioin. 



/* Using object literals is fine when you only need to create one object, but if you have to create more than one, as in the previous section, they're seriously inadequate. we have to write out the same code for every object we create - like adding a height property - then we have to remember to update every object.

we would like a way to define the "shape" of an object -the set of methods and the properties it can have - and then create as many objects as we like, just upatating the values for the properties that are different.
*/

function Person(name, lastName, age) {
	this.name = name;
	this.lastName = lastName;
	this.age = age;
}

let person1 = new Person("Anuj", "Viswakarma", 21);
let person2 = new Person("Akash", "Singh", 21);

console.log("First person: ", person1);
console.log("Secone person: ", person2);



/* +++++ Object.create() method +++++ */



let personProto = {
	greet: function() {
		console.log(`Hello, my name is ${this.name}`);
	}
}

let personE = Object.create(personProto);
personE.name = "Anuj";
personE.greet();


let personF = {
	greet: function() {
		console.log(`My best freind name is: ${this.name}`);
	}
}

let bestFriend = Object.create(personF);
bestFriend.name = "Anuj Viswakarma";
bestFriend.greet()