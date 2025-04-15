const score = 400 //returns simply a number
const balance = new Number(100) //returns object [Number : 100]
console.log(balance)
console.log(balance.toString().length); //returns 3
console.log(balance.toFixed(2)) //IMPORTANT, fixes precision value, returns 100.00
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) //rounds off upto 3 digits => 23.9
const hundreds = 10000000
console.log(hundreds.toLocaleString()) // returns 10,000,000, based on American number system, to do it based on IN, we use ('en-IN')

//********************** MATHS */
console.log(Math.abs(-4)) //returns 4, converts negative value to positive and positive remains positive
console.log(Math.round(4.3)) //return 4
console.log(Math.ceil(4.3)) //returns 5
console.log(Math.floor(4.9)) //returns 4
console.log(Math.min(4, 3, 5, 6)) //returns 3
console.log(Math.max(4, 3, 5, 6)) //returns 6
console.log(Math.random())