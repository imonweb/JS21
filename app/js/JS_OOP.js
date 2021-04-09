 // JS_OOP Concepts

 /*  Contructors & the 'this' keyword */

 // Person constructor
 function Person(name, dob){
  this,name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const imon = new Person('Imon', '6-12-1988');
console.log(imon.calculateAge());



// Prototype Inheritance

// Person constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName
}

// Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

// console.log(person1.greeting())

// Customer constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person protoype method
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-555', 'standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}
  Welcome to our Company`;
}

console.log(customer1.greeting())


// Using Object.create
const personPrototypes = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }

}

const person1 = Object.create(personPrototypes);
person1.firstName = 'Jane';
person1.lastName = 'Doe';
person1.age = 20;

person1.getsMarried('Bravo');

console.log(person1.greeting());

const person2 = Object.create(personPrototypes,{
  firstName: {value: 'John'},
  lastName: {value: 'Doe'},
  age: {value: 22}
});

console.log(person2.greeting());


