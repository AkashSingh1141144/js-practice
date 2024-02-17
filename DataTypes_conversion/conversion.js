// let score = "33"
// let score ='33abc'
// let score = null
// let score = undefined
// let score = true
let score = 'Akash singh'

// const {score} = req.body

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// '33' => 33
// '33abc' => Nan
// true = 1; false => 0


// let isLoggdIn = 1
// let isLoggdIn = ""
let isLoggdIn = 'Akash'
 
let booleanIsLoggedIn = Boolean(isLoggdIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "akash" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ******************** Operations *****************

let value = 3
let negValue = -value
// console.log(negValue);


/*
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2** 3);
*/

let str1 = "Akash"
let str2 = "Singh"
console.log(str1 + " " + str2);

console.log("1" +2);
console.log(1 + "2");
console.log("1" + 2 + 3); // if string in first then treat all string
console.log(1 + 2 + "3"); // if string in last then first of convertion then include string

// tricky operation 
console.log(true);
console.log(+true);
console.log(+"");// avoid all becouse it is not good 