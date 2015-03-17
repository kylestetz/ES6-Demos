/* jshint esnext: true */
var colors = require('colors');
console.log('arrows/simple.js'.gray);

// Let's make a simple map that adds 1 to each item.
var evens = [0, 2, 4, 6, 8];


// ### The ES5 way.
var odds = evens.map( function(x) {
  return x + 1;
});

console.log('odds the ES5 way:'.gray, odds);



// ### The ES6 way.
odds = evens.map( x => x + 1 );

console.log('odds the ES6 way:'.gray, odds);


// ### How it works...

// Arrows are shorthand for using inline functions.
// With one argument you can skip the parentheses.

var operation = function(x) { return x + 1; };
    operation =         (x) =>       x + 1;
    operation =          x  =>       x + 1;

// Use parentheses for multiple arguments.

var add = function(a, b) { return a + b; };
    add =         (a, b) =>       a + b;

// Use brackets to incorporate multiple expressions,
// or to span multiple lines. `return` is necessary
// with brackets if you are returning a value.

var subtract = (a, b) => {
  console.log('subtracting', a, 'and', b);
  return a - b;
};