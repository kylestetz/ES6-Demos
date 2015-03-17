/* jshint esnext: true */
var colors = require('colors');
console.log('destructuring/simple.js'.gray);

// Destructuring means extracting pieces of an array or object.
// A "destructuring assignment" is a variable assignment that
// uses destructuring to save parts of an object or array into
// new variables.

// As it's put in http://raganwald.com/2015/02/02/destructuring.html,
// it is a convenience more than anything else, but it enables
// a coding style "that resembles the data it consumes."

// ==================================================
// OBJECT DESTRUCTURING ASSIGNMENTS
console.log('Object Destructuring Assignments'.green);
// ==================================================

// We can assign multiple variables at once by
// using the new "destructuring assignment" feature.

var options = {
  name:  'Carl',
  color: 'red',
  location: {
    city: 'Vancouver'
  }
};

// The ES5 way.
var userName  = options.name,
    userColor = options.color
;

// The ES6 way.
var { name: userName, color: userColor } = options;

// If we want to create local versions of the variables
// without changing the variable names, it gets even shorter.
var { name, color } = options;
console.log('{ name, color }'.gray, '\n  ', name, color);

// We can create variables using nested properties as well.
// In this example `location` itself is not defined, only `city`.
var { name, color, location: { city } } = options;
console.log('{ name, color, location: { city } }'.gray, '\n  ', name, color, city);

// But what if the value doesn't exist in the object?
// We can set defaults.
var { name, color, nonexistant = 5 } = options;
console.log('{ name, color, nonexistant = 5 }'.gray, '\n  ', name, color, nonexistant);

// ==================================================
// ARRAY DESTRUCTURING ASSIGNMENTS
console.log('\nArray Destructuring Assignments'.green);
// ==================================================

// Similarly, we can extract values from an array by
// using array brackets in a left-hand assignment.

var values = [ 0, 1, 2, 3 ];

// The ES5 way.
var first  = values[0],
    second = values[1]
;

// The ES6 way.
var [ first, second ] = values;
console.log('[ first, second ]'.gray, '\n  ', first, second);

// We can skip some values by leaving empty space between commas.
var [ first, , third ] = values;
console.log('[ first, , third ]'.gray, '\n  ', first, third);

// We can use the `...` spread operator to collect the rest
// of an array past a certain point of interest.
// More on spread in the /spread section of the examples.

var [ first, ...rest ] = values;
console.log('[ first, rest ]'.gray, '\n  ', first, rest);

