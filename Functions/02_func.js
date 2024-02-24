function myFunction(name, age, gender) {
	console.log(`My name is ${name}, and my age ${age} my gender is ${gender}`)
}

myFunction("Akash", 22, "Male")

function myFunction1(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

const user1 = new myFunction1("Akash", 22, "Male")
console.log(user1.name);



function addTwoNumbers(num1, num2) {
	return num1 + num2;
}

const result = addTwoNumbers(2, 5)
console.log(result);


function loggingInfo(username, password) {
	if (username === undefined || password === undefined) {
		console.log("Enter valied information");
		return
	}
	return `username ${username} and password ${password}`
}

const message = loggingInfo("Akash kumar singh", "123")
console.log(message);
console.log(loggingInfo(username = "Akash", password="123445"));