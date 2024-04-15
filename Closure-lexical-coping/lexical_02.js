//  single level scope chain;

function outer() {
	const outerConst = 'Outer';

	function inner() {
		console.log('inner:', outerConst);
	}
	inner();
}
// console.log('outer:', outerConst);
outer();