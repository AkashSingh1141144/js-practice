/*
In JavaScript, an array is a data structure that is used to store multiple values in a single vairable. it is a type of object that is specifically designed to store an ordered colletion of elements. Arrays in JavaScript can contain elements of any data type, including numbers, strings, booleans, objects, functions, or even other arrays(nested arrays)

Array in JavaScript are zero-indexed, meaning that the first element is at index 0, the second element is at index 1, and so on. We can access elements of an array using square brackets [] notation along with the index of the element.
*/

/* Array in JavaScript are dynamic, which means they can grow or shrink in size dynamically. we can add or remove elements from an array, change the order of elements, or perform various operations on arrays using built-in methods provided by JavaScript.
*/


const heroArray = ["Superman", "BatMan", "IronMan", "DeadPool", "Captain-America"]

console.log(heroArray.length);
console.log(heroArray);
console.log(heroArray[2]);



/* ++++++++++++ slice & splice methods +++++++*/

/* The slice() method is used to extract a portion of an array and return it as a new array. it does't modify the original array; instead, it returns a shallow copy of a portion of an array into a new array object selected from "begin" to "end" (end not encluded). The original array will not be modified.
*/
const fruits = ["banana", "apple", "orange", "mango", "graps", "papaya"]
const newFruits = fruits.slice(1, 4)
console.log("Here your new fruit: ", newFruits);

const villainArray = heroArray.slice(1, 4)
console.log(villainArray);



/* The splice() method is used to modify the contents of an array by removing or replacing existing elements and/ or adding new elements in place.
This method modified the original array and returns the removed elements as a new array.
*/

const  cricketPlayers = ["Mahendra Singh Dhoni", "Virat", "Rohit", "Suresh Raina", "Yuvraj Singh", "Sanju Samsung"]
const removedPlayers = cricketPlayers.splice(2, 1,  "Rishab Pant", "Hardik Pandya")
console.log("Here your new cricket players : ", cricketPlayers);

const villainArray2 = heroArray.splice(1, 3)
console.log(heroArray);
console.log(villainArray2);


/* ++++++++ Join method +++++++ */

/* The join() method of Array instances creats and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. if the array has only one item, then that item will be returned without using the separator.

The join() method returns an array as a string.
The join() method does not change the original array.
any separator can be specified. The default is comma(,).

*/

const elements = ["Akash", "Kumar", "Singh"];
console.log(elements.join()); // output -> Akash,Kumar, Singh

console.log(elements.join("")); // output -> AkashKumarSingh

console.log(elements.join("-")); // output -> Akash-Kumar-Singh


const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

console.log(matrix);
console.log(matrix.join());


let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

let newNumbers = numbers.join(", ")
let newNumbers2 = numbers.join()
let newNumbers3 = numbers.join(" | ")
console.log(newNumbers);
console.log(newNumbers2);
console.log(newNumbers3);