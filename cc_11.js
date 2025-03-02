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