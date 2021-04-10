/* XHR */
const load = document.getElementById('button');
load.addEventListener('click', loadData);

function loadData(){
  console.log(1);
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.responseText);
    }
  }

  xhr.send();
}