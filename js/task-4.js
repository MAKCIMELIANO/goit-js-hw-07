const refs = {
  form: document.querySelector('.login-form'),
  label: document.querySelectorAll('label'),
  input: document.querySelectorAll('input'),
  button: document.querySelector('button'),
};

refs.label.forEach(function (label) {
  label.classList.add('task-4__label');
});

refs.input.forEach(function (input) {
  input.classList.add('task-4__input');
});

refs.button.classList.add('task-4__button');

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    const data = { email: email.value.trim(), password: password.value.trim() };
    console.log(data);
    event.currentTarget.reset();
  }
}
