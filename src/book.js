function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var obj = {
    name: name,
    age: age,
    pronouns: pronouns
  };

  return obj;
}

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review);
  }
  return reviews
}

function calculatePageCount(title){
  var pageCount = 0
  var alphabet  = 'abcdefghijklmnopqrstuvwxyz '.split('');
  var letters = title.toLowerCase().split('')

  for (var i = 0; i < letters.length; i++) {
    if (alphabet.includes(letters[i])) {
      pageCount += 20;
    }
  }

  return pageCount;
}

function writeBook(title, character, genre){

  var obj = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  };

  return obj;
}

function editBook(book){
  book.pageCount -= (book.pageCount / 4)
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}