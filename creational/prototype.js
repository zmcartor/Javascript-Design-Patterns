//Prototype pattern is easy in JS, because JS follows prototypical inheritance.
//A 'prototype' is a function or object that is executed in the context of the to-be-returned object when 'new' is invoked.

//our base prototype of a sandwich
var sandwich = {
  add_mayo: function() {console.log('spreading more mayo')},
  name: 'Generic Sandwich'
};

// Use Object.create to generate a new Sandwich. This will use the sandwich prototype for our new object
var my_lunch = Object.create( sandwich );
my_lunch.name = 'big sub sandwich';
