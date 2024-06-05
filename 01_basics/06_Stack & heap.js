// stack and heap memory
// stack use in primitive  and heap use in non-primitive

let Name1 = "anisha"  //o/p is anisha this is orignal 
let name2 = Name1
name2= "lot"  
console.log(name2)

// non-primitive Heap

let userOne= {
    email:"anisha@gmail.com",
    name:"anishalot",
}
let userTwo = userOne 
 userTwo.email ="anisha@gmail.com"

 console.log(userOne.email)
 console.log(userTwo.email)