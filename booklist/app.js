// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI(){

  UI.prototype.addBookToList = function(book){
    // console.log(book);
  }

}

// Add Book To List 
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');

  console.log(row);
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', 
  function(e){
    // get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value
    
    // console.log(title, author, isbn);

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // Add book to list
    ui.addBookToList(book);


  e.preventDefault();
});