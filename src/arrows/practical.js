/* jshint esnext: true */
var colors = require('colors');
console.log('arrows/practical.js'.gray);

// Arrow functions don't have their own scope.

var outerScope = this;

setTimeout( function() {
  console.log(this === outerScope);
}, 0);

setTimeout(() => {
  console.log(this === outerScope);
}, 0);