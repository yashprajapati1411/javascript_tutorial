const marvelhero =["thor","ironman","spidarman"]
const dchero =["superman","flash","batman"]

marvelhero.push(dchero)

// console.log(marvelhero)

// const allhero = marvelhero.concat(dchero)
// console.log(allhero)


//spread operator

const allnewheros = [...marvelhero,...dchero]
// console.log(allnewheros);

const anotherArr =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_usable_arr = anotherArr.flat(Infinity)
console.log(real_usable_arr)


console.log(Array.isArray("yash"))
console.log(Array.from("yash"))


 
console.log(Array.from({name:"yash"}))  // important from interview perspective (returns empty array as not defined whether we want keys or values) 

let score1=100
let score2=200
let score3=300
console.log(typeof score1)

console.log(Array.of(score1,score2,score3))