import "../css/styles.css";
/* import Dates from './Dates' */
 import '../js/playground.js';

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

console.log('hey');
 
 const today = new Date();

const h2 = document.createElement('h2');
const el = h2.innerHTML = "welcome";
 const say = document.write('heeelloo');

/*window.onload = addtext();*/
/*
 console.log(el + 'today is' + today);
 function addText(){
   const par = document.querySelector('ext');
   par.innerHTML = 'Paragraph added';
  }
 addText();
 */