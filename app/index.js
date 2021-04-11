import "./css/styles.css";
/* import Dates from './Dates' */
 import './js/playground.js';
//  import './customer.json';
 

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


// AJAX

document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  const number = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true)

  xhr.onload = function(){
    if(this.status === 200){
      const response = this.responseText;
      console.log(response)
    }
  }

  xhr.send();

  e.preventDefault();
}

 
