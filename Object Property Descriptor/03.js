// chenge Descriptor property in writable made

const user = {
  name: "Sandhya",
  age: 20,
  city: "Mirzapur",
  gender: "Female",
};

const userName = Object.getOwnPropertyDescriptor(user, "gender");
// console.log(userName);

// lets create user gender property in non writable mode

Object.defineProperty(user, "gender", {
  value: "Female",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "gender"));
