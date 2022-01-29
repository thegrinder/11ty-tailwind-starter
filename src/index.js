const u = require('umbrellajs');

window.addEventListener('DOMContentLoaded', () => {
  var fruits = ['apple', 'banana'];
  var list = u('<ul>').append((fruit) => `<li>${fruit}</li>`, fruits);
  u('body').append(list);
});
