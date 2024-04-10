/* Callback hell 
Callback Hell : nested callabacks stacked below one another forming a pyramid structure.
(pyramid of doom)

This style of programming becomes difficult to understand & manage.
*/

// function getData(dataId) {
// 	setTimeout(() => {
// 		console.log('data', dataId);
// 	}, 2000);
// } // this is a normal code where we will get data from db which takes a of 2s 


// supose we need to get 
// data1
// data2
// data3
function getData(dataId, getNextDate) {
	setTimeout(() => {
		console.log('data', dataId);
		if (getNextDate) {
			getNextDate()
		}
	}, 2000);
}

// callback hell
getData(1, () => {
	getData(2, () => {
		getData(3)
	})
})

// to resolve callback hell we have promises 