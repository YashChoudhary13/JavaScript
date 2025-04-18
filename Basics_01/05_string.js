// Two types of memory :
// Stack => Used for Primitive, you get copy of variable
// Heap => Used for Non Primitive, you get reference

//STRINGS
// We can concatenate two strings using +
const name = "Yash"
const repoCount = 6
console.log(name + repoCount + "value") //Yash6value but this is not preferred in modern days
//Instead :
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`) //This is called string interpolation

const gameName = new String("The MEX")
// We can access all string methods in browser console, using console.log(gameName.__proto__)
console.log(gameName.length) //returns length of the string
console.log(gameName.toUpperCase()); //returns game name in upper case and original gamename does not change because of being in stack
console.log(gameName.charAt(2)) //returns t, the character at index 2
console.log(gameName.indexOf('t')) //returns the index of t, 2
console.log(gameName.substring(0,4)) //returns new string with character of gameName from index 0 to 3, 4 is not included.
console.log(gameName.slice(-8, 4))
const newStringOne = '      hitesh       '
console.log(newStringOne.trim())
const url = "https://yash.com/yash%20choudhary" //Browser converts space to %20 in URL Encoding
console.log(url.replace('%20', '-')) // returns "https://yash.com/yash-choudhary"
url.includes('yash') // returns true
console.log(gameName.split('-')) // returns an array of strings splitted based on '-'