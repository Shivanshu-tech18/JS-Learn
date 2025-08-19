// This and arrow function
// this refers to present context
user={
    username:"Shivanshu",

    welcomeMessage:function()
    {
        console.log(`${this.username}, welcome to website`);
    }
}
// user.welcomeMessage();
// user.username="Rohit";
// user.welcomeMessage(); // after changing the name it will show the changed name 

console.log(this) // it will show empty but if u will execute it on browser it will show window(global object) and other object too.
// this only used and worked with object entities. 
function myfunc()
{
    console.log(this);
}
// myfunc()

const funct=()=>{
    let username="Shivanshu ";
    console.log(username)
}
// funct()

// const addTwo=(num1,num2)=>{
//     return num1+num2;           // Explicitly return 
// }
const addTwo=(num1,num2)=> num1+num2;         // Implicitly return            ---- useful to return  object
// if you give curly braces after parameter declaration then you will have to return from function otherwise no need to return keyword;
console.log(addTwo(5,6))
