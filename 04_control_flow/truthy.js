const useremail ="yp@1411.ai"

if(useremail){
    console.log("user got email")

} else{
    console.log("dont have user email")
}

// falsy values
// false,0,-0, BigInt 0n,"",null,undefined,NaN

//truthy values
// "0","false"," ",[],{},function(){},

const emptyobj ={}

if(Object.keys(emptyobj).length===0){
    console.log("object is empty")
}else{
    console.log(emptyobj)
}
//Nullish coalescing operator(??):null,undefined

let val1;

// val1 =5??10
// console.log(val1)

// val1 = null??10
// console.log(val1)

// val1= undefined??15
0
val1= undefined??14??10
console.log(val1)


//***********ternaary operator***** */

// condition ? true: false:

const tea_price=10
 
tea_price <=20?console.log("less than 20" ): console.log("price grater than 20")