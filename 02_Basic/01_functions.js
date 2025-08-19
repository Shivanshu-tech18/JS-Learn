/*
function sayName()
{
    console.log("Shivanshu Tripathi");
}
sayName();

function addNumbers(number1,number2)
{
    console.log(number1+number2);
}
addNumbers(4,5);

function loginuser(username)
{
    if(username=== undefined) 
        {
            console.log("Please enter a user name");
            return;
        }
    return `${username} just logged in.` ;
}

console.log(loginuser("Shivanshu"))
console.log(loginuser())

function calculateCartPrice(...num1)
{
    return num1;
}
console.log(calculateCartPrice(100));
// for unknown number of arguments given
console.log(calculateCartPrice(200,400,500)); // it will be store in the form of array because of triple dot with parameter name 

*/

// functions scope

if(true)
{

    let a=10;
    const b=20;
    var c=30;
}

// console.log(a) //it will not come outside to if
// console.log(b) // similiarily to let it will not come
console.log(c) // it will print outside of if

console.log(one(5))
function one(num)  // can be called before initilization
{
    return num+1;
}
// console.log(addtwo(5)) // can't be called before initilization 
const addtwo=function(num)
{
    return num+2
}