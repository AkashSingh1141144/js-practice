// let math = Math.PI
// console.log(math);

// Math.PI = 5
// console.log(math);

// Math.PI is a read-only property.
// It is not possible to change the value of Math.PI.

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
/* 
output: { 
	value: 3.141592653589793,
	 writable: false, 
	 enumerable: false, 
	 configurable: false
 }
*/
