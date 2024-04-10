// JavaScript Exetuction Context 

/*  [{}] -------> Globle Execution Context -------> this 

in brawser this keyword's value is a window Object.

TYPE OF E C ->>

1.Globle Execution Context
2. Fuction/Functional Execution Context
3. Eval Execution Context

PHASE OF RUNNING ----->
 1.Memory Creation Phase
 2. Execution Phase

===== For Example =====
let val1 = 10;
let val2 = 20;
function addNum(num1, num2) {
	let total = num1 + num2;
	return total
}
const result1 = addNum(val1, val2)
const result2 = addNum(10, 2)


NOW his execution steps ===>
step1 -> Global Execution
                           |
						This
Step2 -> Memory Phase
    val 1 -> undifiend
	val2 -> undifiend
	addNum -> definition
	result1 -> undifiend
	result2 -> undifiend

Step 3-> Execution Phase
   val1 -> 10
   val2 -> 5 
   addNum ->  new box created [new variable environment +  execution thread]
         Step1 -> Memory Phase
	        val1 -> undifiend
		    val2 -> undifiend
			total -> undifiend
		Step2 -> Exection Phase
		    num -> 10
			num2 -> 5
			total -> 15
		    total	return -> Globle executional context
Now step 3 is -> Execution phase
    val1 -> 10
   val2 -> 5 
   addNum -> DELETE before done his job
   result -> 15
   result2 ->new box created [new variable environment +  execution thread]
        step1- Memory Phase
		   val1 -> undifiend
		   val2 -> undifiend
		   total -> undifiend
       step2 - Execution Phase
	       num -> 10
			num2 -> 2
			total -> 12
		    total	return -> Globle executional context

*/



// ========= CallStack =====
// callstack execute on LIFO method its means LAST IN FIRST OUT. 

// let supose we have a one(), two() and three() method nov first insert one() first. when one execteded then he out from the stack same with two, and three.
// but supose first insert one() then two() and last insert three()
// now first out three, then two and last out one() method


// check this code in brauser inside source 


// function one() {
// 	console.log("one");
// }
// function two() {
// 	console.log("Two");
// }
// function three() {
// 	console.log("Three");
// }
// one()
// two()
// three()



// function one() {
// 	console.log("one");
// 	two()
// }
// function two() {
// 	console.log("Two");
// 	three()
// }
// function three() {
// 	console.log("Three");
// }
// one()
// two()
// three()