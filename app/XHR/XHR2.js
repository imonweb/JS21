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


// JSON

document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

 

function loadCustomer(e){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>UD: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>

        </ul>
      `;
      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}


// Load Customers

function loadCustomers(e){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);
      
      let output = '';
      customers.forEach(function(customer){

        output += `
          <ul>
            <li>UD: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
  
          </ul>
        `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}

