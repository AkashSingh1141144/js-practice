const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spred operator ->  we can add multiple array using spred operator

console.log(all_new_heros);


const another_array = [1, 2, [3, [4, 5], 6], 6, [7, 8, 9], 10]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Akash")) // we will ask is an array ? 

console.log(Array.from("Akash")); // converting into array 

console.log(Array.from({name: "Akash"})); // interesting   

let score1 = 100
let score2 = 200
let score3 = 400
console.log(Array.of(score1, score2, score3));