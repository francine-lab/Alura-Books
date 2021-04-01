// Images of books
var booksList = ["https://media.s-bol.com/mZQQPV58lqp3/549x840.jpg", "https://images-na.ssl-images-amazon.com/images/I/51yqLc7VoQL._SX376_BO1,204,203,200_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41HxnyEUqkL._SX327_BO1,204,203,200_.jpg", "https://media.s-bol.com/R4Jl6mJww1w/550x808.jpg", "https://m.media-amazon.com/images/I/51-KH9CL1SL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41yu2qXhXXL._SX324_BO1,204,203,200_.jpg", "https://media.s-bol.com/Yo5Mq8zYEqM/550x830.jpg", "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51+Xd9XFwsL._SX322_BO1,204,203,200_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51HNGe+lJHL._SX331_BO1,204,203,200_.jpg"];

// Names of books
var booksNames = ["0. Alice's Adventures in Wonderland", " 1. Animal Farm", " 2. The Hobbit", " 3. Breaking the Habit of Being Yourself", " 4. Guns, Germs, and Steel: The Fates of Human Societies", " 5. Sapiens: A Brief History of Humankind", " 6. The Chronicles of Narnia", " 7. Harry Potter and the Philosopher's Stone", " 8. Mr. Mercedes: A Novel", " 9. Dutch Short Stories for Beginners"];

// Gets the chooice of the user
var book = prompt("Tell the number of a book that you want to see:" + "\r\n" + booksNames.join('\r\n'));

// Check if the input is valid
if (isNaN(book) || book < 0 || book >= 10) {
  alert("Sorry, this option doesn't exist.");
} else {
// Shows the right book
  for (var i = 0; i < booksList.length; i++){
    document.write("<img src="+ booksList[book] + ">");
    break;
  }
};