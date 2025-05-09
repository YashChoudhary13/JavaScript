//Operators

let value = 3
let negValue = -value
console.log(negValue) // -3

console.log(2+2) // Addition
console.log(2-2) // Subtraction
console.log(2*2) // Multiplication
console.log(2**2) // Exponent
console.log(2/2) // Divide
console.log(2%2) // Modulus => Finds out remainder

let str1 = "Hello"
let str2 = " Yash"
let str3 = str1 + str2 //Hello Yash

console.log("1" + 2) // 12
console.log(1 + "2") // 3
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //5

console.log(3 + 4 * 5 % 3) // Bad code, use parantheses ( ) to be more clear

console.log(+true) // 1
console.log(+"") // 0. NOT RECOMMENDED TO DO THESE 25-26
//console.log(true+) // syntax ERROR

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  //Bad readability

let gameCounter = 100 
gameCounter++ //postfix, Value increments after
++gameCounter //prefix, Value increments before 
console.log(gameCounter)

// ************************************ COMPARISIONS ************************************

console.log(2 > 1) // Greater than
console.log(2 >= 1) // Greater than equal to
console.log(2 < 1) // Lesser than
console.log(2 == 1) // Comparision if they both are equal, single equal would be assigning the value while double equal compares
console.log(2 != 1) // Comparision if they are not equal to each other

console.log("2" > 1) // true
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
// AVOID SUCH CONVERSIONS AND COMPARISIONS
// Comparisions convert null to a Number, treating it as 0


// === strict check, data type are not converted
console.log("2" == 2) // true since data type of "2" got converted
console.log("2" === 2) // false since data type of "2" does not get converted in strict check

 