const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElement = document.querySelector("#ingredients");

const listIngridients = ingredients.map((ingredient) => {
  const listIngridient = document.createElement("li");
  listIngridient.textContent = ingredient;
  listIngridient.classList.add("item");
  return listIngridient;
});

ingredientsElement.append(...listIngridients)
