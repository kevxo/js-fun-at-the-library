class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, morning = false){

    if (morning == true){
      return `Good morning, ${name}!`
    } else{
      return `Hello, ${name}!`
    }
  }

  findBook(bookName){
    var fantasyBooks = this.library.shelves.fantasy

    for (var i = 0; i < fantasyBooks.length; i++) {
      if ( fantasyBooks[i].title == bookName){
        fantasyBooks.splice(i, 1)
        return `Yes, we have ${bookName}`
      }
    }
    return `Sorry, we do not have ${bookName}`
  }

  calculateLateFee(days) {
    return Math.round(0.25 * days)
  }
}

module.exports = Librarian;