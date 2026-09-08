/* 🔹 Arrow Function কী?

Arrow Function হলো JavaScript-এ function লেখার একটি shorter এবং cleaner syntax, যা ES6-এ introduced হয়েছে।

সহজভাবে: Arrow Function = Function লেখার ছোট ও আধুনিক পদ্ধতি।

| বিষয়            | Traditional Function    | Arrow Function                 |
| --------------- | ----------------------- | ------------------------------ |
| Syntax          | `function` keyword লাগে | `=>` ব্যবহার হয়                |
| Code            | তুলনামূলক বড়            | ছোট ও clean                    |
| ES6             | ❌                       | ✅                              |
| ব্যবহার         | সাধারণ function         | Modern JS ও React-এ খুব common |
| `this` behavior | নিজের `this` থাকতে পারে | নিজের `this` তৈরি করে না       |

🧠 Basic Structure: 
(parameters) => {
    // function body
}
 */


// function sayGreat(name){
//     return `Hello ${name}, Have a great day!`;
// }

//Single statement return fuction na diye same line e diye dite pari.
const sayGreat = (name) =>`Hello ${name}, Good day!`;//implicit return function, jodi single statement thake tahole return keyword use kora lage na. 

console.log(sayGreat("Bikrom Roy"));

const sumFirstThenMultiplyByThree = (x,y) =>{
    const sum = x+y;
    const result = sum*3;
    return result;
};
console.log(sumFirstThenMultiplyByThree(10,20));

const sayHello = () => "Hello JavaScript";

console.log(sayHello());