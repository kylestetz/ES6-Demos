/* jshint esnext: true */
var colors = require('colors');
console.log('spread-and-rest/simple.js'.gray);

// The spread operator can be used to gather into or concat
// an array. When we are using spread to destructure an
// array we can call it "gathering", whereas using it to
// combine sources can be called "spreading".

// REST PARAMETERS USING THE SPREAD OPERATOR

// Let's create a function that accepts any number of arguments.
// We'll say that the first argument— head— is mandatory, and all
// others— the rest— are optional. This is an example of
// destructuring (gathering), which is covered in more detail in
// the /destructuring examples.

// The ES5 way.
function es5HeadAndRest(head) {
  var rest = Array.prototype.slice.call(arguments);
  rest.shift();
  console.log(head + ',', rest);
}

// The ES6 way.
function es6HeadAndRest(head, ...rest) {
  console.log(head + ',', rest);
}

console.log('Argument Gathering'.red);
es5HeadAndRest(1,2,3,4,5);
es6HeadAndRest(1,2,3,4,5);

// USING SPREAD WITH ARRAYS

// Spread allows us to take one array and "spread it out" into
// another array. Imagine simply removing the array brackets
// from the contents of the variable being "spread."
console.log('Array Concatenation (Spreading)'.red);

var source  = [1, 2, 3, 4, 5];
var source2 = [6, 7, 8, 9];

// The ES5 way.
var es5dest = [0].concat(source);

// The ES6 way.
var es6dest = [0, ...source];
console.log(es5dest + ' === '.gray + es6dest);

// We can use it for each source array.
es6dest = [0, ...source, ...source2];
console.log(es6dest);