// ++++++++++++++++

// Stack (Primitive), Heap(Non-primitive)

/*In Stack we use only primitive data types only. when we store a primitive data type value it will be stored in Stack and he give a copy of data to make changers like ----- >*/ // let myName = "Akash kumar sing" 
                                      // let myNewName = "myName"
									  // myNewName = "Akash Singh"
									  // console.log(myName)
									  //console.log(myNewName)


/*In Heap we use only Non-Primitive data type only. when we store a non-primitive data type value it will be stored in Heap and he give a reference of data it mean we can chenge real data  */
                          /* 
						  let user = {
							name: "Akash Singh",
							age: 20,
							address: "Mirzapur",
                            gender: "Male"
						}		
						let newUser = user;
						newUser.name = "Code with Akash";
						console.log(user.name);
						console.log(newUser.name);							  
                       */




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