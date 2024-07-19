const myobj ={
  js:"javascript",
  cpp:"c++",
  py: "python",
  swift:"swift by apple"

}
//for in loop
for (const key in myobj) {
    console.log(`${key} is the shortcut for ${myobj[key]}`)
}

const myarr=[1,2,3,4,5]
for (const key in myarr) {
    console.log(`${key} is the index number for ${myarr[key]}`)
}