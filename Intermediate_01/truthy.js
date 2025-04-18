const userEmail = ""
if(userEmail) {
    console.log("Got the User Email")
} else {
    console.log("Don't have user email")
}

// Falsy Value
// false , 0 , -0 , BigInt 0n , "" , null , NaN , undefined
// Everything else is truthy values : "0" , 'false' , " " , [] Empty Object , function(){} //Empty function too

// To put a condition of returning false if object is empty :

const emptyObj = {}
if (Object.keys(emptyObj).length){
    console.log("Not empty")
} else {
    console.log("Not empty")
}

// NULLISH COALESCING OPERATOR (??): null undefined

let val1;
val1 = null ?? 10 //returns 10, if null is return from some function, we can put some flag value instead
val1 = undefined ?? 5 //returns 5

// TERNARY OPERATOR (?)

condition ? true : false

const icePrice = 10
icePrice > 5 ? console.log("yes") : console.log("no")