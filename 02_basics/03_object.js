// singleton
//Object.create
// object literals

const mysym = Symbol("key1");

const Jsuser = {
    name: "yash",
    age:24,
    [mysym]:"mykey1",
    location:"Ahmedabad",
    email:"yash@google.com",
    isLoggedin:false,
    lastLoginDays:["mon","sat"]
}
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser[mysym])

Jsuser.email ="yash@CHATGPT.com"
console.log(Jsuser)

//Object.freeze(Jsuser) // freeze is used to lock an array 

Jsuser.email="yash@microsoft.com"
console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello Js user")
}

Jsuser.greetingtwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

// console.log(Jsuser.greeting);
 console.log(Jsuser.greeting())
 console.log(Jsuser.greetingtwo())



