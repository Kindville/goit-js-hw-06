let inputNameEl = document.querySelector('#name-input');
let outputNameEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', (event) => {
  outputNameEl.textContent = event.currentTarget.value;

  // inputNameEl === ' ' ? outputNameEl.textContent = 'Anonymous' : outputNameEl.textContent = event.currentTarget.value;
    
  
});