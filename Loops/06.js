const coding = ['js', 'ruby', 'java', 'Python', 'cpp']

// coding.forEach( function ( item ) {
// 	console.log(item);
// } )



// coding.forEach( (val) => {
//   console.log(val);
// } )





// function printMe(item) {
// 	console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
// console.log(item, index, arr);
// })



const myCoding =  [
	{
		languageName: 'javascript', 
		languageFileName: 'js'
	},
	{
		languageName: 'java', 
		languageFileName: 'java'
	},
	{
		languageName: 'python', 
		languageFileName: 'py'
	}
]

myCoding.forEach( (item) => {
	// console.log(item.languageFileName);
	console.log(item.languageName);
})



// let index = 0
// for (let index = 0; index < myCoding.length; index++) {
// 	const element = myCoding[index];
// 	console.log(`${element.languageFileName} is ${element.languageName}`);
// }