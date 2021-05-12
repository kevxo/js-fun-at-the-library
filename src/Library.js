function createLibrary(name){
 var obj = {
   name: name,
   shelves: {
     fantasy: [],
     fiction: [],
     nonFiction: []
   }
 }

 return obj;
}

function addBook(library, book){
  for (const [key, value] of Object.entries(library.shelves)){
    if (key === book.genre){
      library.shelves[key].push(book);
    }
  }
}

function checkoutBook(library, bookName, genre) {
  for (const [key, books] of Object.entries(library.shelves)){
    if (books.length === 1 && key === genre){
      for ( var i = 0; i < books.length; i++){

        if (books[i].title === bookName){
          books.splice(i, 1);
          return `You have now checked out ${bookName} from the ${library.name}`;
        }
      }
    }
  }
  return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};