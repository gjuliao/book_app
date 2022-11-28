const titleId = document.getElementById("title");
const authorId = document.getElementById("author");
const bookContainer = document.getElementById("book_container");
const addButton = document.getElementById("form_btn");
const formBook = document.getElementById("book_form");

let library = [];

formBook.addEventListener("submit", (e) => {

    e.preventDefault();
    let id = Math.floor(Math.random() * 10000); 
    const newBook = new Book(id, title.value, author.value);
    library = [...library, newBook];
    displayBook();
    addStorage(newBook);
    title.value = "";
    author.value = "";

})

class Book {
    constructor(id, title, author){
        this.id = id;
        this.title = title;
        this.author = author;
    }
}

function displayBook () {
  
    let data = library.map(book => {
        return `
        <div>
            <p>${book.title}</p>
            <p>${book.author}</p>
            <button id="${book.id}" onclick="removeElement(this)" class="delete">Remove</button>
        </div>`
    });
    bookContainer.innerHTML = data.join(" ");
}

function removeElement(element){
    element.parentElement.remove();
    library = library.filter((i) => i.id != element.id);
}

/* Local Storage */

function addStorage(library){

    const bookData = {
        "bookTitle" : titleId.value,
        "bookAuthor" : authorId.value
    }

    console.log(bookData);
    
   let storage = localStorage.setItem("bookData", JSON.stringify(library));
   console.log(storage);
}

function displayStorage(){
    let storage = localStorage.getItem("newBook") === null ? [] : JSON.parse(localStorage.getItem("newBook"));
    return storage;
}


window.addEventListener("DOMContentLoaded", () => {
    displayBook();
})