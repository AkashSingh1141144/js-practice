
/* The charCodeAr() method of string values returns and integer between 0 and 6555 representing the UTF-16 code unit at the given index.*/


const sentance = 'The quick brown fox jumps over the lazy dog';

const index = 6; // we are finding the character at 6th index	
console.log(`Character code ${sentance.charCodeAt(index)} is equal to ${sentance.charAt(index)}`);



/* ((((((((((((((((((((((((((Concat())))))))))))))))))))))))))) */

// The concat() method of string values concatenates the string arguments to this string and returns a new string.

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ',str2));
console.log(str1.concat(',', str2));


/* (((((((((((((((((((((((((endsWith()))))))))))))))))))))))))) */

// The endWith() method of string values determines a whether a string ends with the characters of the string, returning [true/ or false] as appropriate.

const user = 'Akash kumar singh is a good boy but nahh its wrong he is very badas boy';

console.log(user.endsWith('badas'));
console.log(user.endsWith('boy'));