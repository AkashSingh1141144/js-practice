class Car {
  constructor(name, brand, year) {
    this.name = name;
    this.brand = brand;
    this.year = year;
  }
  newCar() {
    return `I have a ${this.name} and his brand is ${this.brand}`;
  }
}

class Model extends Car {
  constructor(name, brand, year, mod) {
    super(name, brand, year);
    this.mod = mod;
  }
  show() {
    return ` ${this.newCar()} and ${this.mod} ${this.year}`;
  }
}

let myCar = new Model("BMW", "X5", "1990");
console.log(myCar.show());
