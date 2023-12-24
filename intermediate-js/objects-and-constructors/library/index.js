const myLibrary = [];

class Book {
    constructor(title, author, pages, read, dateStarted = 0, dateFinished = 0) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        // read values of progress are "read", "not read", "currently reading"
        this.read = read
        // should store date value type;
        this.dateStarted = dateStarted;
        this.dateFinished = dateFinished;
        this.info = () => console.log(`${title}`);
        // need id attribute
    }
}

myLibrary.push(new Book('the Idiot', 'Dostoevsky', 613, 'read'));
myLibrary.push(new Book('Crime and Punishment', 'Dostoevsky', 600, 'read'));

// submit button from form
const button = document.querySelector('button');

const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector("dialog + button")
const submitButton = document.querySelector("button#add-book");


addBookButton.addEventListener("click", () => dialog.showModal());



function addBook(book) {
    myLibrary.push(book);
    console.log(`book ${newBookObj} added`);
}

submitButton.addEventListener("click", () => {
    const title = document.querySelector('#title-input').value;
    const author = document.querySelector("#author-input").value;
    const book = new Book(title, author, 0, 'no');
    addBook(book);
});

function createBookElement() {
    const bookElement = document.createElement('div');
    return bookElement;
}


// remove book function
// builder pattern would be suitable for this problem?
function displayBooks() {
    // add books to HTML Display in their own Card
    const booksContainer  = document.querySelector('.book-shelf');
    for (let i = 0; i < myLibrary.length; i++) {
        createBookElement();
    }
    console.log(myLibrary);
}

displayBooks();
