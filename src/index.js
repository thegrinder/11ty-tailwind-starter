import u from 'umbrellajs';

window.addEventListener('DOMContentLoaded', () => {
  var fruits = ['Strawberry', 'Banana'];
  var list = u('<ul>').append((fruit) => `<li>${fruit}</li>`, fruits);
  u('body').append(list);
});
