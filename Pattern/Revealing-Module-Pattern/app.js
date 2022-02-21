// basic structure

/*
(function(){
  // Declare private vars and functions

  return {
    // Declare public var and functions
  }
})();
*/

// Revealing Module Pattern
const ItemCtrl = (function() {
  let data = [];

  function add(item){
    data.push(item);
    console.log('Item Added...');
  }

  function get(id){
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});