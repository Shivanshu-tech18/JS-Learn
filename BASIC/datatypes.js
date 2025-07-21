//Primitive
// String ,Number ,Boolean,BigInt ,null,undefined,Symbol

const score = 100;
const score1 = 100.25;

const islogged = false;
const temp = null

let userEmail;
const id = Symbol('123');
const id2 = Symbol('123');
console.log(id == id2);

//reference //non-primitives
// arrays ,function ,object

const hero = ["AJay", "Akshay", "Amir", "Shahrukh", "Salman"];
let myobj = {
    name: "Shivanshu",
    roll: 123,
    college: "PSIT",
}

const myfunction = function () {
    console.log("I am from function")
}

myfunction();