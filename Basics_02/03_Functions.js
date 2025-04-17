//Functions in simple words helps you to package a code and enables you to use that package as many times needed
function sayMyName() {  //syntax
    console.log("Y")
    console.log("A")
    console.log("S")
    console.log("H")
}

sayMyName //reference
sayMyName() //execution

//Basic Funtion
function sumOfTwoNumbers(number1, number2){  //No need to define type of numbers
    console.log(number1 + number2)
    return number1 + number2
    //after return has been used, code will move out of function scope and no code will be executed below it
}
sumOfTwoNumbers(1, 2) //returns 3
sumOfTwoNumbers(3, "4") //returns 34
//sumOfTwoNumbers(3, "a") OR sumOfTwoNumbers(3, null) will give errors
//Here inputs like number1 and number2 are called parameters, and when you call function and pass values that are called arguments
const result = sumOfTwoNumbers(5,6)
console.log(result)

//Other ways to pass values:
function loginUserMessage(username){
    return `${username} just logged in!`
}
let message = loginUserMessage("yash")
console.log(message)
//If we did not pass any value in function we get UNDEFINED, not NULL
// username === undefined or !username is the same thing
// If we want some default value to pass if user does not pass, then we can do function(username = "sam"), and sam will be replaced is user defines value. 

//When making a shopping cart, we don't know how many items will be added, for it, we'll do:
//REST Operator (...) looks same as spread operator but depends on usecase
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200 , 400 , 500)) //Adds all arguments in array
function calculateCartPrice1(val1, val2, ...num1){ //200 => val1, 400 => val2, rest goes into num1 array
    return num1
}

//HOW TO PASS OBJECT TO A FUNCTION
const user = {
    username : "yash",
    price: 199
}
function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
handleObject({username : sayMyName, price : 399}) //can pass object directly too

const myNewArr = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[2]
}
