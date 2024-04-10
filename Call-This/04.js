function SetUserName(username) {
	this.username = username;
}

function createUser(username, age, email, password) {

	SetUserName.call(this, username);
	this.age = age;
	this.email = email;
	this.password = password;
}

const person = new createUser("John", 25, "john@example.com", "password123");
const Akash = new createUser('Akash singh', 21, 'akashsingh@gmail.com', '1424')
const sandhya = new createUser('Sandhya singh', 20, 'sandhya@gmail.com', '9874')

// console.log(person);
console.log(Akash);
console.log(sandhya);