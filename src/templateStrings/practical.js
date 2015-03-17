/* jshint esnext: true */
var colors = require('colors');
console.log('templateStrings/practical.js'.gray);

// We can render bits of markup using literals.
function render(name, age) {
  return `
  <div class="person">
    <div class="name">${name}</div>
    <div class="age">${age}</div>
  </div>
  `;
}

console.log( render('Carl', 30) );