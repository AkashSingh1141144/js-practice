for (let i = 0; i <= 10; i++) {
	const element = i;
	// console.log(element);
}

const array = [1, 2, 3, 4, 5, 7, 8, 9, 10]
// console.log(array.length);
// console.log(array.push(11));


for (let i = 0; i < array.length; i++) {
	const element = array[i];
	
	//console.log(`Array value is: ${element}`);
}


const myArray = ["SpiderMan", "IronMan", "Wonda", "Black widow", "John wick", "Captain America", "Black Panther", "White Wolf", "Falcon", "Hulk", "Bruch Ven", ""]

for(let i = 0; i < myArray.length; i =  i + 1) {
	const element = myArray[i]

	// console.log(element);
}




let array2 = [
	{
		name: "Akash singh", 
		age: 20, 
		gender: "male"
	},
	{
		name: "Anuj Viswakrma",
		age: 20,
		gender: "male"
	}
]

// console.log(typeof(array2));
// console.log(array2.length);

for (let index = 0; index < array2.length; index++) {
	const element = array2[index];
	// console.log(element);
	// console.log(`Name is: ${element.name}`);
	// console.log(element.age);
	// console.log(element.gender);
}

const arr = ["SpiderMan", "IronMan", "Wonda", "Black widow", "John wick", "Captain America", "Black Panther", "White Wolf", "Falcon", "Hulk", "Bruch Ven", ""]

for (let index = 0; index < arr.length; index++) {
	// console.log(`Outer loop value : ${arr.length}`);
     for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		// console.log(`Inner loop value: ${element} and outer loop value is: ${arr.length}`);
	 }	
}




for (let index = 0; index <= 10; index++) {
	// console.log(`outer value is: ${index}`);
	for (let j = 0; j <= 10; j++) {
		// console.log(`inner value is: ${j} and inner value is: ${index}`);
		// console.log(index+ " * " + j + " = " + index * j);
	}
	
}


for (let i = 0; i <= 100; i++) {
	if (i == 85) {
        //  console.log(`value  ${i} is didected`);	
		//  break	
		// continue
	}
	const element = i;
	// console.log(i);
}



// const arra = ["SpiderMan", "IronMan", "Wonda", "Black widow", "John wick", "Captain America", "Black Panther", "White Wolf", "Falcon", "Hulk", "Brush Ven", ""]

// for (let i = 0; i < arra.length; i++) {

// 	if (arra.length == "Wonda") {
//        console.log(`Scarlet witch is dedected: ${arra.length}`);	
// 	   break	
// 	}
// 	const element = arra[i];
// 	console.log(element);
// }

let i = 0;

while (i <= 10) {
	// console.log(` Value is: ${i}`);
	i = i +1
}

const array3 = ["SpiderMan", "IronMan", "Wonda", "Black widow", "John wick", "Captain America", "Black Panther", "White Wolf", "Falcon", "Hulk", "Bruch Ven", "Akash Kumar singh"]

let arr3 = 1;
while (arr3 < array3.length) {
	// console.log(`the value is: ${array3[arr3]}`);
	arr3 = arr3 + 1
}






let score = 1

do {
	
	// console.log(`value is: ${score}`);
	score++;
	
} while (score <=10);



const array4 = ["SpiderMan", "IronMan", "Wonda", "Black widow", "John wick", "Captain America", "Black Panther", "White Wolf", "Falcon", "Hulk", "Bruch Ven", "Akash Kumar singh"]
let arr4 = 1;
do {
	// console.log(`value is: ${array4[arr4]}`);
	arr4 = arr4 +1
} while (arr4 < array4.length);



let k = 0
do {
	console.log(`value is ${k}`)
	k++
} while (k <= 300);