/* jshint esnext: true */
var colors = require('colors');
console.log('objects/simple.js'.gray);

// Objects have new shorthands and conveniences in ES6.

var log      = console.log;
var myName   = 'Carl';
var propName = 'name';

var object = {
  // shorthand for `log: log`
  log,
  // shorthand for `method: function() {}`
  method() {
    console.log('This is a function of `object`.');
  },
  // create a property with a dynamic field.
  [propName]: myName
};

console.log(object);