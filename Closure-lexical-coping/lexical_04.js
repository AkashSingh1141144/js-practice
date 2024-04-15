
//  Global and Local Scopes

const globalConat = 'Global'

function outer() {
	const outerConst = 'Outer';

	function inner() {
		console.log(globalConat + " " + outerConst);
	}
	inner();

}
outer();