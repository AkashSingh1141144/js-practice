function Book(title, author, year, price) {
	this.title = title;
	this.author = author;
	this.year = year;
	this.price = price;
	this.display = () => {
		console.log(`The title of the book is ${this.title} and the author is ${this.author}`);
	}
}

const book = new Book('The Hobbit', 'J.R.R. Tolkien', 1937, 100);
const book1 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1954, 150);

console.log(book);
book.display();
console.log(book1);
book1.display();