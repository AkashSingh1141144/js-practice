
//  Multiple Nested levels

function outer() {
	const outerConst = 'I am from outer function';

	function middle() {
		const middleConst = 'I am from middle function';

		function inner() {
			console.log(outerConst,  " ", middleConst);
		}
		inner()
	}
	middle()
}
outer()