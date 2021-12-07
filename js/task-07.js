    const inputEl = document.querySelector('#font-size-control');
    const spanEl = document.querySelector('#text');

inputEl.addEventListener('click', onChangeRange);

function onChangeRange(event) {
    spanEl.style.fontSize = `${inputEl.value}px`;

}