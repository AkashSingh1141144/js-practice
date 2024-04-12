const MarvalMovies = {
  name: "Marvel Movies",
  url: "https://www.imdb.com/list/ls05798255/",
  itmes: [
    { title: "Iron Man", year: 2008 },
    { title: "The Incredible Hulk", year: 2008 },
    { title: "Iron Man 2", year: 2010 },
    { title: "Thor", year: 2011 },
    { title: "Captain America: The First Avenger", year: 2011 },
    { title: "Avengers Assemble", year: 2012 },
    { title: "Iron Man 3", year: 2013 },
  ],
  getMoviesDetails: function () {
	console.log(`The Marval Moveis Details is ${this.itmes.forEach(item => console.log(item.title, item.year))}`);
  }
};

const DCMovies = {
    name: "DC Movies",
	url: "https://www.imdb.com/list/ls05798255/",
	itmes: [
	    { title: "Batman Begins", year: 2005 },
		{ title: "The Dark Knight", year: 2008 },
		{ title: "The Dark Knight Rises", year: 2012 },
		{ title: "Batman v Superman: Dawn of Justice", year: 2016 },
		{ title: "Suicide Squad", year: 2016 },
		{ title: "Justice League", year: 2021 },
		{ title: "Batman: The Long Halloween", year: 2022 },
		{ title: "Batman: The Death of Superman", year: 2023 },
	]
}


const newDetails = MarvalMovies.getMoviesDetails.bind(DCMovies);
newDetails(); // Output: The Marval Moveis Details is DC Movies 

// console.log(MarvalMovies.itmes.forEach(function(itmes){
// 	console.log(itmes.title, " ", itmes.year);
// }));; // Output: The Marval Moveis Details is undefined