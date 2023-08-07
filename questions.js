const Book = {
  title: "Загальна Книга",
  author: "Анонім",
  pages: 0,

  read() {
    return `Ви читаєте "${this.title}" від ${this.author}`;
  },
};
// // 2. Наслідування від базового об'єкту Book

// /*
//  * Об'єкт: Novel
//  * Властивості та функції наслідуються від об'єкта Book
//  * Додаємо нову властивість
//  *  | Властивість | Значення |
//  *  |-------------|----------|
//  *  | genre       | "Новела" |
//  */

// Створюємо об'єкт Novel, наслідуємо властивості і функції від об'єкта Book
const Novel = Object.create(Book);

// Додаємо властивість genre
Novel.genre = "Новела";

// console.log("Завдання: 2 ==============================");

// // Виводимо в консоль Об'єкт: Novel
// console.log(Novel);

// // Виводимо в консоль прототип Об'єкту: Novel
// console.log(Object.getPrototypeOf(Novel));

// 3. Створення нового об'єкту та зміна його прототипу

/*
 * Об'єкт: Biography
 * Властивості:
 * --------------------------------------
 * | Властивість | Значення             |
 * |-------------|----------------------|
 * | title       | "Загальна Біографія" |
 * | author      | "Біограф"            |
 * | pages       | 200                  |
 */

// Створюємо об'єкт Biography
const Biography = {
  title: "Загальна Біографія",
  author: "Біограф",
  pages: 200,
};

// Змінемо прототип об'єкта Biography на Novel
Object.setPrototypeOf(Biography, Novel);

// console.log("Завдання: 3 ==============================");
// // Виводимо в консоль Об'єкт: Biography
// console.log(Biography);

// // Перевіримо чи являється Novel прототипом Biography та виведемо в консоль
// console.log(Novel.isPrototypeOf(Biography));

// 4. Інкапсуляція властивості та додання властивості
/*
 * Об'єкт: ScienceBook
 * Властивості та функції наслідуються від об'єкта Book
 *  * Також тут використовується інкапсуляція для створення властивості 'info', яка не може бути змінена напряму, а лише змінюється за допомогю гетера
 */

// Створюємо ScienceBook, наслідуємо властивості і функції від об'єкта Book
const ScienceBook = Object.create(Book);
Object.defineProperty(ScienceBook, "info", {
  configurable: false,

  // Додаємо властивість 'info' за допомогою Object.defineProperty
  // Зробимо щоб 'info' не можно було видалити або змінити, перевіримо і спробуємо присвоїти ій будь яке значення (це потрібно робити ззовні defineProperty),
  // Отримаємо помилку Cannot assign to read only property 'info' of object '#<Object>'
  //   console.log(ScienceBook.info);
  // ScienceBook.info = "story";
  // console.log(ScienceBook.info);
  // Далі створюємо сетер який присвоє властивості info значення яке отримує при виклику, помилку більше не отримуємо але при спробі вивести значення info отримуємо undefined
  get() {
    console.log(`Про книгу ${this.title}: ${this.info}`);
  },
  set(value) {
    Book.info = value;
  },
}),
  // Створимо гетер який буде нам повертати рядок: Про книгу <title>: <info>
  // тепер все виводить коректно

  // Заповнюємо об'єкт
  // | Властивість | Значення             |
  // |-------------|----------------------|
  // | title       | "Фізика 101"         |
  // | author      | "Альберт Ейнштейн"   |
  // | info        | написана в 1915 році |

  (ScienceBook.title = "Фізика 101"),
  (ScienceBook.author = "Альберт Ейнштейн"),
  (ScienceBook.info = "написана в 1915 році"),
  console.log("Завдання: 4 ==============================");
// Виводимо в консоль властивість info
console.log(ScienceBook.info);

// Виводимо в консоль налаштування властивости info
const propertyDescriptor = Object.getOwnPropertyDescriptor(ScienceBook, "info");
console.log(propertyDescriptor);
