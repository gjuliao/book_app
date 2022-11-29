const titleId = document.getElementById('title');
const authorId = document.getElementById('author');
const bookContainer = document.getElementById('book_container');
const addButton = document.getElementById('form_btn');
const formBook = document.getElementById('book_form');

let library = [];

formBook.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 10000);
  const newBook = new Book(id, this.title.value, this.author.value);
  library = [...library, newBook];
  addStorage(library);
  displayBook(library);
  this.title.value = '';
  this.author.value = '';
});

function Book(id, title, author) {
  this.id = id;
  this.title = title;
  this.author = author;
}

function displayBook(library) {
  const data = library.map((book) => `
        <div>
            <p>${book.title}</p>
            <p>${book.author}</p>
            <button id="${book.id}" onclick="removeElement(this)" class="delete">Remove</button>
        </div><hr>`);
  bookContainer.innerHTML = data.join(' ');
}

/* Add Storage */

function addStorage(library) {
  localStorage.setItem('newBook', JSON.stringify(library));
}

/* Remove Storage */
function removeElement(element) {
  library = library.filter((i) => i.id != element.id);
  addStorage(library);
  displayBook(library);
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('newBook')) {
    displayBook(JSON.parse(localStorage.newBook));
  }
});