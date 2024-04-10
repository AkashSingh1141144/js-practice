/* Qs -> Create a function using the 'functino' keyword that takes a String as an argument and returns the nubmer of vowels in the string.
*/

function countVowels(str) {
	// ' ApnaCollege'
	let count = 0
	for (const char of str) {
		if (char ==='a'|| char === 'e' || char === 'i'|| char === 'o'|| char === 'u') {
			count++;
			
		}
	}
	console.log('The number of vowel is: ', count);
}
countVowels('Akash singh')



const countVow = (str) => {
	let count = 0
	for (const char of str) {
		if (char ==='a'|| char === 'e' || char === 'i'|| char === 'o'|| char === 'u') {
			count++;
			
		}
	}
	console.log('The number of vowel is: ', count);
}
countVow('Akash kumar singh')



/* Qs 2. -> 
For a given array of numbers, print the square of each value using the forEach loop.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.forEach( (num) => {
//    return num * num;
//    console.log(num*num);
}) 



let array = [1, 2, 3, 4, 5, 6, 7, 8,  9, 10]
let num = (num) => {
     console.log(num * num); 
}
array.forEach(num)


/* Qs 3. -> 
We are given array of marks of students. Filter our of the marks of students that scored 90+.
*/

let marks = [97, 64, 32, 99, 86, 49]

let stuMarks = marks.filter((val) => {
	return val > 90
})

console.log(stuMarks);



/* Qs4. ->
Take a number n as input from user. Create an array of numbers from 1 to n. use the reduce method to calculate sum of all numbers in the array use the reduce method to calculate product of all numbers in the array.
*/

let n = prompt('Enter a number:')


let arr1 = []

for (let i = 1; i <= n; i++) {
  	arr1[i-1] = i;
}

console.log(arr1);

let sum = arr1.reduce((pre, curr) => {
return	pre + curr
})

console.log(sum);

let factorial = arr1.reduce((pre, curr) => {
	return	pre * curr;
	})
	console.log(factorial);