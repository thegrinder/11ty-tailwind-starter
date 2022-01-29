import u from 'umbrellajs';

window.addEventListener('DOMContentLoaded', () => {
  var fruits = ['Apple', 'Banana'];
  var list = u('<ul>').append((fruit) => `<li>${fruit}</li>`, fruits);
  u('body').append(list);
});
