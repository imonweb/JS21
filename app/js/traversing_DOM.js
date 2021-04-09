
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;


// Get child node
val = list.childNodes;
console.log(val);

/*  CREATING ELEMENTS */

// Create Element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add Id
li.id = 'new-item';

// Add Attribute
li.setAttribute('title', 'New Item');

/// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add Classsd
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fas fa-times"></i>';

//Append link to li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
 