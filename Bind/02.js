/*
JavaScript mein bind() ek function hai jo ek naya function banata hai, jismein ek specific context (yaani this value) set hoti hai aur kisi existing function ko us context mein execute karne ke liye use hota hai.

Yadi aap kisi function ko bind() ke saath use karte hain, to bind() ek naya function return karta hai jismein original function ke context ko fix kiya jata hai. Yeh naya function, jab call kiya jata hai, woh original function ke sath us context mein execute hota hai.
*/


const person = {
	name: 'Akash singh', 
	age: 21,
	getInfo: function() {
		console.log(`My name is ${this.name} and I am ${this.age} years old`);
	}
}

const myGf = {
	name: 'Sandhya',
	age: 20
}

const Details = person.getInfo;
Details() // output: - My name is undfined and I am undfined years old

const myDetails = person.getInfo.bind(person);
myDetails()