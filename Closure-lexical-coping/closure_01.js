function outer() {
	const outerConst = 'I am outer'

	function inner() {
		console.log(outerConst);
	}

	return inner;
}

const myCloser = outer();
myCloser(); // I am outer