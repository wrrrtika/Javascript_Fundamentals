var recipe = {
	title: "Mole"
	servings: 2,
	ingredients: ["cinnamon", "cumin", "cocoa", "love"]

};

function printRecipe(recipe) {
	console.log("Title: " + recipe.title)
	console.log("Serves: " + recipe.serves)
	console.log("Ingredients: ")
	for (var i = 0; i <= recipe.ingredients.length; i++) {
			console.log(recipe.ingredients[i]);
		}

}

var books = [
 	{title: "Lullabye",
 	 author: "Chuck Palahniuk",
 	 alreadyRead: true},
 	 {title: "Tale of Two Cities",
 	 author: "Charles Dickens",
 	 alreadyRead: false}
];

for (var i = 0; i < books.length; i++) {
	var book = books[i];
	if (book.alreadyRead == true) {
		console.log("You have already read " + book.title + " by " + book.author)
	} else if (book.alreadyRead == false) {
		console.log("You still need to read " + book.title + " by " + book.author)
	}
}


var JurassicPark = {
	title: "Jurassic Park",
	duration: 127,
	opened: 1995,
	starring: ["Jeff Goldblum", "Sam Neill", "Laura Dern"]

}

function describeMovie(movie) {
	console.log(movie.title + " has a duration of " + movie.duration + " minutes. This movie, from " + movie.opened +" Starred: " + movie.starring + ".");

}

describeMovie(JurassicPark);