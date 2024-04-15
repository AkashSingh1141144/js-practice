<!--  JavaScript Lexical scoping  -->

 # Lexical scope ka concept yeh hai ki har function apne parent function ya global scope ke variables ko access kar sakta hai, lekin parent function uske child function ke variables ko access nahi kar sakta. Yani, ek function ke variables unke likhe gaye code block ke andar hi rehte hain aur uss block ke bahar unka access nahi hota.


 <!-- JavaScript clouser -->
 
 # JavaScript clouser ka concept yeh hai ki har function apne parent function ya global scope ke variables ko access kar sakta hai, lekin parent function uske child function ke variables ko access nahi kar sakta. Yani, ek function ke variables unke likhe gaye code block ke andar hi rehte hain aur uss block ke bahar unka access nahi hota.

 # A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). When you create a closure, you gain access to an outer function’s scope from an inner function. Closures are automatically created every time a function is defined in JavaScript.

  <!-- function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc(); -->

<!-- analyse code -->

# sabse phle ek function bnaya makeFunc() hai jisme ek name variable bnaya hai aur usme Mozilla value assign ki hai.

# uske baad ek function bnaya displayName() jisme ek console.log() function call ki hai jisme name variable ko access ki hai.

# uske baad displayName() function ko return ki hai.

# hmne jaise hi makeFunc() function execut kiya or return kr diya displayName ko to sirf displayName() nhi jayega agar uska outer function bhi exixte krta hain uska bhi pura scope jayega mtlab pura lexical scoping uth kr jata hai memory me, yaha pr memory q use ho rahi hai kyuki jb hmen makeFunc() ko execut kiya to pura scope run ho kr khatam ho gya or yaha pr momery ka kaam ata hai