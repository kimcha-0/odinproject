const myLibrary = [];

// Book object constructor
function Book(title, author, pages, read, progress = 0, dateStarted = 0, dateFinished = 0) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.progress = progress;
    this.read = read

    // should store date value type;
    this.dateStarted = dateStarted;
    this.dateFinished = dateFinished;

    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

// const theHobbit = Book('the Hobbit', 'J.R.R. Tolkien', 295, 'read');
// console.log(theHobbit.info());
const table = document.querySelector('table');

function createTableEntry() {
    const rowEntry = document.createElement('tr');
    return rowEntry;
}

function addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// remove book function

function displayBooks() {
    // add books to HTML Display in their own Card
    for (let i = 0; i < myLibrary.length; i++) {
        
        
    }
}

const button = document.selectQuery("#addbook");
// eventlistener to add book to book array
