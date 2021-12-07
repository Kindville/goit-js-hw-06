let valueEl = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');

const  minusButton = document.querySelector('#counter').firstElementChild;
const plusButton = document.querySelector('#counter').lastElementChild;

minusButton.addEventListener('click', () => {
    valueEl -= 1;
  counterValue.innerText = valueEl;

});
plusButton.addEventListener('click', () => {
    valueEl += 1;
  counterValue.innerText = valueEl;

});
