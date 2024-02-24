// Function 

function sayMyName() {
	console.log("A");
	console.log("K");
	console.log("A");
	console.log("S");
	console.log("H");
	
}

// sayMyName();


// function addTwoNumbers(num1, num2) {
// 	console.log(num1 +num2);
// }

// addTwoNumbers(2, "5")
// addTwoNumbers(2, 5)
// addTwoNumbers(2, "a")
// addTwoNumbers(2, null)



function addTwoNumbers(num1, num2) {
	let result = num1 + num2;
	console.log("Akash"); // it will be execute
	return result;
	// console.log("akash"); // before return no one can execute 
	// return num1 + num2;
}

const result = addTwoNumbers(2, 5)
console.log(result);





function loginUserMessage(username) {
	if(username === undefined) {
		console.log("Please enter a usarename");
		return
	}
    return `${username} just logged in `
}

// loginUserMessage("Akash")
const message = loginUserMessage("Akash Singh")
console.log(message);

console.log(loginUserMessage());