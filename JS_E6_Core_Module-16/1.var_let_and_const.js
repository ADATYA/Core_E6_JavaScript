//Scopes -> Global Scope, Function Scope, Block Scope

if (true) {
  let somthing = "Hello World-01"; // Global Scope
  var somthingElse = "Hello World-02"; // Global Scope
  const somthingNew = "Hello World-03"; // Global Scope

  console.log(somthing, somthingElse, somthingNew);
}

//===========================

//Function Scope

function myFunction() {
  let somthing = "Hello World-01"; // Global Scope
  var somthingElse = "Hello World-02"; // Global Scope
  const somthingNew = "Hello World-03"; // Global Scope
  console.log(somthingElse);
}

myFunction();

console.log(somthingElse);

/* 
| Feature             | `var`           | `let`             | `const`                         |
| ------------------- | --------------- | ----------------- | ------------------------------- |
| ES6?                | ❌ আগে থেকেই ছিল | ✅ ES6             | ✅ ES6                           |
| Reassign করা যায়?   | ✅               | ✅                 | ❌                               |
| Redeclare করা যায়?  | ✅               | ❌                 | ❌                               |
| Scope               | Function scope  | Block scope `{}`  | Block scope `{}`                |
| Modern JS-এ ব্যবহার | কম              | প্রয়োজন হলে       | ⭐ বেশি                          |
| সাধারণ ব্যবহার      | পুরোনো code     | পরিবর্তনশীল value | fixed/reassignment না করা value |
 */
//===========================

/* 
| Feature             | `var`          | `let`            | `const`          |
| ------------------- | -------------- | ---------------- | ---------------- |
| Reassign করা যায়?   | ✅ Yes          | ✅ Yes            | ❌ No             |
| Redeclare করা যায়?  | ✅ Yes          | ❌ No             | ❌ No             |
| Scope               | Function Scope | Block Scope `{}` | Block Scope `{}` |
| Modern JS-এ ব্যবহার | ⚠️ Avoid       | ✅ Use            | ⭐ Preferred      |
 */