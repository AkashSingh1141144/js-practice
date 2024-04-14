class User {
  constructor(email, password) {
    this.email = email; 
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value; // value is the new email
  }

  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value; // value is the new password
  }
}

const akash = new User("akash@gmail.com", "123456");
console.log(akash.password);
console.log(akash.email);
