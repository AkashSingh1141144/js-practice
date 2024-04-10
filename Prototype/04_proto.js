function Person(firstName, lastName, age, eyeColor, hobbies) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.hobbies = hobbies;
}

function fullName() {
  return this.firstName + " " + this.lastName;
}

Person.prototype.fullName = fullName;

const person1 = new Person("John", "Doe", 30, "blue", ["reading", "swimming"]);
const person2 = new Person("Jane", "Smith", 25, "brown", [
  "painting",
  "dancing",
]);

console.log(person1);
console.log(person1.fullName());
