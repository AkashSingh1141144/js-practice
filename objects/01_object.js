// singleton



// object literals

const mySymbol = Symbol("key1")

const jsUser = {
	name: "Akash kumar",
	"Full Name" : "Akash kumar singh", // now here no one any method to access this object method with (.) property now this case we will use [""] property
	age:  20,
	// mySymbol: "myKey1", // output a string
	[mySymbol]: "myKey1", // output a symble
    location: "Mirzapur",
	email: "akash@gmail.com",
	isLoggedIn: false,
	lastLoginDays: ["monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]); // second method of access the value of a object and it very good method to access a object.

// console.log(jsUser.Full Name);
console.log(jsUser["Full Name"]);
// console.log(jsUser.mySymbol);
// console.log(typeof jsUser.mySymbol); // string but we want a symble 

console.log(jsUser[mySymbol]);


//  How to chenge the value 

jsUser.email = "akashakashsingh@gmail.com"
// console.log(jsUser);

// Object.freeze(jsUser) // it will freeze the object that so wan we will nat change the object values
jsUser.name = "Akash singh"
console.log(jsUser);


/* ++++++++ Adding a function in object ++++=*/

jsUser.greeting = function () {
	console.log("Hello js user");
}

jsUser.greetingTwo = function() {
	console.log(`Hellow Js user, ${this.name}`); // this key word is refer to the value of name and give output is name of the value
}


console.log(jsUser.greeting); // undefiened 
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo());