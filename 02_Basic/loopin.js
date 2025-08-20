const arr=[1,2,3,4,5,6]
for (const element of arr) {
    // console.log(element)
}
// Maps
const map=new Map()
map.set("IN","INDIA")
map.set('USA',"United Stated Of America")
map.set('USSR',"The Union of Soviet Socialist Republic")

for(const [key,value] of map)
{
    // console.log(key,' :- ',value)
} 
// objects are not iterable by forof loop

const myobject={
    'name':'Shivanshu',
    'age':'20',
    'language':'hindi'
}
// for in loop
for (const key in myobject) {
    // console.log(key,myobject[key])
    
    }
const arr2=['a','b','c','d']
for (const key in arr2){
    // console.log(key)
    // console.log(arr2[key])
}
const coding=["js","python","cpp","c","java"]
// coding.forEach(function(val){
//     console.log(val)
// })

// coding.forEach(element => {
//     console.log(element)
// });

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

// array of objects

const mycoding=[
    {
        languageName:"JavaScript",
        filename:'js'
    }
    ,
    {
        languageName:'python',
        filename:'py'
    },
    {
        languageName:'programming with c',
        filename:'c'
    }
]
mycoding.forEach((item)=>{
    console.log(item.languageName,item.filename)
})