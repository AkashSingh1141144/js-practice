let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.push(11, 12)
console.log(arr);


arr.pop()
console.log(arr);

arr.shift()
console.log(arr); 

arr.unshift()
console.log(arr);



let a1 = [1, 2, 3, 4, 5]
let a2 = [6, 7, 8, 9, 10]
let a3 = a1.concat(a2)
console.log(a3);

let s = a3.join('')
console.log(s);

a3.reverse()
console.log(a3);

console.log(a3.indexOf(74)); // false



let arr1 = [	1, 2, 3, 4, 5]
console.log(arr1.slice(1, 4));

arr1.splice(2, 0, 11)
console.log(arr1);