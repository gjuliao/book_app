/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */

const titleId = document.getElementById('title');
const authorId = document.getElementById('author');
const bookContainer = document.getElementById('book_container');
const addButton = document.getElementById('form_btn');
const formBook = document.getElementById('book_form');


class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}


class Collection {
  constructor() {
    this.library = [];
  }

  
  addBook() {
    const id = Math.floor(Math.random() * 10000);
    const newBook = new Book(id, titleId.value, authorId.value);
    this.library.push(newBook);
    this.addStorage(this.library);
    displayBook(this.library);
  }
  
  /* Add Storage */
  addStorage(library) {
    localStorage.setItem('newBook', JSON.stringify(library));
  }
  
  /* Remove Storage */
  /* eslint-disable eqeqeq */
  removeElement(element) {
  this.library = this.library.filter((i) => i.id != element.id);
  this.addStorage(this.library);
  displayBook(this.library);
}
}

const col = new Collection();


function displayBook(library) {
  const data = library.map((book) => `
        <div>
            <p>${book.title}</p> 
            <p>${book.author}</p>
            <button id="${book.id}" onclick="col.removeElement(this)" class="delete">Remove</button>
        </div><hr>`);
  bookContainer.innerHTML = data.join('');
}


formBook.addEventListener('submit', (e) => {
  e.preventDefault();
  col.addBook()
  console.log('HelLo')
  this.title.value = '';
  this.author.value = '';
});


  window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('newBook')) {
      displayBook(JSON.parse(localStorage.newBook));
    }
  });