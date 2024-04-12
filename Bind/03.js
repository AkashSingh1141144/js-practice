const Car = {
	name: "Ford",
	year: 2018,
	getinfo: function() {
		console.log(`Car name is ${this.name} and model ${this.year}`);
	}
}

const newCar = {
	name: "Supera",
	year: 2020
}

const Information = Car.getinfo.bind(newCar);
Information()

