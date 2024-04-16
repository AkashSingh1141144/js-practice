
let pattern = 'pw'

let regeExOne = new RegExp(pattern)

let flag = 'gi'

let regeExTwo = new RegExp(pattern, flag)



// second method

let regeExThree = /pw/gi

const strToCheck = 'pw is growing at a rapid speed and recently they are working on pw skills to create skills based pw content'

const result = regeExThree.test(strToCheck)
console.log(result);



const anotherResult = strToCheck.match(regeExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regeExThree, "p-w") // replace(pattern, replacement) yani yh pw ko p-w me replace kr rhe hai or match bhi krta hai
console.log(oneMoreResult);