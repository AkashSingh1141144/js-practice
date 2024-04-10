const promiseOne = new Promise(function(resolve, reject) {
	// DO an async task
	// DB calls, Cryptoghraphy, network
	setTimeout(() => {
		console.log('Async task is complete');
		resolve()
	}, 1000);
})


promiseOne.then(function name() {
	console.log('Promise consumed');
})




new Promise(function(resolve, reject) {
	setTimeout(() => {
		console.log('Async task two');
		resolve()
	}, 1000);
})

.then(function() {
	console.log('Async 2 resolveled');
})



const promesThree = new Promise(function(resolve, reject) {
	setTimeout(() => {
		resolve({username: 'Akash kumar singh', email: 'akashakash33451@gmail.com'})
	}, 1000);
})

promesThree.then(function(user) {
	console.log(user);
})




const promiseFour = new Promise( (resolve, reject) => {
	setTimeout(() => {
		// let error = false
		let error = true
		if (!error) {
			resolve({username: 'Akash singh', password: '123'})
		} else {
			reject('Error: something went wrong')
		}
	}, 1000);
})

const username = promiseFour.then((user) => {
	console.log(user);
	return user.username
}).then( (username) => {
console.log(username);
}).catch( (error) => {
	console.log(error);
}).finally(() => {
	console.log('the promise is either resolved or rejected');
})
// console.log(username);



const promiseFive = new Promise((resolve, reject) => {
	setTimeout(() => {
		// let error = false
		let error = true
		if (!error) {
			resolve({
				username: 'Sandhya',
				password: '123'
			})
		} else {
			reject('ERROR: js went wrong')
		}
	}, 1000);
})

async function consumePromiseFive() {
	try {
		const response = await promiseFive
	    console.log(response);
	} catch (error) {
		console.log(error);
	}
}

consumePromiseFive()