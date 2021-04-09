import "./css/styles.css";
/* import Dates from './Dates' */
 import './js/playground.js';

//  import './js/DOM';

import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js'
/* require("materialize-css"); */

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab) 
dom.watch();

dom.i2svg()
if(module.hot){
  module.hot.accept();
}

/* Book List */

// Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI(){}

// Add Book to list
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // create tr element
  const row = document.createElement('tr');
  // insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a/></td>
  `;
  list.appendChild(row);
}
  // Show Alert
  UI.prototype.showAlert = function(message, className){
    // Create div
    const div = document.createElement('div');
    // Add Classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get Form
    const form = document.querySelector('#book-form');
    // Insert Alert
    container.insertBefore(div, form);
    // Timeout after 3 secs
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

  // console.log(row); // show tr

// Delete Book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

// Clear fields
UI.prototype.clearFileds = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}



// Event Listeners for Add Book
document.getElementById('book-form').addEventListener('submit', function(e){

  // Get form values
  console.log('test');
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instatiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === ''){
    ui.showAlert('Please fill in all fields.', 'error');
  } else {
     // Add book to List
     ui.addBookToList(book);

     // Show success
     ui.showAlert('Book Added!', 'success');

     // Clear fields
     ui.clearFileds();

  }

 
  e.preventDefault();
});



// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  // Instatiate UI
  const ui = new UI();
  // Delete Book
  ui.deleteBook(e.target);
  // Show message
  ui.showAlert('Book Removed!', 'success');
  e.preventDefault();
});
