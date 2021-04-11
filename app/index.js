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
