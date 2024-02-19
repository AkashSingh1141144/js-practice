

/* The length data property of a string value contains the length of the string in UTF-16 units. */

const str = 'life , the universe and everythind. Answer';

console.log(`${str} ${str.length}`);



const x = " Mozilla";
const empty = "";

console.log(`${x} is ${x.length} code uints logn.`);

console.log(`The empty string has a length of ${empty.length}`);



const emoji = "😄";
console.log(emoji.length); // 2
console.log([...emoji].length); // 1
const adlam = "𞤲𞥋𞤣𞤫";
console.log(adlam.length); // 8
console.log([...adlam].length); // 4
const formula = "∀𝑥∈ℝ,𝑥²≥0";
console.log(formula.length); // 11
console.log([...formula].length); // 9
