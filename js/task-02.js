const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElement = document.querySelector("#ingredients"); // шукаємо елемент по ID

const listOfIngridients = ingredients.map((ingredient) => { //трансофрмуємо масив
  const ingridientElements = document.createElement("li"); // створюємо li
  ingridientElements.textContent = ingredient; // додаємо назву 
  ingridientElements.classList.add("item"); // додаємо клас item
  return ingridientElements;
});

ingredientsElement.append(...listOfIngridients) // ренедрім трансформований масив у html