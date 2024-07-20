//reduce

const mynum=[1,2,3]
// const mytotal = mynum.reduce( function(acc,cuurval){
//     console.log(`acc:${acc} and cuurval:${cuurval}`)
//     return acc+cuurval
// },0)

const mytotal=mynum.reduce((acc,curval)=>(acc+curval),0 )
console.log(mytotal)

const shoppingcart=[
    {
        itemname :"js",
        price:2999
    },

    {
        itemname :"python",
        price:3999
    },

    {
        itemname :"mobile development",
        price:5999
    },

    {
        itemname :"data scientist",
        price:12999
    }


]

const total=shoppingcart.reduce((acc,curval)=>(
   acc+curval.price
),0)

console.log(total)