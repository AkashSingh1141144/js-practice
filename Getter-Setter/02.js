class Car {
	constructor (brand, model, year) {
		this._brand = brand;
		this._model = model;
		this._year = year;
	}
	get brand() {
		return this._brand.toUpperCase();
	}
	set brand(value) {
		this._brand = value;
	}
	get model() {
		return this._model;
	}
	set model(value) {
	    this._model = value;
	}
	get year() {
		return this._year;
	}
	set year(value) {
		this._year = value;
	}
}

const car = new Car('ford', 'focus', 2010);
console.log(car.brand);
console.log(car.model);
console.log(car.year);