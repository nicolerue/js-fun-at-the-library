// This function will take in the name of a library as an argument and will return an object that includes the name as the value for the name key.
// This function will return an object with a name and shelves with a nested object that includes three genres and an empty arrray for each.

function createLibrary(name) {
  return {
    name: `${name}`,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
}

// This function will take in an object for a library and an oject for a book.
// This function will store the book object's genre into a variable (the book being passed in)
// This function will use bracket notation to get the value of the bookGenre from the variable.
// This function will look at the library object's shelf for a the specific genre of book that was being passed in, and then it will push that object into that genre's shelf (into the genre's array).

function addBook(libObj, bookObj) {
  var bookGenre = bookObj.genre;

  libObj.shelves[`${bookGenre}`].push(bookObj);
}

//  This function will take in three arguments, the library object, the name of a book, and the genre of that book.
// This function will loop through the library object's shelves.
// The loop will check the library's shelf for the specific genre that was passed in (using bracket notation).
// At each iteration, it will check to see if the title in that genre's array matches the title of the book being passed in.
// If it matches, it will store that title name into a variable.
// Then it will get the index of the matched book and splice (remove) it.
// After all the above has happened, the function will check to see if the title of the book being stored in the variable matches the name of the book being passed in. If it does, this means there was a match, and the message that it has been checked out will be returned.
// If it does not match, meaning undefined (no match) === bookName (TODO: ASK!! <-- would this be the output?), then it will return the message that there are no copies at the library available.
function checkoutBook(library, bookName, genreName) {
  for (var i = 0; i < library.shelves[genreName].length; i++) {
    if (library.shelves[genreName][i].title === `${bookName}`) {
      var matchedBookTitle = library.shelves[genreName][i].title;
      library.shelves[genreName].splice(
        [library.shelves[genreName].indexOf(library.shelves[genreName][i])],
        1
      );
    }
  }
  if (matchedBookTitle === bookName) {
    return `You have now checked out ${bookName} from the ${library.name}.`;
  } else {
    return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}.`;
  }
}

// this function will take in three arguments - the library object, the name of a book, and the genre of that book.
// It will loop through the library's shelves for the genre being passed in (using bracket notation), and if there is a match with the title being passed in, and the title of a book existing in the array for that genre, it will get the index of that title, and splice (remove) it.
// It will then return the message that it has been checked out
// otherwise it will return the message that there are currently no copies of the book available.

// TODO: ASK!! WHY DOESN'T THIS WORK? The else statement returns 'undefined' error
// function checkoutBook(library, bookName, genreName) {
//   for (var i = 0; i < library.shelves[genreName].length; i++) {
//     if (library.shelves[genreName][i].title === `${bookName}`) {
//       library.shelves[genreName].splice(
//         [library.shelves[genreName].indexOf(library.shelves[genreName][i])],
//         1
//       );
//       return `You have now checked out ${bookName} from the ${library.name}.`;
//     } else {
//       return `Sorry, there are currently no copies of ${bookName} available at the ${library.Name}.`;
//     }
//   }
// }

// REFACTORED FUNCTION
// This function will take in two arguments, a library object, and a genre.
// First it will check to see if there was a genre being passed in, if not (undefined), it will store the length of each shelf in the object and store that number in a variable.
// Then it will return a message with that number count.
// If there is a genre being passed in, then the function will get the number (length) of items in that specific genre's shelf (using bracket notation), and then return a message with taht count.

function takeStock(libraryObj, genre) {
  if (genre === undefined) {
    var genreCountTotal =
      libraryObj.shelves.fantasy.length +
      libraryObj.shelves.fiction.length +
      libraryObj.shelves.nonFiction.length;
    return `There are a total of ${genreCountTotal} books at the ${libraryObj.name}.`;
  } else {
    var genreCount = libraryObj.shelves[genre].length;
    return `There are a total of ${genreCount} ${genre} books at the ${libraryObj.name}.`;
  }
}

// PRE-REFACTORED FUNCTION
// This function will take in two arguments, a library object, and a genre.
// First it will check to see if there was a genre being passed in, if not (undefined), it will store the length of each shelf in the object and store that number in a variable.
// Then it will return a message with that number count.
// If there is a genre name being passed in, then it will loop through the shelf for that specific genre, and store the count in a variable, and return a message with the number of books in that genre's array.

// function takeStock(libraryObj, genre) {
//   if (genre === undefined) {
//     var genreCountTotal =
//       libraryObj.shelves.fantasy.length +
//       libraryObj.shelves.fiction.length +
//       libraryObj.shelves.nonFiction.length;
//     return `There are a total of ${genreCountTotal} books at the ${libraryObj.name}.`;
//   } else
//     for (var i = 0; i < libraryObj.shelves[genre].length; i++) {
//       var genreCount = libraryObj.shelves[genre].length;
//     }
//   return `There are a total of ${genreCount} ${genre} books at the ${libraryObj.name}.`;
// }

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock,
};

// function checkoutBook(libraryObj, title, genre) {
//   console.log(libraryObj);
//   console.log(title);
//   console.log(genre);
//   console.log(libraryObj.shelves);
// }
