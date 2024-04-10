function SetUserName(username) {
	this.username = username;
}

function createUser(username, age, city) {
	SetUserName.call(this, username)

	this.age = age;
	this.city = city;
}

const newUser = new createUser('Sandhya singh', 20, 'Mirzapur')
// console.log(newUser);




const person = {
	name: 'Sandhya',
	age: 20,
	city: 'Mirzapur',
	getDetails: function() {
		return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`
	}
}

const person2 = {
	name: 'Akash singh',
	age: 21,
    city: 'Mirzapur',
	
}

const deta =person.getDetails.call(person2);

console.log(deta);
console.log(person.getDetails());