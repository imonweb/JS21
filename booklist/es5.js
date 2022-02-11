// Book Constructor
function Book(title, author, isbn){
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book){
	// console.log(book);
	const list = document.getElementById('book-list');
	// create tr element
	const row = document.createElement('tr');
	// insert cols
	row.innerHTML = `
	<td>${book.title}</td>
	<td>${book.author}</td>
	<td>${book.isbn}</td>
	<td><a href="#" class="delete">X</a></td>
	`;

	list.appendChild(row);

	console.log(row);
}

// Show Alert 
UI.prototype.showAlert = function(message, className){
	// Create div
	const div = document.createElement('div');
	// Add classes
	div.className = `alert ${className}`;
	// Add text
	div.appendChild(document.createTextNode(message));
	// Get parent
	const container = document.querySelector('.container');
	// Get form
	const form = document.querySelector('#book-form');
	// Insert alert
	container.insertBefore(div, form);

	// Timeout after 3 secs
	setTimeout(function(){
		document.querySelector('.alert').remove();
	}, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target){
	if(target.className === 'delete'){
		target.parentElement.parentElement.remove();
	}
}


// clear fields
UI.prototype.clearFields = function() {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
}

// Event Listener
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

		// console.log(ui);

		// Validate
		if(title == '' || author === '' || isbn === ''){
			// alert('Failed');
			ui.showAlert('Please fill in all fields', 'error');
		} else {
			// Add book to list
			ui.addBookToList(book);

			// showw success
			ui.showAlert('Book Added!', 'success');

			// clear fields 
			ui.clearFields();
		}

		

		// console.log(book);
		e.preventDefault();
		}
	)

	// Event Listener for Delete

	document.getElementById('book-list').addEventListener('click', function(e){
		// console.log(123);

		// Instantiate UI
		const ui = new UI();

		// Delete book
		ui.deleteBook(e.target);

		// show message
		ui.showAlert('Book Removed!', 'success');

		e.preventDefault();
	})