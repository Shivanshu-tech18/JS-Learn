const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=> num>4)
// console.log(newNums)

const bookstore=[
    {
        title:'History',
        author:"R.S sharma",
        year:1993
    },
    {
        title:'Geography',
        author:"Paul",
        year:  1995
    },
    {
        title:'History',
        author:"Bipin chandra sharma",
        year:1997
    }
];

const user=bookstore.filter((bk)=> bk.title==='History')
// console.log(user)

const myNum=[1,2,3,4,5,6,7]
// const newNum=myNum.map((num)=>{return num+10})
const newNum=myNum.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40) //chaining

// console.log(newNum)

const nums=[1,2,3,4,5]
// const mytotal=nums.reduce(function(accumulator,current)
// {
//     console.log(`accumulator: ${accumulator} and current value: ${current}`)
//     return accumulator+current
// },0)
const mytotal=nums.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal)
