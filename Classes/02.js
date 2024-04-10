
class User {
	constructor(name, email, age) {
	    this.name = name;
		this.email = email;
		this.age = age;
	}
	logMe() {
		console.log(`USERNAME is ${this.name}`);
	}
}

class Teacher extends User{
	constructor(name, email, age, subject) {
		super(name)
	    this.email = email;
		this.age = age;	
		this.subject = subject;
	}

	addCourses() {
		console.log(`A new course was added by ${this.subject}`);
	}
}

const chai = new Teacher("Chai", "chai@gmail.com", 25, "Maths");
chai.addCourses();
chai.logMe()

const masalaChai = new User("Masala Chai", "masala@gmail.com", 25);
masalaChai.logMe();


console.log(chai instanceof User);