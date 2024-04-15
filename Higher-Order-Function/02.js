// Map()

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
})
// console.log(doubled);


// filter()
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers2.filter(function(num) {
	return num % 2 === 0;
})
// console.log(evenNumbers);


// reduce()
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce(function(accumulator, currentValue) {
	return accumulator + currentValue;
})
// console.log(sum);


// every()
const numbers4 = [1, 2, 3, 4, 5];
const allPositive = numbers4.every(function(num) {
    return num > 0;
})
// console.log(allPositive);


// some()
const numbers5 = [1, 2, 3, 4, 5];
const hasNegative = numbers5.some(function(num) {
	return num < 0;
})
// console.log(hasNegative);


// find()
const numbers6 = [1, 2, 3, 4, 5];
const found = numbers6.find(function(num) {
	return num > 3;
})
console.log(found);