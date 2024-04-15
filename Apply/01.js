/*

Sure! Let's consider a real-world scenario where the apply() method can be useful.

Imagine you have a web application where users can log in and perform various actions. You might have a User object representing each user, and you want to dynamically assign permissions to each user based on their role.
*/

function User(name, role) {
  this.name = name;
  this.role = role;
}

User.prototype.greet = function () {
  console.log(`Hello, ${this.name}!`);
};

User.prototype.canAccess = function (resource) {
  // Logic to check if the user can access the specified resource based on their role
  if (this.role === "admin") {
    console.log(`${this.name} can access ${resource}`);
  } else {
    console.log(`${this.name} cannot access ${resource}`);
  }
};

const admin = new User("Admin", "admin");
const user = new User("User", "user");

admin.greet(); // Output: Hello, Admin!
user.greet(); // Output: Hello, User!

admin.canAccess.apply(user, ["Admin Dashboard"]); // Output: User cannot access Admin Dashboard
user.canAccess.apply(admin, ["Admin Dashboard"]); // Output: Admin can access Admin Dashboard
