const obj = {
  name: "Akash singh",
  age: 21,
  status: "student",
  loveLife: "Radua",
};

const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);
