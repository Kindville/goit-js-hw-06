

    const inputEl = document.querySelector('#validation-input');

    inputEl.addEventListener('blur', onCheckBlur);


    function onCheckBlur(event) {
        const lengthEl = event.currentTarget.value.length;

        if (lengthEl === Number(inputEl.dataset.length)) {
            inputEl.classList.add('valid');
            inputEl.classList.remove('invalid');
        } else {
            inputEl.classList.remove('valid');
            inputEl.classList.add('invalid');
        }       
    }
