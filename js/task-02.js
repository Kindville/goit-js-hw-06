const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients')
const list = ingredients.reduce((str, item) => str+ `<li> ${item}</li>`, '');

ulEl.innerHTML = list;

// const liEl = document.createElement('li');
// console.log(liEl);
// liEl.textContent = 'Potatoes';

// const liElSecond = document.createElement('li');
// console.log(liElSecond);
// liElSecond.textContent = 'Mushrooms';

// const liElThird = document.createElement('li');
// console.log(liElThird);
// liElThird.textContent = 'Garlic';

// const liElFourth = document.createElement('li');
// console.log(liElFourth);
// liElFourth.textContent = 'Tomatos';

// const liElFifth = document.createElement('li');
// console.log(liElFifth);
// liElFifth.textContent = 'Herbs';

// const liElSixth = document.createElement('li');
// console.log(liElSixth);
// liElSixth.textContent = 'Condiments';

// list.append(liEl, liElSecond, liElThird, liElFourth, liElFifth, liElSixth);

