const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currentValue) {
// 	console.log(`acc: ${acc} and current value: ${currentValue}`);
// 	return acc + currentValue}, 0)

// console.log(myTotal);

//  /// /// //// //// Arrow function 

const myTotal = myNums.reduce( (accumlator, currentValue ) => 
accumlator + currentValue, 0)

console.log(myTotal);



const shoppingCart = [
	{
		itmeName: "js course",
		price: 2199
	},
	{
		itmeName: "java course",
		price: 2399
	},
	{
		itmeName: "python course",
		price: 299
	},
	{
		itmeName: "dsa course",
		price: 399
	}
]

const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)

console.log(priceToPay);