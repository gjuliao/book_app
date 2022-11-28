const titleId = document.getElementById("title");
const authorId = document.getElementById("author");
const bookContainer = document.getElementById("book_container");
const addButton = document.getElementById("form_btn");
const formBook = document.getElementById("book_form");



class Book {
    
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    
}
/*
function Book (title, author) {
    this.title = title;
    this.author = author;
}
*/


function addBook(){

        let title = titleId.value;
        let author = authorId.value;

        let newBook = new Book(title, author);

        Library.addBooks(newBook);
}