// De- structuring

/* In js , object destructuring is a conveniet way to extract multiple properties from an object and assign them to variable. It provides a concise syntax for extracting values from objects and array
*/

const person = {
	firstName: "Akash",
	lastName: "Singh",
	fullName: "Akash Singh",
	age: 20,
	country: "India"
};

// object destructuring
const {firstName, lastName, age, fullName, country} = person;

// console.log(firstName);
// console.log(lastName);
// console.log(fullName);
// console.log(country);
// console.log(age);

/* We will also assign new variable names while destructuring.
*/

const {firstName: fName, lastName: lName} = person;
console.log(fName);
console.log(lName);

/* means, Object destructuring in js ils like unpacking  a gift box. Imagin you have a box(an object) with different items(propeties) inside. Instead of opening the box and taking out each item one by one, object destructuring allows you to specify which items you want and pull them out directly, assigning each to a variable. it's like saying, "I want the blue marble, the red ball, and the green toy car," and immediately getting those specific items without dealing with the rest of the box's content. This helps keep your code neat and organized, especially when you only need certain  pieces of data from a larger object.
*/




const course = {
	courseName: "js in hindi",
	courseInstructor: "Hitesh sir",
	price: "free",
	
}

// console.log(course.courseInstructor);

const {courseInstructor: insturctor} =course
// console.log(courseInstructor);
console.log(insturctor);
