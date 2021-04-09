const taks = document.querySelector('.clear-tasks').style.color= 'pink';

const items = document.querySelectorAll('ul.collection li.collection-item')

items.forEach(function(item, index){
 
 item.textContent = `${index}: Hello`;
})

console.log(items)


// Replace element

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));
// get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');
// Replace
cardAction.replaceChild(newHeading, oldHeading);

// remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

let val;

// Classes and Atrributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
console.log(link)
 
// Classes
val = link.className;
val = link.classList;

/*  Event Delegation and Evnt Bubbling */

// document.body.addEventListener('clic', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){

  // console.log(e.target);
 
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item')

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
 
}

/*  Set local storage item */

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;
  e.preventDefault();
  // console.log(123);
 
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
   tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('task saved');

  e.preventDefault();

});


const tasks = JSON.parse(localStorage.getItems('tasks'));

tasks.forEach(function(task){
  console.log(task);
});