
const isUserLoggedIn = true
const temperature = 41

// if (temperature === 50) {
// 	console.log("Less than 50");
// }
// else {
// console.log("Temperature is getter than 50");
// }

// console.log("Execute");



// const score = 200;

// if (score > 100) {
// 	const power = "fly"
// 	console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`)




// ===== sorthand notation =====

const balance = 1000

// if ( balance > 500) console.log("test"), console.log("test2");  // this code is also running but this is not good practice so please aviede this syntax 


if (balance < 500) {
   console.log("less than 500");
} else if (balance < 750) {
	console.log("less than 750");
} else if (balance < 900) {
	console.log("less than 900");
} else {
	console.log("less than 1200");
}



const userLoggeIn1 = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggeIn1 && debitCard &&  2 == 2) {
	console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
	console.log("User Logged in");
}