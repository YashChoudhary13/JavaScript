//JavaScript Arrays are resizable and can contain a mix of different data types
//Arrays are zero-indexed
//JavaScript array-copy operations create shallow copies. Shallow Copies of an object is a copy which shares same reference
//Methods :
const myArr = [1,2,3,4,5]
const myArr2 = new Array(1,2,3,4)
myArr.push(6) //=> Adds 6 in myArr
myArr.pop() //=> Removes last element of myArr
myArr.unshift(0)  // Adds element in starting of the array. But this is not recommended since all other elements have to shift and it will cause load on pc
myArr.shift() //removes element from starting of the array
myArr.includes(1) //returns true since one exists in myArr
myArr.indexOf(9) //returns -1 since 9 is not there in myArr, otherwise it returns index of the element
const newArr = myArr.join() //returns array in string => 1, 2, 3, 4, 5
// SLICE , SPLICE
console.log("A " , myArr)
const myNewArr1 = myArr.slice(1,3) //Returns new array with elements from 1 to 2, does not include 3
const myNewArr2 = myArr.splice(1,3) //Returns part of array, removing the elements from existing array
const marvelHeroes = ["thor" , "ironman" , "spiderman"]
const dcHeroes = ["superman" , "flash" , "batman"]
marvelHeroes.push(dcHeroes) //pushes dcHeroes array as element at 3rd index
console.log(marvelHeroes[3][1]) //returns 3rd element of marvelHeroes and 1st element of array at index 3
const newHeroes = marvelHeroes.concat(dcHeroes) //concat returns new array, it combines both of them properly
const allNewHeroes = [...marvelHeroes, ...dcHeroes] //Uses spread operator (...), returns combined array of both
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity) //Spreads all different arrays inside arrays into one array, flat(here you write the level upto what you want arrays to spread, hack is to use infinity although not recommended but it spreads all array levels into one base array)
Array.isArray() //CHECKS IF (INPUT) IS ARRAY
Array.from() //Makes an array from (input) for example from("hitesh") => ['h' ,'i', 't', 'e', 's', 'h']
Array.from({name : "yash"}) // INTERESTING //returns empty array because it cannot directly convert this into array, need to specify if we want array from keys or values
Array.of() //returns arrays of (elements)
