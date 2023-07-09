// This function will take in two arguments, the book object, and an empty array.
// This function will check to see if the array has space for another review (less than 3).
// If it does, it will add the new book object to the start of the array.
// If there is no space (already 3 objects in the array), it will not add it.

function shelfBook(bookObj, array) {
  if (array.length < 3) {
    array.unshift(bookObj);
  }
}

// This function will take in two arguments, a title, and an array of objects (objects that describe the books)
// This function will run through the array of books, and at each iteration, check to see if the title being passed in matches the title in the existing object being looped through.
// If it does match, it means there is a repeat title, and so this function will find the index of that title, and then splice (remove) it.

function unshelfBook(title, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].title === `${title}`) {
      array.splice([array.indexOf(array[i])], 1);
    }
  }
}

// This function will take in an array of objects. The array contains objects for three books.
// This function will create an empty array.
// This function will loop throuh the array being passed in, it will then push the value of the title in each object for each iteration intoo the empty array.
// This returns an array.
// To return a string, the .join method is used to turn the array into a string joined by a comma, and a space between each value that was in the array.

function listTitles(array) {
  var arrayTitles = [];
  for (var i = 0; i < array.length; i++) {
    arrayTitles.push(array[i].title);
  }
  return arrayTitles.join(`, `);
}

// This function takes in two arguments, an object that contains information for various books, and a book title.
// This function will loop through the shelf object and if the title passed in matches a title exisitng in the shelf, it will store that book title into a variable.
// After the loop is done, if the name of the matched book matches the title being passed in, this means that the book exists in the system, it will return true, and if not (undefined = bookTitle <- TODO: ASK!! would this be the output?), it will return false (means the book does not exist)

function searchShelf(shelfObj, bookTitle) {
  for (var i = 0; i < shelfObj.length; i++) {
    if (shelfObj[i].title === `${bookTitle}`) {
      var nameMatchedBook = shelfObj[i].title;
    }
  }
  if (nameMatchedBook === bookTitle) {
    return true;
  } else {
    return false;
  }
}

// This function will take in two arguments, an object of books, and the title of a book.
// This function will loop through the object and if the title being passed in matches the title of an exisitng book in any of the iterations, it will return true, and if not, it will return false.

//TODO: ASK!! QUESTION WHY DOESN'T THIS ONE WORK?
// function searchShelf(shelf, bookTitle) {
//   for (var i = 0; i < shelf.length; i++) {
//     if (shelf[i].title === bookTitle) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// test function to see what is being passed in as arguments.
// function searchShelf(array, title) {
//   console.log(array);
//   console.log(title);
//   for (var i = 0; i < array.length; i++) {
//     if (array[i].title === title) {
//       console.log("yay");
//     } else {
//       console.log("nay");
//     }
//   }
// }
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
