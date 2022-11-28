const title = document.getElementById("title");
const author = document.getElementById("author");
const bookContainer = document.getElementById("book_container");
const addButton = document.getElementById("form_btn");


let bookList =[];

function Book (title, author) {
    this.title = title;
    this.author = author;
}

function addBook(Book){
    addButton.addEventListener("click", (e) => {
        const inputTitle = titleId.value; 
        const inputTitle = titleId.ariaValueMax;

        bookList.push(new Book);
    })
    
}