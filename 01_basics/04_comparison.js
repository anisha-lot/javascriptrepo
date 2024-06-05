//compare always in same data type 
console.log("02"<1)
//  in this case "02" is a string then in process first 02 convert in nomber then it compare to the 1
// so o/p is false
console.log(null>0) //null us not greater then 0 because this is empty value o/p false
console.log(null==0) // null is not equal to 0
console.log(null>=0) // here null convert to a number 0 then is become true

// === use for check the equalitiy
// but it check the strictly it check there a data type of both is same
// eg 
console.log("2"=== 2)
// it not check the number becuse one is string and ine is number
console.log("2" == 2)
// here it change the "2" in a number then compare is done