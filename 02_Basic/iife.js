// Immediately Invoked Function Expressions(IIFE)
// It is used to remove global pollution problem
(function one()
{
    console.log("DB connected")
})();
(()=>{
    console.log("db from arrow function it needed to close the first iife function with semicolon otherwise it will not work")
})();
