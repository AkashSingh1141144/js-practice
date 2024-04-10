const userEmail = []
// const userEmail = ""
// const userEmail = "akashakash@gmail.com"

if (userEmail) {
	console.log("Got user Email");
}
else {
	console.log("Don't get user Email");
}



// =====falsy values - >>>

// false, 0, -0, BigInt 0n, "", null, undefined, Nan



// ===== Truthy values ======
// "0", "false", "  ", [], {},  function(){}



// if (userEmail.length === 0 ) {
// 	console.log("Array is Empty");
// }


const emptyObj = {}

if (Object.keys (emptyObj).length === 0) {
   console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null udefiend

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15




console.log(val1);



// ====  Terniary Operator ====

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than  80");