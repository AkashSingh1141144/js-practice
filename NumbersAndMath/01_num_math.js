const score= 400
console.log( score); // here js define automatacly it was a number type 


const balance = new Number(100) //  here we are explicit (self) define the type of balance is number 
console.log(balance);


console.log(balance.toString().length) // now balance will converted in string 

const balance1 = new Number(100)
console.log(balance1.toFixed(2)) // we can also use this method in eccomerce website for show user 


const balance2 = new Number(100.56789)
console.log(balance2.toPrecision(4)) 

const balance3 = 1000000
console.log(balance3.toLocaleString('en-IN')) // this method will show the balance in local currency;




// +++++++++++++ Maths +++++++++ //

console.log(Math);
console.log(Math.abs(-45)) // this method will show the absolute value of a number

console.log(Math.round(45.856789)) // this method will show the round value of a number;
console.log(Math.ceil(45.1)) // this method will show the ceil value of a number; ceiling means ydi jara sa bhi value jada hua to ye jaise 45.2 bhi hai to iskko yh 46 hi show krega

console.log(Math.floor(45.956789)) // this method will show the floor value of a number; floor means ydi jara sa bhi value kam hua to ye jaise 45.95 bhi hai to iskko yh 45 hi show krega

console.log(Math.min(45, 95, 23, 67, 100)) // this method will show the minimum value of a number;

console.log(Math.max(45, 95, 23, 67, 100)) // this method will show the maximum value of a number;


console.log(Math.random()) // this method will show the random value of a number;	
console.log(Math.floor(Math.random() * 10) +1);


const min = 10;
const max = 50;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);