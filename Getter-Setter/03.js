class MyDream {
	constructor(name, traveling, place) {
		this._name = name;
		this._traveling = traveling;
		this._place = place;
	}
	get name () {
		return this._name;
	}
	set name (value) {
	    this._name = value;
	}
	get traveling () {
		return this._traveling;
	}
	set traveling(value) {
		this._traveling = value;
	}
	get place () {
		return this._place;
	}
	set place (value) {
	    this._place = value;
	}
}


const Dream = new MyDream('Akash Singh', true, 'Leh Laddak');
console.log(Dream.name);
console.log(Dream.traveling);
console.log(Dream.place);