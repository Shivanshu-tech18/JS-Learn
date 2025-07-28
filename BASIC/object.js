
const mySym=Symbol("Symbol ")
const mySym1=Symbol("world")
const user={
    name:"shivanshu",
    age:23,
    mySym:"hello",
    [mySym1]:"Happy",
    location:"kanpur",
    email:"ajfdljafl@gmail.com"

}
console.log(user.age)
console.log(user.email)
console.log(user.location)

console.log(user.mySym)
console.log(typeof user.mySym)
console.log(user[mySym1])
console.log(typeof user[mySym1])

// change values
user.age=25
console.log(user.age)
console.log(user)
