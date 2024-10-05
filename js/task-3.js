const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
  title: document.querySelector('h1'),
};

refs.input.classList.add('task-3__input');
refs.title.classList.add('task-3__title');

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === '') {
    refs.output.textContent = 'Anonymous';
  } else {
    refs.output.textContent = event.currentTarget.value;
  }
}
