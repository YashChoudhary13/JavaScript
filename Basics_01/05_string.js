// Two types of memory :
// Stack => Used for Primitive, you get copy of variable
/* let a = 10;
let b = a;   // copy of value
b = 20;

console.log(a); // 10 (unchanged)
console.log(b); // 20
Each variable has its own independent value in the stack.
*/
// Heap => Used for Non Primitive, you get reference
/* let obj1 = { name: "Yash" };
let obj2 = obj1;   // reference, not copy

obj2.name = "Choudhary";

console.log(obj1.name); // "Choudhary" (affected!)
console.log(obj2.name); // "Choudhary"
Both obj1 and obj2 point to the same object in the heap.
*/

//STRINGS
// We can concatenate two strings using +
const name = "Yash"
const repoCount = 6
console.log(name + repoCount + "value") //Yash6value but this is not preferred in modern days
//Instead :
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`) //This is called string interpolation

const gameName = new String("The MEX") 
/*The new String() constructor creates a String object (a wrapper object around the primitive).
So instead of being a simple string, gameName is an object with extra properties and prototype methods. */
/* const str = "The MEX";
console.log(typeof str); // "string"
str is a primitive.
Primitives don’t have properties or methods by themselves (they’re just raw values).
console.log(str.toUpperCase());
👉 JavaScript automatically does auto-boxing:
Temporarily wraps str inside a new String("The MEX") object.
Calls the method from its prototype (String.prototype.toUpperCase).
Returns the result and throws away the temporary object.

That’s why "The MEX".toUpperCase() works even though "The MEX" is a primitive. */

// We can access all string methods in browser console, using console.log(gameName.__proto__)
console.log(gameName.length) //returns length of the string
console.log(gameName.toUpperCase()); //returns game name in upper case and original gamename does not change because of being in stack
console.log(gameName.charAt(2)) //returns t, the character at index 2
console.log(gameName.indexOf('t')) //returns the index of t, 2
console.log(gameName.substring(0,4)) //returns new string with character of gameName from index 0 to 3, 4 is not included.
console.log(gameName.slice(-8, 4))
/*
substring - If start > end, it swaps them (4, 0)  => (0,4) == Does not happen in slice, slice returns "" if start > end
substring turns negative values into 0. (-4, 5) => (0 , 5) == In Slice it counts from the end = (str.length - 4 , 5)
*/
const newStringOne = '      hitesh       '
console.log(newStringOne.trim())
const url = "https://yash.com/yash%20choudhary" //Browser converts space to %20 in URL Encoding
console.log(url.replace('%20', '-')) // returns "https://yash.com/yash-choudhary"
url.includes('yash') // returns true
console.log(gameName.split('-')) // returns an array of strings splitted based on '-'
