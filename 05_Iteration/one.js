// for loop
 for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        //console.log("5 is the best number");
    }
    // console.log(element)
    
 }

 for (let i =0 ; i <=10; i++) {
    //console.log(`outer: ${i}`)
   for (let j = 0; j < 10; j++) {
    //console.log(`inner value:${j}`)
    //console.log(`${i}*${j} = ${i*j}`)
   }

 }

 let myArr=["flash","batman","superman"]

 for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element)
    
 }

 //break and continue keyword

 for (let index = 1; index <=20; index++) {
    const element = index;
    if(index==5){
        console.log("5 detected")
        break
    }
    console.log(element)
    
 }


 for (let index = 1; index <=20; index++) {
    const element = index;
    if(index==5){
        console.log("5 detected")
        continue
    }
    console.log(element)
    
 }