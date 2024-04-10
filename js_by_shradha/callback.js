/* Callbacks -> 
A callback is a function passed as an agrument to another function.
*/

function sum(a, b) {
	console.log(a + b);
}

function calulator(a, b, sum) {
	sum(a , b)
}

calulator(1, 3,  sum)



const hello = () => {
	console.log('hello');
}

let stopIneterval = setInterval(hello, 2000)
clearInterval(stopIneterval)