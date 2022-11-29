const titleId = document.getElementById("title");
const authorId = document.getElementById("author");
const bookContainer = document.getElementById("book_container");
const addButton = document.getElementById("form_btn");
const formBook = document.getElementById("book_form");

let library = {};

formBook.addEventListener("submit", (e) => {

    e.preventDefault();
    let id = Math.floor(Math.random() * 10000); 
    const newBook = new Book(id, title.value, author.value);
    library = [...library, newBook];
    addStorage(library);
    displayBook(library);
    title.value = "";
    author.value = "";
})

function Book (id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
}

function displayBook (library) {
  
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


/* Add Storage */

function addStorage(library){
   localStorage.setItem("newBook", JSON.stringify(library));
}

/* Remove Storage */
function removeElement(element){
    let books = JSON.parse(localStorage.getItem("newBook"));
    console.log(books);
    element.parentElement.remove();
    library = library.filter((i) => i.id != element.id);
    localStorage.removeItem("newBook");
  
}


window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("newBook")){
        displayBook(JSON.parse(localStorage.newBook));
    } else {
        console.log(" no library");
    }
})