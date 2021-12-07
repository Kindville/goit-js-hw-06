
const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    // console.log(formElements);

    const email = formElements.email.value;
    const password = formElements.password.value;
    // console.log(email, password);

    const formData = { email, password };

    if (email === '' || password === '') {
    return window.alert("Please, fill out all the fields!");
    }
    if (email && password){
        form.reset();
        console.log(formData);

    }
}
