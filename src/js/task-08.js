
const form = document.querySelector('.login-form');
let message = '';
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    console.log(formElements);

    const email = formElements.email.value;
    const password = formElements.password.value;
    console.log(email, password);

    const formData = { email, password };
    console.log(formData);

    if (email === '' || password === '') {
        message = alert('Enter your data!');
    } else {
        console.log(formData);
        form.reset();
    }
}
