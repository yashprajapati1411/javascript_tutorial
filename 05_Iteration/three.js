// for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {

    console.log(num);
}

const greeting="hello world!"

for (const greet of greeting) {
    console.log(`each char is ${greet}`)
    
}

//Maps

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")

    //console.log(map)

    for (const [key,value] of map) {
        console.log(key,`:-`,value)
    }

    const myobj={
        'GAme1' : "NFS",
        'GAme2' : "counterstrike"
    }// object are not iterable in for of

    // for (const [game,value] of myobj) {
    //     console.log(game,value)
    // }