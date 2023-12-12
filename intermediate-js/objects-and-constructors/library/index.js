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

myLibrary.push(Book('the Idiot', 'Dostoevsky', 613, 'read'));
myLibrary.push(Book('Crime and Punishment', 'Dostoevsky', 600, 'read'));

// submit button from form
const button = document.querySelector('button');
button.addEventListener("click", (title, author, pages, read) => {
    const newBookObj = new Book(title, author, pages, read);
    myLibrary.push(newBookObj);
    console.log(`book ${newBookObj} added`);
});


// remove book function
// builder pattern would be suitable for this problem?
function displayBooks() {
    // add books to HTML Display in their own Card
    // const booksContainer  = document.querySelector('.book-shelf');
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(typeof myLibrary[i]);
    }
}

displayBooks();
