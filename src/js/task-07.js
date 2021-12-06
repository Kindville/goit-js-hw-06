    const inputEl = document.querySelector('#font-size-control');
    const spanEl = document.querySelector('#text');

inputEl.addEventListener('change', onChangeRange);

function onChangeRange(event) {
    spanEl.style.fontSize = `${inputEl.value}px`;

}