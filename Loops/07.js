// For of loop

const myArray = ["Akash", "Anuj", "Sandhya", "Madhuri", "Priyanka", "Pallavi", "Aligabeth olcen", "Rashmika" ]

for (const arr of myArray) {
	// console.log(`My faverate person: ${arr}`);
}




const myFunc = [
	{
		name: 'Akash kumar singh', 
		age: 20, 
		gender: "male",
		phone: "7784841923"
	},
	{
		name: 'Anuj',
		age: 20,
		gender: "male", 
		phone: "undifiened"
	},
	{
		name: 'Sandhya', 
		age: 20,
		gender: "Female",
		phone: "undifiened"
	},
	{
		name: 'Madhuri',
		age: 20, 
		gender: "Female",
		phone: "undifiened"
	}
]

// myFunc.forEach( (fun) => {
// 	console.log(fun);
// 	console.log(fun.name);
// });

let i = 0;
for (let i = 0; i < myFunc.length; i++) {
	const element = myFunc[i];
	// console.log(`Name is: ${element.name}  and age is: ${element.age}`);
}



for (const key in myFunc) {
	// console.log(myFunc[key]);
}

for (const key in myArray) {
	// console.log(myArray[key]);
}



// for (const [key , value] of myFunc) {
// 	console.log(key, value);
// }

for (const key in myFunc) {
	// console.log(myFunc[key]);
}


const myObject = {
	name: 'Supra',
	price: 15000000,
	speed: "350 km/h",
	torck: 8
}
for (const key in myObject) {
	// console.log(` Car ${key} is ${myObject[key]}`);
}

myFunc.forEach(etem => {
	console.log(etem.name);
});