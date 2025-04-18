//Data Types
"use strict" ; //treat all JS code as newer version, although automatically nowadays everything runs in strict mode but it is a good syntax to write.
//alert("hello"); // Creates a pop up in browser, there is a different syntax to use alert in node js
console.log(3 + 3); console.log("Yash") //Not a good way, fucks up code readability, FOCUS ON CODE READABILITY
let name = "yash" //string
let age = "21" //number / int
let isLockedIn = true //Boolean

// PRIMITIVE / CALL BY VALUE => CHANGES ARE DONE IN COPY
// number
// bigInt => 732836837461328746198736e
// string => ""
// boolean => true/false
// null => standalone value, representation of empty value, typeof null is object, some people say it as language error
// undefined => Value not defined, typeof undefined is undefined, MEMORY ALLOCATED
// symbol => unique

// NON PRIMITIVE / REFERENCE TYPE
// object => { name: "yash"
//             age : 21    }
// Arrays => const heroes = ["shaktiman" , "naagraj" , "doga"]
// Functions : const myFunction = function(){ console.log("Hello world") }. typeof => Object Function, output is function

console.log(typeof 21) //tells the data type of variable