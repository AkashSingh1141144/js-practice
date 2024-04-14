/* 
This is a Old method to define Getter and Setter method 
*/

function User (name, age, city) {
	this._name = name;
	this._age = age;
	this._city = city;

	Object.defineProperty(this, 'name', {
		get: function () {
		    return this._name.toUpperCase();
		},
		set: function (value) {
			this._name = value;
		}
	})
	Object.defineProperty(this,'age', {
		get: function() {
			return `Age is ${this._age} years old`
		},
		set: function(value) {
			this._age = value;
		}
	})
	Object.defineProperty(this, 'city', {
		get: function() {
			return this._city.toUpperCase();
		},
		set: function(value) {
			this._city = value;
		}
	})
}

const person = new User('Sandhya Singh', 20, 'Mirzpur');
console.log(person.name); 
console.log(person.age);
console.log(person.city);