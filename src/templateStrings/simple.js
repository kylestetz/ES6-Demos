/* jshint esnext: true */
var colors = require('colors');
console.log('templateStrings/simple.js'.gray);

// Template strings allow you to embed variables in strings
// without using string addition.

var name = 'Carl';

// The ES5 way.
console.log( 'Hello my name is ' + name );

// The ES6 way.
console.log( `Hello my name is ${name}` );

// The ${} is called a Template Literal. It can run any kind of javascript.
console.log( `The result of 4 + 2 is ${ 4 + 2 }` );
console.log( `Any kind of javascript will do: ${ new String('hello') } ` );

// Template strings can be multiline.
console.log(`This is a
multiline string using
a template literal.`);

