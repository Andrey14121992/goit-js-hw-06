const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const productContainer = document.querySelector(`#ingredients`);

for (let i = 0; i < ingredients.length; i += 1) {
  const itemsLi = document.createElement('li');
  itemsLi.innerHTML = ingredients[i];
  itemsLi.classList.add('item');
productContainer.append(itemsLi);
}