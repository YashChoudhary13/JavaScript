// Conversion
let score = "33"
console.log(typeof score)
//OR
console.log(typeof (score)) //can write it as a method too

let valueInNumber = Number(score) //Datatype here are used in capital because they are being used as classes, and this way we can convert one datatype to another
console.log(typeof valueInNumber) // If score was "33ab" the output would still be a number but if you console log its value, you would get NaN which means Not a Number
/* 
    Conversion to number
    null => 0
    undefined => NaN
    true => 1
    false => 0
    "string" => NaN
    "33" => 33
    Conversion to Boolean
    1 => true
    0 => false
    "" => false
    "string" => true
*/
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 33  // number
let stringSomeNumber = String(someNumber)
console.log(typeof stringSomeNumber) //string
