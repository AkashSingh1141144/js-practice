function Car(carName, brand) {
	this.carName = carName;
	this.brand = brand;
}

function createCar(carName, brand, manufacturing_year, price) {
	
	Car.call(this, carName, brand)
	
	this.manufacturing_year = manufacturing_year
	this.price = price;
} 

const newCar = new createCar('Ford', 'Fiesta', 1990, 200000);
console.log(newCar);
// console.log(createCar);