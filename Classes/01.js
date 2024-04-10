// ES6


class Users {
	constructor(username, email, password) {
		this.username = username
		this.email = email
		this.password = password
	}
	encryptPassword() {
	    return `${this.password}abc`
	}
	chengeUsername() {
	    return `${this.username.toUpperCase()}`
	}
}

const chai = new Users('chai', 'chai@gmail.com', '123456')

console.log(chai.encryptPassword());
console.log(chai.chengeUsername());




//  behind the scene


function User(username, email, password) {
    this.username = username
	this.email = email
	this.password = password

}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.chengeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new User('tea', 'tea@gmail.com', '123456')

console.log(tea.encryptPassword());
console.log(tea.chengeUsername());