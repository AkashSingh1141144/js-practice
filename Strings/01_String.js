const name = 'akash singh'
const repoCount = 5


console.log(name +" " + repoCount); // avoid this syntax 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // mostly use this syntax 

// +++++++++++ second type of declaring String +++++++++++++++

const gameName = new String("GTA");

console.log(gameName);
console.log(gameName[0]); // [0] is the position of string key's
console.log(gameName.__proto__); // __proto__ is the prototype of string key's

console.log(gameName.length);

console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)); // to check possition of character 
console.log(gameName.indexOf('t'));


const superHero = new String("spiderman");

const newSuperHero = superHero.substring(0, 5); // deviding a string in substring in this case we will not give negative value like slice.
console.log(newSuperHero);

const newSuperHero1 = superHero.slice(-8, 5); // deviding a string in slice. we will give a negative value in slice method 
console.log(newSuperHero1);


const newSuperHero2 = "     Akash        "
console.log(newSuperHero2);
console.log(newSuperHero2.trim()); // trim() is used to remove the space from string.


const url = "https://www.google.com/Akash%20Singh";
const newUrl = url.replace("%20", "-"); // replace() is used to replace the string.	we replace %20 with "-"
console.log(newUrl);

console.log(url.split("Akash")); // split() is used to split the string.
console.log(url);

console.log(url.includes("Akash")); // includes() is used to check the string is present or not. if present then return's true ilse return false


