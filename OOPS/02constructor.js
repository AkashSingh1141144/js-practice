function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayHello = () => {
		console.log(`Hello ${this.name} .`);
	}
}

const person1 = new Person('Akash kumar singh', 22)
const person2 = new Person('Sandhya singh', 21)

console.log(person1);
console.log(person2);
person2.sayHello()

// console.log(person1.name);
// console.log(person2.name);
// console.log(person1.age);
// console.log(person2.age);



