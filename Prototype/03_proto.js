const CarSpeed = {
  speed: "430km/h",
  color: "red",
  wheals: "4",
};

const supra = {
  name: "Supra",
  price: 35000000,
  model: 1994,
};

const BMW = {
  name: "BMW",
  price: 45000000,
  model: 2024,
};

Object.setPrototypeOf(supra, CarSpeed);
Object.setPrototypeOf(BMW, CarSpeed);

console.log(supra);
console.log(BMW);

console.log(supra.speed);
