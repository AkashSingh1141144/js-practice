const powefTwo = (n) => {
	return n ** 2;
}

function powerCube(powefTwo, n) {
	return powefTwo(n) * n;
} 

// console.log(powerCube(powefTwo, 3));



function sayHello() {
	return () => {
		console.log('Hello');
	}
}

let guesValue = sayHello();
// console.log(guesValue);
// guesValue()


const higherOrder = n => {
	const oneFunc = m => {
		const twoFunc = p => {
		    return n + m + p;
		}
		return twoFunc;
	}
	return oneFunc;
}
const higher = higherOrder(1)(2)(3); // 6

console.log(higher);



const myNums = [2, 4, 5, 7];
const sumArra = arr => {
	let total = 0
	arr.forEach(function(element) {
		total += element;
	});
	return total;
}

const sum = sumArra(myNums);
console.log(sum);




function oneMoreHello() {
	console.log('Hello Akash singh', Math.floor(Math.random() * 10));
}

// setInterval(oneMoreHello, 1000);

// setTimeout(oneMoreHello, 1000);