// Immediately Invoked Function Expressions (IIFE)

// Syntax
// ()()  
// in first (paranthises)  we will wirte function definitions and last we will call IIFE function by () this 

// ++++++ Why we use IIFE ++++++

// those function which is imideately executed called IIFE and we will use IIFE because of many time have a problem by globle scopes' pollutions.  use to remove those globle scope declaretion's pollution we will use this IIFE 



// this is a normal function =======
// function chai() {
// 	console.log(`DB CONNECTED`);
// }
// chai() 


// IIFE function =======

(function chai() {
	console.log(`DB CONNETED`);
}) ();

// (function ourCode () {
// 	console.log(`DB CONNECTED TWO`);
// }) () // It's throw an array because of in he dont know to when he stoped  his execution because of we not use the ; semecolan. semicolan is most important to use to close iife execution 

(function chaiOrCode () {
	console.log(`Hitesh sir is a very good teacher`);
})();

( () => 
	console.log(`Hello babby`)
)();

(function IIFE() {
	console.log(`IIFE is executed`);
}) ();


/////////////////////////////////// passing parameter
( (name) => {
	console.log(`Hello my name is ${name}`);
}) ("Akash kumar singh")