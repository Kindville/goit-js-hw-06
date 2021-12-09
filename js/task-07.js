    const inputEl = document.querySelector('#font-size-control');
    const spanEl = document.querySelector('#text');
    
    inputEl.oninput = () =>
       spanEl.style.fontSize = `${inputEl.value}px`;


// inputEl.addEventListener('oninput', onChangeRange);

// function onChangeRange() {
//     spanEl.style.fontSize = `${inputEl.value}px`;
// }