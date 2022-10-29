const typeOfElements = document.querySelectorAll('.item'); // шукаємо всі елементи з класом item

console.log('Number of categories:', typeOfElements.length); // виводимо в консоль довжину typeOfElements

// var.1 - класична функція
[...typeOfElements].forEach(function (element) {
  const nameOfElements = element.querySelector('h2');
  const quantityOfElements = element.querySelectorAll('li');
  
  console.log("Category: ", nameOfElements.textContent);
  console.log("Elements: ", quantityOfElements.length);
});

// var.2 - стрілочна функція
// typeOfElements.forEach((element) => {
//   console.log(`Category: ${element.firstElementChild.textContent}`);
//   console.log(`Elements: ${element.lastElementChild.children.length}`);
// });