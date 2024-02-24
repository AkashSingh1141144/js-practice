// self learning function for deap understanding

function addMultipleArrgument(...arrgument) {
	return arrgument
}

const result = addMultipleArrgument("Akash", "Kumar", "Singh", "age-20", "city-mirzapur")
console.log(result);


let person = {
	name: "Akash",
	age: 20,
	dream: "To be a web developer"
}

function newPerson(anyObject) {
	return anyObject;
}

const oldPerson = newPerson(person)
console.log(oldPerson);
console.log(oldPerson.dream = "To be a Full stack web developer"); // here i am change the dream in object 
// console.log(oldPerson.dream);


let myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function newArray(anyArray) {
	return anyArray;
}
let new2Array = newArray(myArray)
console.log(new2Array);
console.log("The 4th item of Array is:", new2Array[4]);
