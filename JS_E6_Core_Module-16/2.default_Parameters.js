/* What is Default Parameters?
অবশ্যই। **Default Parameter** খুব সহজ একটা concept। ❤️

## 🔹 Default Parameter কী?

Function-এ কোনো **argument না দিলে**, parameter-এর জন্য আগে থেকেই একটি **default value** সেট করে রাখাকে **Default Parameter** বলে।

### সাধারণ Function

```js
function greet(name) {
    console.log(`Hello ${name}`);
}

greet();
```

Output:

```text
Hello undefined
```

কারণ আমরা `name`-এর কোনো value দিইনি।

---

## ✅ Default Parameter ব্যবহার করলে

```js
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();
```

Output:

```text
Hello Guest
```

এখানে:

```js
name = "Guest"
```

এটাই **Default Parameter**।

অর্থাৎ:

> **Argument না দিলে → default value ব্যবহার হবে।**

---

### কিন্তু argument দিলে?

```js
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet("Adi");
```

Output:

```text
Hello Adi
```

কারণ `"Adi"` দেওয়া হয়েছে, তাই `"Guest"` আর ব্যবহার হয়নি।

---

## 📌 সহজ Table

| Situation            | Result                    |
| -------------------- | ------------------------- |
| Argument দেওয়া হয়নি  | Default value ব্যবহার হবে |
| Argument দেওয়া হয়েছে | দেওয়া value ব্যবহার হবে   |

```js
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();       // Hello Guest
greet("Adi");  // Hello Adi
```

### 🧠 এক লাইনে মনে রাখো

**Default Parameter = Function-এর parameter-এর backup/default value।**

এটা **ES6-এর একটি feature** এবং modern JavaScript-এ খুব commonly ব্যবহৃত হয়।
 */
// ===========================================================================
function easy(name){
    return `hello ${name}`;
}

console.log(easy("Bikrom Adatya Roy"));
console.log(easy());

///========================================
function busy(name = "Guest"){
    return `hello ${name}`;
}

console.log(busy("Polovi Rani Singha"));
console.log(busy());

//=========================================

function makeCoffee(suger = 1){
    return "Coffee made for you " + "with " + suger + " spoons of sugar " + "and lots of Love";
}

console.log(makeCoffee(3));
console.log(makeCoffee());
//=========================================

function createUser(name = "Guest", age = 18, country = "Bangladesh"){
    return `User created: ${name}, Age: ${age}, Country: ${country}`;
}

console.log(createUser());
console.log(createUser("Adi", 25, "India"));