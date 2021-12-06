const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

buttonEl.addEventListener('click', changeColor);
function changeColor() {
  bodyEl.style.backgroundColor =  getRandomHexColor();
  spanEl.textContent = color;
}
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 