// ++++++++++++++++

// Stack (Primitive), Heap(Non-primitive)

let myYouTubeName = "Akash singh"

let anotherName = myYouTubeName;
anotherName = "Code with Akash";

console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
	email: "akash@gmail.com",
	upi: "User123@ybl"
}

let userTwo = userOne;

userTwo.email = "userTwo@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);