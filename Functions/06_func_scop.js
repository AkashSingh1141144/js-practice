// nested scope

// function one() {
// 	const username = "Akash";

// 	function two() {
// 		const website = "YouTobe"
// 		console.log(username);
// 	}
// 	// console.log(website);
// 	two()
// }
// one()


if (true) {
	const username = "Akash"
	if (username === "Akash") {
		const website = "website"
		// console.log(username + website);

	}
	// console.log(website);
}
// console.log(username);



//+++++ Interesting +++++
console.log(addone(5));
function addone(num) {
   return num +1;
}





addTwo(5) // error because of we will store function in a variable and access after declare 
const addTwo = function (num) {
	return num + 2;
}

