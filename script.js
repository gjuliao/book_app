const titleId = document.getElementById("title");
const authorId = document.getElementById("author");
const bookContainer = document.getElementById("book_container");
const addButton = document.getElementById("form_btn");
const formBook = document.getElementById("book_form");

let library = JSON.parse(window.localStorage.getItem("newBook")); 

formBook.addEventListener("submit", (e) => {

    e.preventDefault();
    let id = Math.floor(Math.random() * 10000); 
    const newBook = new Book(id, title.value, author.value);
    library = [...library, newBook];
    displayBook();
    addStorage(library);
    title.value = "";
    author.value = "";

})

function Book (id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
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
    console.log(element);
    element.parentElement.remove();
    library.localStorage.removeItem(this);
    library = library.filter((i) => i.id != element.id);
    console.log(library);
    displayStorage();
    
}

/* Local Storage */

function addStorage(library){

    const bookData = {
        "bookTitle" : titleId.value,
        "bookAuthor" : authorId.value
    }
    
   let storage = localStorage.setItem("newBook", JSON.stringify(library));
   console.log(storage);
}


window.addEventListener("DOMContentLoaded", () => {
    displayBook();
})