const typeOfCategory = document.querySelectorAll(".item");

console.log(`Number of categories: ${typeOfCategory.length}`);

typeOfCategory.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});