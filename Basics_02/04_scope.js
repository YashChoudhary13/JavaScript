// let var and const
if (true) {
    let a = 10
    const b = 20
    var c = 30
}
console.log(a) // Not defined, which is good, has different value in block scope and global scope
console.log(b) // Not defined, since it is inside a scope
console.log(c) //prints / updates variable and is not limited by block scope which is not good
 

// {} => scope, It is known as scope when it is seen with functions, if else, for, loops but for objects its a declaration
// global scope is different when you run using node in editors compared to console of browsers
// If there is local scope inside block scope then :
//ALSO KNOWN AS NESTED SCOPE

function one(){
    const username = "yash"

    function two(){
        const website = "www.themex.com"
        console.log(username)
    } //Inner variable is local, can't be accessed outside but the variables outside can be accessed inside
    console.log(website)
    two()
}
one()

// IMPORTANT :
addOne(5) //will return 6
function addOne(num){
    return (num+1)
}

addTwo(5) //Will return error
const addTwo = function(num){  //Second way of declaring functions
    return num + 2
}

//The problem occurs because of the way we declare functions, In second way while declaring the function we also holded it in a variable
//There's a concept called hoisting, how does JS treat variables, create a tree where all variables are kept
// The difference in two are : declaration, in first you can use before declaring but in second you can't

//Arrow Function and THIS Keyword
const user = {
    username : "Yash",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`) //when we are referring to current context, we use this
        console.log(this) //prints current context
    }
}

user.welcomeMessage //will return reference
user.welcomeMessage() //yash, welcome to website
user.username = "sam"
user.welcomeMessage() //sam, welcome to website, this happened because of using this keyword

console.log(this) //prints empty context because we are in node environment, because there is nothing in global context BUT in browser when we do the same thing we get Window{} I.E :
//IN BROWSER WE HAVE WINDOW OBJECT AS GLOBAL OBJECT, because of which we can capture window movements

function chai(){
    let username = "yash"
    console.log(this.username) //when we print this inside a function we get various values. 
    //In function when we use this.username or some variable we get undefined
}
chai()

//ARROW FUNCTIONS

const coffee =  () => {
    console.log("Coffee <<< Chai")
} //When we use this inside arrow function we get empty object

() => {} //Basic arrow function which you can hold under a variable
const addTwo2 = (num1, num2) => {
    return num1 + num2
}
//We can use it as IMPLICIT RETURN :
const addTwo3 = (num1, num2) => num1 + num2
const addTwoX = (num1, num2) => {username : "yash"} //You can't return object like this
const addTwoXX = (num1, num2) =>( {username : "yash"} )//You can return object like this
const addTwo4 = (num1, num2) => (num1 + num2) //If we use {} we need to write return, if we use () we don't need to write return
//IMPORTANT FOR REACT

const myArray = [1, 4, 5, 6, 7]
myArray.forEach(() => {})
myArray.forEach(function(){})
// myArray.forEach(() => ())
