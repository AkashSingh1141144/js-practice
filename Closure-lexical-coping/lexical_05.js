(function() {
	var secret = "I'm hidden";
  
	function reveal() {
	  console.log(secret); // Accessing secret from the immediately invoked function's scope
	}
  
	reveal();
  })(); // Output: I'm hidden
  