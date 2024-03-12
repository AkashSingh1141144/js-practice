// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach(item => {
// 	// console.log(item);
// 	return item
// });

// console.log(values); /// forEach() not return any value




// ++++++ filter() method ++++++

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const myNum = myNums.filter( (num) =>(num > 5))
// const myNum = myNums.filter( (num) =>{ return num > 5}) //explite return
// console.log(myNum); /// filter return values


/* same operation by forEach() method */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums =[]

myNums.forEach(item => {
	if (item > 5) {
		newNums.push(item)
	}
});
console.log(newNums);


const heros = ["Allu Arjun", "Ravi Teja", "Ram Charan", "Jr NTR", "Prabhas", "Dhanus", "Chirnjivi", "Rajnikant", "Punit Rajkumar", "Siva Rajkumar"]



let newHero = heros.filter( (item) => { return item >= "Jr NTR"})

console.log(newHero);


///  +++++ Array.reduce9 +++++++


// this syntax of docs
const array1 = [1, 2, 3, 4, 5, 6, 7]

const initialValue = 0
const sumWithInitial = array1.reduce( (accumlator, currentValue) => {
	return accumlator + currentValue 
}) 

console.log(sumWithInitial);


// readable code of reduce() method

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const totalSum = array2.reduce( (acc, currVal) => acc + currVal, 3)

console.log(totalSum);


const cars = [ 
	{
		name: "Supra",
		price: 10002230,
		speed: "450km/h"
	},
	{
		name: "Mustang GT",
		price: 12335334,
		speed: "500km/h"
	}, 
	{
		name: "Urush",
		price: 1354534,
		speed: " 350km/h"
	}
]

const totalCarPrice = cars.reduce( (acc, item) => acc + (item.price), 0)
console.log(totalCarPrice);