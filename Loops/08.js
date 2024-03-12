const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

//////////////////////////////////////
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 14, 15] 

const newNums2 = []

myNums2.forEach( item => {
	if (item > 4 ) {
		newNums2.push(item)
	}
});

// console.log(newNums2);

// same operation by filter method 

const newNums3 = myNums2.filter( item => item > 5)
// console.log(newNums3);



const yourNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const yourNums = yourNum.map( (num) => {return num + 10})

// console.log(yourNums);

// same operation by forEach() method

const yourNums = []
yourNum.forEach(element => {
	
    yourNums.push(element + 10)	
	
});
console.log(yourNums);