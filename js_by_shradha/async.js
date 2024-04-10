/* synchronous -> 
Synchronous means the code runs in a particular sequence of instructions given in the program Each instruction waits for the previous instructions to complete its execution.
*/
console.log('one');
console.log('two');
console.log('three');


/* Asynchrouns 
Due to synchronous programming, sometimes important instructions get blocked due to some previous instruction, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and does't block the flow.
*/
console.log('one');
console.log('two');

function hello() {
	console.log('hello');
}
setTimeout(hello, 3000)

console.log('three');
console.log('four');