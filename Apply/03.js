/*
The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The  apply() method takes arguments as an array.
*/

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "Sandhya",
  lastName: "Singh",
};

console.log(person.fullName.apply(person1, [" UP", " India"]));
console.log(person.fullName.call(person1, "UTTAR-PRADESH", "INDIA"));
console.log(person.fullName.bind(person1, "UP", "INDIA")());
