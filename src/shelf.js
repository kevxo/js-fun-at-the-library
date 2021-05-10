function shelfBook(book, books) {
  if (books.length != 3) {
    books.unshift(book);
  }
}

function unshelfBook(title, books) {
  for (var i = 0; i < books.length; i++) {
    if (books[i].title === title) {
      books.splice(i, 1);
    }
  }
}


function listTitles(books){
  titles = [];

  for (var i = 0; i < books.length; ++i){
    titles.push(books[i].title)
  }

  return titles.join(', ');
}

function searchShelf(books, title){
 var titles = listTitles(books);

  if (titles.includes(title)){
    return true;
  } else {
    return false;
  }
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};