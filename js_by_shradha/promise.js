/* Promises
promise is for 'eventual' completion of task. It is an object in JS.
 it is a solution to callback hell.

 let promise = new Promise((resolve, reject) => {...})

 * resolve & reject are callback provided by js
 */

 const promise = new Promise((resolve, reject) => {
	console.log('I am a promise');
	resolve(123)
 })