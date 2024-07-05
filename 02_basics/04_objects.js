// const tinderuser = new Object()
//above one is singleton object

const tinderuser ={}//non singleton user

tinderuser.id="123abc"
tinderuser.name="rohit"
tinderuser.isloggedin= false

// console.log(tinderuser)

const regularuser={
    email:"someAgmail.com",

    fullname: {
        userfullname:{
            firstname :"rohit",
            lastname:  "sharma"
        }
    }
}

// console.log(regularuser.fullname.userfullname)

const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"d"

}

// const obj3= {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 ={...obj1,...obj2}
console.log(obj3)


console.log(tinderuser)

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin'));