// for each 

const coding=["js","rubby","java","python"]

// coding.forEach( function (item){
//  console.log(item);
// })

coding.forEach( (val) => {
    console.log(val);
} )

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)
// })


const mycoding=[
    {
        languagename:"javascript",
        filename:"js"
    },

    {
        languagename:"java",
        filename:"java"
    },

    {
        languagename:"python",
        filename:"py"
    }
]

mycoding.forEach( (item)=>{
 console.log(item.languagename)
})