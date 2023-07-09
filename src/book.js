//This function will take in a title as a parameter.
//This function will use template literals to add in the word 'the' to the argument (title passed in)

function createTitle(title) {
  return `The ${title}`;
}

// This function will take in three parameters, the name, age, and pronouns.
// This function will create an object and return it

function buildMainCharacter(name, age, pronouns) {
  return {
    name: `${name}`,
    age: `${age}`,
    pronouns: `${pronouns}`,
  };
}

// This function will take in two arguments, the review, and an empty array
// This function will use an if block to check if the array includes a review that is being added.
//If the array includes the review, it will not push it into the array.
//If the array does not include the review, it will push it into the array
function saveReview(review, array) {
  if (!array.includes(review)) {
    array.push(review);
  }
}
// Experimenting with using new Set -- doesn't work yet. Hm.
// function saveReview(review, array) {
//   var arrayOriginal = array.push(review);
//   var uniqueArray = [...new Set(arrayOriginal)];
//   return uniqueArray;
// }
// filter method?

// This function will take in one argument, the book title.
// This function will calculate the character legnth of the book title and multiply it by 20.
// Note: the book title will be the title of the book passed in, plus an additional three characters to account for the modified tite with the added "the" word at the start.
// This function will multiply the character count by 20 and return that number
function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

// This function will take in three arguments, the title, character object, and the genre.
// This function will return an object that will include the data that was passed in as arguments into the object.
function writeBook(title, characterObj, genre) {
  return {
    title: `${title}`,
    mainCharacter: `${characterObj}`,
    genre: `${genre}`,
    pageCount: `${title.length * 20}`,
  };
}

// QUESTION: BOTH OF THESE FUNCTIONS, ABOVE AND BELOW WORK. BUT, WHICH ONE IS MORE CORRECT? CREATING A NEW VARIABLE IN A UNIT TEST FUNCTION? OR IS THAT NOT GREAT PRACTICE

// function writeBook(title, characterObj, genre) {
//   var book = {
//     title: `${title}`,
//     mainCharacter: `${characterObj}`,
//     genre: `${genre}`,
//     pageCount: `${title.length * 20}`,
//   };
//   return book;
// }

// This function will take in a book object as an argument.
// Using dot notation, the function will look at the page count for that object, and then multiply that number by 0.75 to get 3/4 of the original page count.
// Note: the page count is calculated by a previous function that takes the original title, adds the word "the", and multiplies that number by 20.

function editBook(obj) {
  obj.pageCount = obj.pageCount * 0.75;
}

// QUESTION: To confirm what this means... module.exports is an object that includes a set or properties that link the functions in this file to the test file?
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};
