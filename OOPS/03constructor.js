//  car constructor ===>

function Car(make, model, year, color) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.displayInfo = () => {
		console.log(`Making companey name is ${this.make} and the model of the car is ${this.model} color is ${this.color}`);
	}
}

const car1 = new Car('Toyota', 'Corolla', 2020 );
const car2 = new Car('Honda', 'Civic', 2019, 'Blue');

console.log(car1
);
console.log(car2);
car1.displayInfo();