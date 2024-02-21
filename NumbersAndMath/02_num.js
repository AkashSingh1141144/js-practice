// ++++++++++ math object ++++++++//

/* in JavaScripe, the object is a collection of constants and functions that we can use to perform mathematical operations. */

/*  +++++ Math Methods ++++++

The syntax of Math any methods is 
 Math.method(number)

 Math.round(x) -> Returns x rounded to its nearest integer
 Math.ceil(x)  -> Returns x rounded up to its nearest integer
 Math.floor(x) -> Returns x rounded down to its nearest integer
 Math.trunc(x) -> Returns the integer part x 
 */

 // Math.round()

 let num = 4.1 // 4.6;
 console.log(Math.round(num));


 // Math.ceil()

 let num1 = 4.1 // 4.6;
 console.log(Math.ceil(num1));

 // Math.floor()
 let num2 = 4.1 // 4.6;
 console.log(Math.floor(num2));

 // Math.trunc()

 let num3 = 4.1 // 4.6;
 console.log(Math.trunc(num3));


 // Math.random()

 let random = Math.random();
 console.log(random);
 const min = 10;
 const max = 20;

 console.log(Math.floor(Math.random() * (max - min +1) +min));