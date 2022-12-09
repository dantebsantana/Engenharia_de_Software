class Book {
    constructor(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class BookInfo {
    constructor(id, book) {
        this.id = id;
        this.book = book
    }
}

class Library {

    constructor() {
        this.books = [];
    }

    addBook(bookInfo) {
        this.books.push(bookInfo)
    }

    getBooks() {
        var books = this.books;
        return books
    }

    removeBookById(id) {
        for (var x in this.books) {
            if (this.books[x].id == id) {
                this.books.splice(x, 1);
                break;
            }
        }
    }

    getBookById(id) {
        for (var x in this.books) {
            if (this.books[x].id == id) {
                var book = this.books[x].book;
                return book;
            }
        }
    }

    updateBookById(id, title, description, author) {
        for (var x in this.books) {
            if (this.books[x].id == id) {
                if (title) {
                    this.books[x].book.title = title;
                }
                else if (description) {
                    this.books[x].book.description = description;
                }
                else if (author) {
                    this.books[x].book.author = author;
                }
                break;
            }
        }
    }

}