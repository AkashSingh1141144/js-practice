const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Sandhya",
  lastName: "Singh",
};

const newPerson = person.fullName.apply(person1);
const newPerson1 = person.fullName.call(person1);
console.log(person.fullName.bind(person1)());

console.log(newPerson);
console.log(newPerson1);

/*
The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.
*/
