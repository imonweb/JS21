 
const cars = ['honda', 'toyota', 'bmw'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

cars.forEach(function(car){
  console.log(car);
})

const users = [
  {id: 1, name: 'john'},
  {id: 2, name: 'jane'},
  {id: 3, name: 'jack'}
];

const ids = users.map(function(user){
  return user.id;
})

console.log(ids);