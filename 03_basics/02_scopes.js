//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="yash"

    function two(){
        const website="github"
        console.log(username);

    }
    // console.log(website)
 two()

}


// one()

if(true){
    const username="yash"
    if(username==="yash"){

        const website=" github"
        // console.log(username+website);
    }
    // console.log(website) //throws error 
 
}
// console.log(username)

//**************************INTERESTING***************** */

console.log(addone(5))

function addone(num){
    return num+1
}


console.log(addtwo(5))// it w*ill throw an error
const addtwo = function(num){
      return num +2

}

