import "./styles.css";
/* import Dates from './Dates' */
 import './playground.js';

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