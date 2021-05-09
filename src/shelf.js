function shelfBook(book, books) {
  if (books.length != 3) {
    books.unshift(book);
  }
}


module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};