function shelfBook(obj, array) {
  if (array.length < 3) {
    array.unshift(obj);
  }
}

// function unshelfBook(title, array) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i].title === `${title}`) {
//       console.log(array.indexOf(array[i]));
//     }
//   }
// }

function unshelfBook(title, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].title === `${title}`) {
      array.splice([array.indexOf(array[i])], 1);
    }
  }
}

function listTitles(array) {
  var arrayTitles = [];
  for (var i = 0; i < array.length; i++) {
    arrayTitles.push(array[i].title);
  }
  return arrayTitles.join(`, `);
}

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

function searchShelf(shelf, bookTitle) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === `${bookTitle}`) {
      var name1 = shelf[i].title;
    }
  }
  if (name1 === bookTitle) {
    return true;
  } else {
    return false;
  }
}

//WHY DOESN'T THIS ONE WORK?
// function searchShelf(shelf, bookTitle) {
//   for (var i = 0; i < shelf.length; i++) {
//     if (shelf[i].title === bookTitle) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
