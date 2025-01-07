// Task-1: Array Filtering and Mapping

const peoples = [
  { name: "Arif", age: 30, gender: "male" },
  { name: "Nasifa", age: 25, gender: "female" },
  { name: "Fahim", age: 35, gender: "male" },
  { name: "Ayesha", age: 28, gender: "female" },
  { name: "Alamin", age: 40, gender: "male" },
];

const maleNames = peoples
  .filter((person) => person.gender === "male")
  .map((person) => person.name);

console.log(maleNames);

// task-2: Object Manipulation
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "Moby Dick", author: "Herman Melville", year: 1851 },
];

function getBookTitles(booksArray) {
  return booksArray.map((book) => book.title);
}

const bookTitles = getBookTitles(books);
console.log(bookTitles);

// task-3: Sorting Objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Focus", year: 2012 },
  { make: "Chevrolet", model: "Malibu", year: 2016 },
  { make: "Nissan", model: "Altima", year: 2019 },
];

function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);

// task-4: Find and Modify
function findAndModifyAge(peopleArray, personName, newAge) {
  const person = peopleArray.find((p) => p.name === personName);
  if (person) {
    person.age = newAge;
  }
  return peopleArray;
}

const updatedPeople = findAndModifyAge(peoples, "Arif", 36);
console.log(updatedPeople);

// task-5: Leap Year Checker
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

const year = 2024;
console.log(isLeapYear(year));
