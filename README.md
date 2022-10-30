# goit-js-hw-06

## TASK #1

HTML містить список категорій `ul#categories`.

Напиши скрипт, який:

1. Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто елементів `li.item`.
2. Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку
   елемента (тегу `<h2>`) і кількість елементів в категорії (усіх `<li>`, вкладених в нього).

## TASK #2

HTML містить порожній список `ul#ingredients`.

Напиши скрипт, який для кожного елемента масиву `ingredients`:

1. Створить окремий елемент `<li>`. Обов'язково використовуй метод `document.createElement()`.
2. Додасть назву інгредієнта як його текстовий вміст. Додасть елементу клас `item`. Після чого,
   вставить усі `<li>` за одну операцію у список `ul#ingredients`.

## TASK #3

Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список
`ul.gallery`. Використовуй масив об'єктів images для створення елементів `<img>`, вкладених в
`<li>`. Для створення розмітки використовуй шаблонні рядки і метод `insertAdjacentHTML()`. Усі
елементи галереї повинні додаватися в DOM за одну операцію додавання. Додай мінімальне оформлення
галереї флексбоксами або грідами через CSS класи.

## TASK #4

Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення
на одиницю.

- Створи змінну `counterValue`, в якій буде зберігатися поточне значення лічильника та ініціалізуй
  її значенням 0.
- Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
- Оновлюй інтерфейс новим значенням змінної counterValue.

## TASK #5

Напиши скрипт, який під час набору тексту в інпуті `input#name-input` (подія `input`), підставляє
його поточне значення в `span#name-output`. Якщо інпут порожній, у спані повинен відображатися рядок
`"Anonymous"`

## TASK #6

Напиши скрипт, який під час втрати фокусу на інпуті (подія `blur`), перевіряє його вміст щодо
правильної кількості введених символів.

- Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті `data-length`. Якщо
  введена правильна кількість символів, то `border` інпуту стає зеленим, якщо неправильна
  кількість - червоним. Для додавання стилів використовуй CSS-класи `valid` і `invalid`, які ми вже
  додані у вихідні файли завдання.

## TASK #7

Напиши скрипт, який реагує на зміну значення `input#font-size-control` (подія `input`) і змінює
інлайн-стиль `span#text`, оновлюючи властивість `font-size`. В результаті, перетягуючи повзунок,
буде змінюватися розмір тексту.

## TASK #8

Напиши скрипт управління формою логіна:

1. Обробка відправлення форми `form.login-form` повинна відбуватися відповідно до події `submit`.
2. Під час відправлення форми сторінка не повинна перезавантажуватися.
3. Якщо у формі є незаповнені поля, виводь `alert` з попередженням про те, що всі поля повинні бути
   заповнені.
4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля
   буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми
   використовуй властивість `elements`.
5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом `reset`.

## TASK #9

Напиши скрипт, який змінює кольори фону елемента `<body>` через інлайн-стиль по кліку на
`button.change-color` і виводить значення кольору в `span.color`.

## TASK #10

Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в
`input` і натискає кнопку "Створити", після чого рендериться колекція. Натисненням на кнопку
"Очистити", колекція елементів очищається.

Створи функцію `createBoxes(amount)`, яка приймає один параметр - число. Функція створює стільки
`<div>`, скільки вказано в `amount` і додає їх у `div#boxes`. Розміри найпершого `<div>` - 30px на
30px. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px. Всі елементи
повинні мати випадковий колір фону у форматі HEX.
