const categoriesList = document.getElementById('categories');
categoriesList.classList.add('task-1__categories');
const categories = categoriesList.children;

console.log(`Number of categories: ${categories.length}`);

Array.from(categories).forEach(category => {
  category.querySelector('ul').classList.add('task-1__list');
  category.querySelector('h2').classList.add('task-1__title');
  category
    .querySelectorAll('li')
    .forEach(el => el.classList.add('task-1__list-item'));
  const title = category.querySelector('h2').textContent;
  const items = category.querySelectorAll('li');

  console.log(`Category: ${title}`);
  console.log(`Elements: ${items.length - 1}`);
});
