const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")


buttons.forEach( (button) => {
	console.log(button);
	button.addEventListener('click', function(e) {
		console.log(e.target);
	})
})