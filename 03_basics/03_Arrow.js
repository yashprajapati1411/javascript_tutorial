const user ={
    username:"yash",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username ="yash"
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username ="yash"
//     console.log(this.username)
// }

// const chai = () => {
//     let username ="yash"
//     console.log(this)
// }

// chai()

           //*** arrow function******/

// const addtwonum = (num1,num2)=> {
//     return num1+num2
// }
// console.log(addtwonum(3,4))

//*************implicitively add number ***** */

const addtwonum = (num1,num2)=> ( num1+num2 )

console.log(addtwonum(3,4))