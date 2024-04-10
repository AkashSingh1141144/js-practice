function Car(name, price, color) {
  this.name = name;
  this.price = price;
  this.color = color;
}

Car.prototype.speed = "540km/h";

const car1 = new Car("Ford", 20000, "red");
const car2 = new Car("BMW", 30000, "blue");

// console.log(car1.speed);
// console.log(car2);

// this code is very messy means repeated code == == == ======

/*
let student = {
  name: "John",
  lastName: "Doe",
  birth: 2003,
  getFullName: function () {
    return this.name + " " + this.lastName;
  },
  getAge: function () {
      let age = new Date().getFullYear() - this.birth;
	  return age
  }
};

let teacher = {
  name: "lila",
  lastName: "devi",
  birth: 1990,
  getFullName: function () {
    return this.name + " " + this.lastName;
  },
  getAge: function () {
      let age = new Date().getFullYear() - this.birth;
	  return age
  }
};

console.log(student.getAge());
console.log(teacher.getAge());
*/

// Now solutions is - >

User = {
  getFullName: function () {
    return this.name + " " + this.lastName;
  },
  getAge: function () {
    let age = new Date().getFullYear() - this.birth;
    return age;
  },
};

let student = {
  name: "John",
  lastName: "Doe",
  birth: 2003,
};
let teacher = {
  name: "lila",
  lastName: "devi",
  birth: 1990,
};

Object.setPrototypeOf(student, User);
Object.setPrototypeOf(teacher, User);

console.log(student.getAge());
console.log(teacher.getAge());
