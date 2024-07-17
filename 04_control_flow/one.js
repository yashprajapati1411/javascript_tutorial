// if

const isUserLoggedin = true
const temperature =50

// if (temperature<43){
//  console.log("temperature is less than 50")
// }
// else{
//     console.log("temperture is greater or equal to 50")
// }

// <,>,<=,>=,==,!=,===,!==

const score =200

if(score>100){
    const power="fly"
    console.log(`user power: ${power}`)
}
// console.log(`user power: ${power}`)  it will give error as power is defined in block scope and not in global scope 

const balance =800

// if(balance>500) console.log("test");

// if(balance<500){
//     console.log("less than")
// }
// else if(balance <750){
//     console.log("less than 750")
// }
// else if(balance <900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }


const UserLoggedin =true
const debitcard = true
const loggedinfromgoogle =false
const loggedinfromemail =true

if(UserLoggedin && debitcard){
    console.log("Allow to buy course")
}

if(loggedinfromemail || loggedinfromgoogle){
    console.log("user logged in")
}
