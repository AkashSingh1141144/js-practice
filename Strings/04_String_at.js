
/* The at() method of string values takes an integer value and returns a new string consistind of the single UTF-16 code located ot the specifid offset. This method allows for positiv and negative intergers. Negative intergers count back from the last string character. */

const sentance = 'The Quick Brown Fox Jumps Over The Lazy Dog';

let index = 1;

console.log(`An index of ${index} returns the character ${sentance.charAt(index)}`);

index = -5; // +++++++ when we want to a last character of the given string it will be not start from last of 0th indexed possition [ string.length - 1]
console.log(`An index of ${index} returns the character ${sentance.at(index)}`);
// console.log(`An index of ${index} return the character ${sentance.charAt(index)}`);






// A function which returns the last character of a given string 

function returnLastCharacter(arr) {
	return arr.at(-1);
}

let invoiceRef = 'ABCD12345';

console.log(returnLastCharacter(invoiceRef));

invoiceRef = 'ABCD123456';

console.log(returnLastCharacter(invoiceRef));


// ((((((((((((charAt())))))))))))

/* The charAt() method of string values returns a new string consisting of the single UTF-16 unit at the given index.*/

const sen = 'The quick brown fox jumps over the lazy dog';

console.log(`The character of sentence is: ${sen.charAt(4)}`);


const anyString = 'Brave new world';
console.log(`the character  at index is ${anyString.charAt()}`); // No index was provided, used 0 as default

console.log(`The character at index 1 is: "${anyString.charAt(1)}"`);
console.log(`The character at index 2 is: "${anyString.charAt(2)}"`);
console.log(`The character at index 3 is: "${anyString.charAt(3)}"`);
console.log(`The character at index 4 is: "${anyString.charAt(4)}"`);
console.log(`The character at index 999 is: "${anyString.charAt(999)}"`);