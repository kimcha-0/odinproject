function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => console.log(`${title} by ${author}, ${pages} pages, ${read}`);
}

const Hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, 'read');
console.log(Hobbit.info());
