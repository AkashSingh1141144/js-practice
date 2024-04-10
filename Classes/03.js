class User {
	constructor(name, age) {
	    this.name = name;
	    this.age = age;
	}

	logMe() {
		console.log(`UserName: ${this.name}`);
	}
	static createId() {
		return `124`
	}
}

const Akash = new User('Akash', 24);
// console.log(Akash.createId());




class Teacher extends User {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

const teacher = new Teacher('Akash singh', 24, 'Maths');
console.log(teacher.logMe());
// console.log(teacher.createId());