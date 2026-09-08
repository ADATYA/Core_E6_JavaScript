const user = {
    name : "Bikrom",
    "My-address": "Somthing area location",
    age: 25,
    somthing :[20,30,40,50,60,70,80,90],
    company: {
        name:"Programming Hero",
        address:{
            location: "Mirpur DOSH",
            street: "something area",

        } 
    }
}
const key = "company";
console.log(user.age, user.somthing , user.company);
console.log(user[key]);
console.log(user.key); //undefined.
console.log(user["My-address"]); //ei type er variable represent korte [] bracket use kora hoy.



//================
//Optional Chening
//================

console.log(user.company.name, user.company.address.location);


const user2 = {
    name : "Piyas",
    "My-address": "Somthing area location",
    age: 25,
    somthing :[20,30,40,50,60,70,80,90],
    // company: {
    //     name:"Programming Hero",
    //     address:{
    //         location: "Mirpur DOSH",
    //         street: "something area",

    //     }
    // },
}; 



//================
//Optional Chening
//================

console.log(user2.company); //undefined
console.log(user2?.company?.name, user2?.company?.address?.location);


// Object Loop
//for in loop
for (let element in user){
    console.log(element);   //of use korle error asche 

}

const keys = Object.keys(user)
const values = Object.values(user)
const entries = Object.entries(user)

for(let elem of keys){
    console.log(elem,user[elem]);
}

for(let elem of entries){
    console[key, values] = elem;
    console.log(key, values);
}