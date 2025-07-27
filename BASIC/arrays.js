// const myArr=[0,3,7,8,4,5];   // element can be any type

// console.log(myArr[3]);

// myArr.push(6)
// myArr.push(7)
//  console.log(myArr)
//  myArr.pop()
//  console.log(myArr)
//  console.log(myArr2);
//  const myArr2=new Array(1,2,3,4,5);

// myArr.unshift(12); 
// // console.log(myArr)
// myArr.shift();

// console.log(myArr.includes(7))//false
// console.log(myArr.indexOf(3));
// console.log(myArr.at(2))
  
// const newArr=myArr.join(); // makes a string
// console.log(myArr)
// console.log(newArr);
// console.log(typeof myArr+"   "+typeof newArr)

 //slice and splice
// slice does not include right value while splice does. splice  extract element and mamipulate array while slice not.
// console.log(myArr)
// const myn1= myArr.splice(1,4);
// console.log(myn1);
// console.log(myArr)
// const myn2= myArr.slice(1,4);
// console.log(myn2)
// console.log(myArr)


const hero=["ajay","amir","shahrukh","karan"]
const writer=["dinkar","pant","hari","arjun"]

// hero.push(writer)
// console.log(hero) 

// hero.pop()
// const all=hero.concat(writer)
// console.log(all)
const usingSpread=[...hero, ...writer] // in this any number of concatination can be done while by concat only 1 at a time

console.log(usingSpread)
console.log(Array.from("Shivanshu"))
console.log(Array.from({name:"Shivanshu"}))