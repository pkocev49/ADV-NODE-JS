// CREATING BOOK INTERFACE
interface Book {
  title: string;
  author: Author;
}
// CREATING AUTHOR INTERFACE
interface Author {
  firstName: string;
  lastName: string;
}
// CREATING ILIBRARY INTERFACE
interface ILibrary {
  addBook(title: string, author: Author): string;
  deleteBook(title: string): void;
  listAllBooks(): void;
}

// CLASS LIBRARY IMPLEMENTS Ilibrary
class Library implements ILibrary {
  private books: Book[] = [];
  addBook(title: string, author: Author): string {
    const newBook: Book = { title, author };
    this.books.push(newBook);
    console.log("/////////////////////////////");
    console.log(this.books);
    return "Book added";
  }
  deleteBook(title: string): void {
    this.books = this.books.filter((book) => book.title !== title);
  }
  listAllBooks(): void {
    console.log(this.books);
  }
}

const myLibrary = new Library();

myLibrary.addBook("The Title", {
  firstName: "F. Scott",
  lastName: "Fitzgerald",
});

myLibrary.addBook("Title One", { firstName: "Jasd", lastName: "ssasa" });
myLibrary.addBook("Title Two", { firstName: "Jasd", lastName: "ssasa" });
myLibrary.addBook("Title Three", { firstName: "Jasd", lastName: "ssasa" });
myLibrary.deleteBook("Title One");
console.log(myLibrary);
myLibrary.listAllBooks();
