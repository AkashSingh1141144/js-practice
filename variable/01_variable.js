const accountId = 144523
let accounEmail = 'akashakash44351@gmail.com'
var accounPassword = 'Akash@123'
let accountState; /* if we create a variable but not declare value then JavaScript gives a 'undefined' value */


accountCity = 'Mumbai' /* this is another way to declaring a variable but egnore to prefer this method */


console.log(accountId);


// we can't chenge the value's of given in the const variable. when const diclared it will be not change 

// accountId = 23 
// 'here we will try to assign a value to accountId but it is not allowed


accounEmail = 'akashakash@gmail.com'
accounPassword = '23432434'
accountCity = 'Pune'

console.log([accounEmail, accounPassword, accountCity, accountState]);

// To declare variable we will use let & var but this time are not use var 

/* prefer not to use var 
because of issue in block scope and functional scope
*/