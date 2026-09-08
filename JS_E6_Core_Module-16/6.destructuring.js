//Destructureing for arrya

const num = [10,20,30,40,50,60]
//const ten = num[0];
//const twenty = num[1];
const [ten,,therty,,sixty] =num

console.log(ten,therty,sixty);


//Destructureing for object

const std= {
    name: "polovi",
    age:24,
    id:1082,
    marks:{
        physics: 87,
        math:67,
        biology:92,
        bangla:52,
    }
}

//const{age, name,id,marks} = std;
const bangla = std.marks.bangla
//console.log(name,age,id,bangla,marks);

const { age, name:fullname, marks:{physics, math, biology}} = std;
console.log(age, fullname, math, physics);