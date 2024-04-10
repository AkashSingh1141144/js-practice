// let myName = 'Akash singh       '

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman", "hulk", "ironman", "blackWidow"];

let heroPower = {
  thor: "God of Thunder",
  spiderman: "Web-slinger",
  hulk: "Smash",
  ironman: "Genius level intellect",
  blackWindow: "Suit is made of Vibranium",
  getBlackWidow: function () {
    console.log(`Black widow power is ${this.blackWindow}`);
  },
};

Object.prototype.Akash = function () {
  console.log("This is Akash");
};

Array.prototype.heyAkash = function () {
  console.log("Akash says hello");
};

// heroPower.Akash()
// myHeros.Akash()
// myHeros.heyAkash()
// heroPower.heyAkash()

// inheritance ======================

const User = {
  name: "Akash",
  emai: "akash@gmail.com",
};

const Teacher = {
  makeVideos: true,
};
const TeachinghSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "js assinment",
  futllTime: true,
  __proto__: TeachinghSupport,
};

Teacher.__proto__ = User;

// Modern syntax

Object.setPrototypeOf(TeachinghSupport, Teacher);

let anotherUserName = "Akash singh";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};

anotherUserName.trueLength();
"Akash".trueLength();
