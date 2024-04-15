
// closure with parameters

function multiplier(factor) {
	return function(number) {
		return number * factor;
	}
}

const double = multiplier(2);
console.log(double(10));