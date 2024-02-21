// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof(myDate));
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getFullYear());



let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toLocaleDateString());


let myCreatedDate1 = new Date("2024-01-21")
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate1.toLocaleDateString());
console.log(myCreatedDate1.toLocaleTimeString());




let myCreatedDate2 = new Date("02-21-2024")
console.log(myCreatedDate2.toLocaleString());





/// Time stamp

let myTimeStamp = new Date();

console.log(myTimeStamp);

console.log(myTimeStamp.getTime());
console.log(Math.floor(Date.now() / 1000)); // converting mili second



let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMonth() +1);
console.log(newDate.getFullYear());
// console.log(newDate.getYear());
console.log(newDate.getMinutes());