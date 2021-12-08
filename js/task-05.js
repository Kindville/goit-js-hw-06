let inputNameEl = document.querySelector('#name-input');
let outputNameEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', (event) => {

  if (inputNameEl.value === '') {
    outputNameEl.innerHTML = 'Anonymous';
  } else {
    outputNameEl.innerHTML = inputNameEl.value;
  }

});
