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

submitButton.addEventListener("click", () => {
    dialog.closeModal();
    event.preventDefault();
});

function addBook() {

    const newBookObj = new Book(title, author, pages, read);
    myLibrary.push(newBookObj);
    console.log(`book ${newBookObj} added`);
}



// remove book function
// builder pattern would be suitable for this problem?
function displayBooks() {
    // add books to HTML Display in their own Card
    const booksContainer  = document.querySelector('.book-shelf');
    for (let i = 0; i < myLibrary.length; i++) {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-card';
        bookElement.id = i;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove Book';
        deleteButton.addEventListener("click", () => {
            console.log('remove');
            delete myLibrary[i];
        });
        bookElement.appendChild(deleteButton);
        booksContainer.appendChild(bookElement);
    }
    console.log(myLibrary);
}

displayBooks();
