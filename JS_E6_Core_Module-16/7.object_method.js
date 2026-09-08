//Object methodes = Keys, values, entries , delete, seal, freeze

const user = {
    name:"Bikrom Roy",
    age: 25,
    id:213,
}

const keys = Object.keys(user)
const values = Object.values(user)
const entries = Object.entries(user)

for(let elem of keys){
    console.log(elem, user[elem])

}

console.log(keys,values);
console.log(entries);

for(let elem1 of entries){
    const[key, value] = elem1
    console.log(key,value);
}

//===============
//Delete Method

delete user.age;
console.log(user);

//Seal & freeze

const bankAccount = {
    accountNumber: "1234",
    balance: 5000
}

Object.seal(bankAccount)
delete bankAccount.balance // delete kora jay nah seal method e
bankAccount.balance = 7000; //add kote day
bankAccount.nomineeName = "Someone";
console.log(bankAccount);

//freeze

const birthCerificate = {
    name: "Bikrom",
    dob: "1-3-1999",
    number:"123455789",
}
Object.freeze(birthCerificate)

delete birthCerificate.name;
birthCerificate.number = "123455667";
birthCerificate.new = "Test-Case",

console.log(birthCerificate);