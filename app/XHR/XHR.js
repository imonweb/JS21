
/* XHR */
/*  
html
<button id="button">Get Data</button>
<div id="output"></div>
*/
/*  
  HTTP Statuses
  200: OK
  403: Forbidden
  404: Not Found
*/

/*  
  readyState Values
  0: request not iniliazed
  1: server connection established
  2: request received
  3: processing request
  4: request finished and response is ready
*/
const load = document.getElementById('button');
load.addEventListener('click', loadData);

function loadData(){
  console.log(1);
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState)

  // Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState)
  }

  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState)
    if(this.status === 200){
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`
    }
  }

  /*  old syntax
      xhr.onreadystatechange = function(){
      console.log('READYSTATE', xhr.readyState)
      if(this.sstatus === 200 && this.readyState === 4){
      console.log(this.responseText)
    }
  }
  */

  xhr.oneerror = function(){
    console.log('Request error...');
  }

  xhr.send();
}
