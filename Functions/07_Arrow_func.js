const user = {
	username: "Akash",
	price: 999,
	welcomeMessage: function() {
		console.log(`${this.username}, Welcome to website`);
		console.log(this);
	}

}

// user.welcomeMessage()
// user.username = "Anuj"
// user.welcomeMessage()


// console.log(this);





// function chai() {
// 	let username = "akash"
// 	console.log(this.username);
// }
// chai()



const chai = () => {
	let username = "Akash"
	console.log(this.username);
}

// chai()


// const addTwo = (num1, num2) => {
// 	return num1 + num2
// }

// console.log(addTwo(5, 6));



// implicide return

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => {username: "Akash"} // we can not declare object like this
const addTwo = (num1, num2) => ({username: "Akash singh", age: 20}) // to return object in implicid arrow function we use paranthises({}) like this

console.log(addTwo(5, 7));



