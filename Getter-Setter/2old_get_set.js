function Car (name, color, model) {
	this._name = name;
	this._color = color;
	this._model = model;

	Object.defineProperty(this, 'name', {
		get: function () {
			return this._name.toUpperCase();
		},
		set: function (value) {
		    this._name = value;
		}
	})
	Object.defineProperty(this, 'color', {
		get: function () {
			return this._color;
		},
		set: function (value) {
			this._color = value;
		}
	})
	Object.defineProperty(this, 'model', {
		get: function () {
			return this._model;
		},
		set: function (value) {
		    this._model = value;
		}
	})
}

const car =  new Car('BMW', 'Black', 'X5');
console.log(car.name);
console.log(car.color);
console.log(car.model);