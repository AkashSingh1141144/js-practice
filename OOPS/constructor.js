// constructor function
/* Constructor functions are used to create objects. They define properties and methods of that object. 
<=======why use contructor function =======>?
1. To create an object with pre-defined properties and methods.
2. To create an object with similar properties and methods.
3. To create an object with a custom constructor function.
4. To create an object with a private constructor function.
5. To create an object with a static constructor function.
6. To create an object with a constructor function that can be extended.
7. To create an object with a constructor function that can be inherited.
8. To create an object with a constructor function that can be cloned.
9. To create an object with a constructor function that can be serialized.
10. To create an object with a constructor function that can be deserialized.
*/

function User(username, loginCount, isLoggedIn) {
	this.username = username
	this.loginCount = loginCount
	this.isLoggedIn = isLoggedIn

	this.greeting = function() {
		console.log(`Welcome ${this.username}`);
	}
}

const userOne = new User('Akash', 12, true)
const userTwo = new User('Chai or code', 11, false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);





function Car(name, model, price, speed) {
	this.name = name
	this.model = model
	this.price = price
	this.speed = speed

	this.display = function() {
		console.log(`Car name : ${this.name}`);
		console.log(`Car model : ${this.model}`);
		console.log(`Car price : ${this.price}`);
		console.log(`Car speed : ${this.speed}`);
	}
}

const car = new Car('Audi', 'A8', 1000000, 200)
console.log(car);
car.display()