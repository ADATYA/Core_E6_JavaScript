/* | বিষয়                   | **Spread Operator (`...`)**                            | **Rest Operator (`...`)**                   |
| ---------------------- | ------------------------------------------------------ | ------------------------------------------- |
| কী?                    | একটি collection-এর elements **ছড়িয়ে দেয় / expand করে** | একাধিক values **একত্র করে / collect করে**   |
| মূল কাজ                | Data **বের করে ছড়িয়ে দেওয়া**                           | Data **সংগ্রহ করে এক জায়গায় রাখা**          |
| কোথায় বেশি ব্যবহার হয়? | Array/Object copy, merge ইত্যাদিতে                     | Function parameters-এ                       |
| সহজে মনে রাখো          | **Spread = Expand**                                    | **Rest = Collect**                          |
| Example concept        | `[1,2]` → `1, 2` হিসেবে ছড়িয়ে দেয়                      | `1,2,3` → একটি collection হিসেবে সংগ্রহ করে |
| ES6?                   | ✅ হ্যাঁ                                                | ✅ হ্যাঁ                                     |
 */

// Spread Operator 
let numbers = [1, 2, 3,4,5,6,7];
console.log(numbers);

console.log(...numbers); // Spread Operator

//===========================================================================
// MAX and MIN of an array using Spread Operator...

let maxNumbers = Math.max(100,200,300,400,500,600,700);
console.log(maxNumbers);


let minNumbers = Math.min(100,200,300,400,500,600,700);
console.log(minNumbers);

let numbers2 = numbers;  //numbers e kono value change korle numbers2 teo change hobe karon eta reference copy

numbers.push(3700);
console.log(numbers2);

let numbers3 = {...numbers}; //numbers e kono value change korle numbers3 teo change hobe na karon eta value copy

numbers.push(3700);
console.log(numbers3);



let students = {
    name: "Adi",
    age: 25,
}

let students2 = {...students,gpa: "3.70"}; //students e kono value change korle students2 teo change hobe na karon eta value copy
students.somthing = "Hello jonogon";
console.log(students2);


//===========================================================================
// Rest Operator
function sum (a,b,c, ...restNumbers){
    console.log(restNumbers, "restNumbers =>");
    let sum =0;
    for(let numbers of restNumbers){      //Focus on this line, vv importent..
        sum+=numbers;
    }
    return a+b+c+sum;
}

console.log(sum(10,20,30,40,50,60,70,80,90,100));;