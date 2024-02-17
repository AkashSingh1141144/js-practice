/* JavaScipt provides different data types to hold different types of values. There are two types of data types in JavaScript.
1. Primitive data type
2. Non-primitive data type/ reference data type
JavaScript is dynamic type launguage, mean we don't need to specify type of the variable because it is dynamically used by JavaScript engine. we need to use var, let, const here to specify the data type. it can hold any type of values such as numbers, strings, objects etc 

Js primitive Dtype =>
string -> represents sequence of characters. "Akash"
Number -> represent numeric values. (100)
Boolean -> represent boolean value either false or true
Undefined -> when we are not declare the value of variable the return Undefine means the value of variable is  not defined.
Null -> represent null exp no value at all


*/


// Numbers:
let length = 16;
let weight = 75.1;
console.log(length);
console.log(typeof length);
console.log(typeof weight);



// Strings :
let color = "Yellow";
let userName = "Akash singh";
console.log(typeof (color));
console.log(typeof (userName));



/* Non-Primitive Dtype =>
Object -> represent instance through which we can acces members
Array -> represent group of similar values 
RegExp -> represent regular expression
*/

//Object :
let person = {
	firstName: "Akash",
	lastName: "Singh",
	age: 20
}

console.log(person);
console.log(typeof (person));

// Array object :
let fruits = ["apple", "mango", "orange"];
console.log(fruits);
console.log(typeof (fruits));

// Date object :
let date = new Date("2024-02-17")
console.log(date);
console.log(typeof (date));