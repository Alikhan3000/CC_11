//Task 1: Creating a Book Class

class Book {                                        //created a class with 2 string and 2 number variables
    constructor(title, author, isbn, copies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() {                                  //method that returns a formatted string of book details 
        return `Titile: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    }

    updateCopies(quantity){                         //method with 1 input that modifies available copies;  
        this.copies += quantity;                    //adds or substracts (if the number is negative) available copies 
    }
}


//test cases:
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


//Task 2: Creating a Borrower Class

class Borrower {                                        //created a class with a string and number variables and an array 
    constructor(name, borrowerId){
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    borrowBook(book){                                   //this method adds a book title to the array using .push
        this.borrowedBooks.push(book);
    }

    returnBook(book){                                   //this method removes the book from the array
        let instock;                                    //declared a variable to store the name of the book
        while ((instock = this.borrowedBooks.indexOf(book)) !== -1){      //used while loop to remove all the items with the matching book name 
            this.borrowedBooks.splice(instock, 1)       //this removes one item that has an occurence in the array from the borrowedBooks array
        }
    }

}

//test cases:

const borrower1 = new Borrower("Alice Johnson", 201);   //logged the output of the methods using test data
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []


//Task 3: Creating a Library Class

class Library {                                 //created a class with 2 arrays
    constructor(){
        this.books = [];
        this.borrowBook = [];
    }

    addBook(book){                              //this method adds a new book into the books array using .push
        this.books.push(book);
    }

    listBooks(){                                //this method logs all books' details by utilizing a getDetails method from book class
        this.books.forEach(book => console.log(book.getDetails()))
    }

}

//test cases:

const library = new Library();  
library.addBook(book1);         //added a book to the books array using addbook method 
library.listBooks();            //logged the output using the test data
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
