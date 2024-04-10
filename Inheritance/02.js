class Animal {
	constructor(name){
		this.name = name;
		this.speed = 0;
	}
	run(speed) {
		this.speed = 0;
		console.log(`${this.name} runs with speed ${this.speed}`);
	}
	stop() {
	    this.speed = 0;
		console.log(`${this.name} stands still.`);
	}
}

class Panthor extends Animal{
	hide() {
		console.log(`${this.name} hides`);
	}
	stop() {
		super.stop(); // call parent stop method
		this.hide(); // call child hide method
	}
}

let panthor  = new Panthor("Panthor")
// console.log(panthor);
panthor.run(10);
panthor.stop();