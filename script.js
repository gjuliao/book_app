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
    title.value = "";
    author.value = "";
    displayBook();
    addStorage(library);

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
    let storage = localStorage.setItem("newBook", JSON.stringify(library));
    return storage;
}

function displayStorage(library){
    let storageObj = window.localStorage.getItem(library)
    storageObj = JSON.parse(storageObj);
    return storageObj;
}

window.addEventListener("load", displayStorage(library));



/*
function saveData(){
    let bookTitle = titleId.value;
    let authorName = authorId.value;

    const bookRef = {
        "bookAuthor" : authorName,
        "bookTitle" : bookTitle
    }


    window.localStorage.setItem("bookRef", JSON.stringify(bookRef));
}

*/

/*

window.addEventListener("load", () => {

    
    let libraryObj = window.localStorage.getItem("library");

    libraryObj = JSON.parse(libraryObj);
    
})

*/