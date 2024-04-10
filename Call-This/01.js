
//  call definition - 
//  call() method is used to call a function with a given this value and arguments provided individually.

/* ----------- HINDI ----------- */

//  call() का परिभाषा -

// call hamare current execution context ko kisi or dusare function ko pass kr deta hai 

function SetUserName(username) {
  this.username = username;
  console.log('called');
}

function createUser(username, email, password) {
  SetUserName.call(this,username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "123456");
console.log(chai);
