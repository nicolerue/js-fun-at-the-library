function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: `${name}`,
    age: `${age}`,
    pronouns: `${pronouns}`,
  };
  return character;
}

function saveReview(review, array) {
  if (!array.includes(review)) {
    array.push(review);
  }
}

// function saveReview(review, array) {
//   var arrayOriginal = array.push(review);
//   var uniqueArray = [...new Set(arrayOriginal)];
//   return uniqueArray;
// }
// filter method?

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(title, character, genre, pages) {
  var book = {
    title: `${title}`,
    mainCharacter: `${character}`,
    genre: `${genre}`,
    pageCount: `${title.length * 20}`,
  };
  return book;
}

// function editBook(title, character, genre) {
//   var book = {
//     title: `${title}`,
//     mainCharacter: `${character}`,
//     genre: `${genre}`,
//     pageCount: `${title.length * 20 * 0.75}`,
//   };
//   return book;
// }

function editBook(obj) {
  obj.pageCount = obj.pageCount * 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};
