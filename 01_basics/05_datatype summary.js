// datatype diiferentiate  on the two bases 1 how to store datatype in memory 2how to access that
// primitive data type is callback value means if you copy that datatype the orignal datatype is not copied
// string ,number, boolean,null,undefind,symbol,BigInt=for big number or any scientific number
// null is not a 0 it is empty 
// undefind means you declare a varible but not give the value to that variable
// but it reserve that variable 

// symbol
const id = Symbol('anisha')
const AnotherId = Symbol('anisha')
// console.log(id)
// console.log(AnotherId)
console.log(id === AnotherId)
// symbol is unique data type if you declare that the same value but they are treat as different
// symbol is immutable

// BigInt 
let BigNumber = 15356673222332478n //this is bigInt data type

// Refrence type (non-primitive type)
// object
// Array
// function


// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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