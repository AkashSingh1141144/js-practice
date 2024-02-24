// const tinderUser = new Object() // This is a singlton object
const tinderUser = {} // This is not a singlton object

 tinderUser.id = "123abc"
 tinderUser.name = "Anuj"
 tinderUser.isLoggedIn = false 

// console.log(tinderUser);


/* ++++ second app +++++*/
const regularUser = {
	email: "abc@gmail.com",
	fullName: {
		userFullName : {
			firstName: "Anuj",
			lastName: "Viswarkarma"
		}
	}
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName.firstName);

console.log(regularUser.fullName.userFullName.lastName);



/* +++++ Merge Object ++++*/
const obj1 = {1: "a", 2: "b"};
const obj2 = {c: "3", d: "4"};
const obj4 = {e: "5", f: "6"};
// const newObj3 = {...obj1, ...obj2} // mostly use
const newObj3 = Object.assign({}, obj1, obj2, obj4)

console.log(newObj3);



// Objects in array 
const users = [
	{id:1,
	    email: "abc@gmail.com"
    },
	{id:1,
		email: "abc@gmail.com"
	},
	{id:1,
		email: "abc@gmail.com"
	},
	{id:1,
		email: "abc@gmail.com"
	},
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));