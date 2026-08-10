<img width="1200" height="675" alt="image" src="https://github.com/user-attachments/assets/7789f6d5-f88c-4b27-b822-53ca522b8c90" />
# ⚡ JavaScript ES6+ Modern Reference & Exercises

A comprehensive guide to Modern JavaScript (ES6+) featuring core concepts, clean code patterns, and practical hands-on exercises.

---

## 📋 Table of Contents
- [1. Let & Const (Block Scoping)](#1-let--const-block-scoping)
- [2. Arrow Functions](#2-arrow-functions)
- [3. Template Literals](#3-template-literals)
- [4. Destructuring Assignment](#4-destructuring-assignment)
- [5. Spread & Rest Operators](#5-spread--rest-operators)
- [6. Array Methods (map, filter, reduce)](#6-array-methods-map-filter-reduce)
- [7. Promises & Async/Await](#7-promises--asyncawait)
- [8. ES6 Classes](#8-es6-classes)
- [9. Modules (Import / Export)](#9-modules-import--export)
- [🏋️ Coding Exercises & Challenges](#️-coding-exercises--challenges)

---

## 1. Let & Const (Block Scoping)
Before ES6, JavaScript only had `var`, which is function-scoped and hoisted. `let` and `const` introduce block scoping (`{}`).

* **`const`**: For values that shouldn't be reassigned.
* **`let`**: For variables that will change over time.

```javascript
// ❌ Old var behavior
var x = 10;
if (true) {
  var x = 20; // Overwrites global x!
}
console.log(x); // 20

// ✅ ES6 Block Scoping
let y = 10;
if (true) {
  let y = 20; // Separate inner variable
}
console.log(y); // 10

const API_KEY = "xyz123";
// API_KEY = "456"; // TypeError: Assignment to constant variable.

---
// ❌ Traditional Function
function add(a, b) {
  return a + b;
}

// ✅ Arrow Function (Implicit Return for single expression)
const add = (a, b) => a + b;

// Single parameter doesn't need parentheses
const square = x => x * x;

---
const user = "Alex";
const score = 95;

// ✅ String Interpolation
const message = `Hello ${user}, your score is ${score}/100!`;

// Multi-line Strings
const htmlTemplate = `
  <div class="user-card">
    <h2>${user}</h2>
  </div>
---
const user = "Alex";
const score = 95;

// ✅ String Interpolation
const message = `Hello ${user}, your score is ${score}/100!`;

// Multi-line Strings
const htmlTemplate = `
  <div class="user-card">
    <h2>${user}</h2>
  </div>
`;
---
const developer = {
  name: "Sarah",
  role: "Frontend Engineer",
  country: "Canada"
};

// Extract keys directly
const { name, role } = developer;
console.log(name); // Sarah

// Rename variable during destructuring
const { country: location } = developer;
console.log(location); // Canada

---
const rgb = [255, 128, 0];
const [red, green, blue] = rgb;

---
// Combining Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, ...arr1]; // [4, 5, 1, 2, 3]

// Copying & Updating Objects
const user = { name: "John", age: 30 };
const updatedUser = { ...user, age: 31, city: "NYC" };
const sumAll = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumAll(1, 2, 3, 4)); // 10

---
const numbers = [1, 2, 3, 4, 5];

// 1. map(): Transform every item
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// 2. filter(): Keep items that pass a condition
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// 3. reduce(): Accumulate into a single value
const total = numbers.reduce((sum, n) => sum + n, 0); // 15

---
// Promise Example
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded!"), 1000);
  });
};

// ✅ Async/Await Syntax
async function loadApp() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

---
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I am ${this.name}`;
  }
}

// Inheritance
class Employee extends Person {
  constructor(name, age, title) {
    super(name, age);
    this.title = title;
  }
}

const dev = new Employee("Alice", 28, "Developer");
console.log(dev.greet()); // Hi, I am Alice

----
// 📄 mathUtils.js - EXPORT
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// 📄 app.js - IMPORT
import { add, multiply } from './mathUtils.js';

---
