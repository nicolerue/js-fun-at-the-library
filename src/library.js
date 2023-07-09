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

function addBook(libObj, bookObj) {
  var bookGenre = bookObj.genre;

  libObj.shelves[`${bookGenre}`].push(bookObj);
}

function checkoutBook(library, bookName, genreName) {
  for (var i = 0; i < library.shelves[genreName].length; i++) {
    if (library.shelves[genreName][i].title === `${bookName}`) {
      var nameBook = library.shelves[genreName][i].title;
      library.shelves[genreName].splice(
        [library.shelves[genreName].indexOf(library.shelves[genreName][i])],
        1
      );
    }
  }
  if (nameBook === bookName) {
    return `You have now checked out ${bookName} from the ${library.name}.`;
  } else {
    return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}.`;
  }
}

// WHY DOESN'T THIS WORK??
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

function takeStock(libraryObj, genre) {
  if (genre === undefined) {
    var genreCountTotal =
      libraryObj.shelves.fantasy.length +
      libraryObj.shelves.fiction.length +
      libraryObj.shelves.nonFiction.length;
    return `There are a total of ${genreCountTotal} books at the ${libraryObj.name}.`;
  } else
    for (var i = 0; i < libraryObj.shelves[genre].length; i++) {
      var genreCount = libraryObj.shelves[genre].length;
    }
  return `There are a total of ${genreCount} ${genre} books at the ${libraryObj.name}.`;
}

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
