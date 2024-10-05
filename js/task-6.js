const refs = {
  controls: document.getElementById('controls'),
  input: document.querySelector('input'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxes: document.getElementById('boxes'),
};

refs.controls.classList.add('task-6__controls');
refs.input.classList.add('task-6__input');
refs.createButton.classList.add('task-6__create-button');
refs.destroyButton.classList.add('task-6__destroy-button');
refs.boxes.classList.add('task-6__boxes');

function createBoxes(amount) {
  refs.boxes.innerHTML = '';
  const boxColors = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxColors.push(box);
  }
  refs.boxes.append(...boxColors);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
}

refs.destroyButton.addEventListener('click', destroyBoxes);

refs.createButton.addEventListener('click', () => {
  const amount = parseInt(refs.input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    refs.input.value = '';
  }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
