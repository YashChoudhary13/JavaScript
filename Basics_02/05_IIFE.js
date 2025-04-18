//Immediately Invoked Function Expression

//Sometimes we want global variables to not create problems in local scope inside a function

function chai(){
    console.log("DB Connected")
}
chai()

//To invoke IIFE in the function above, we do:
(function chai(){
    console.log("DB Connected")
})(); //Basically (Function code)(Second one used for execution, like we use it in chai()) so : (() => {console.log("DB CONNECTED")})()
//To prevent pollution from global variables and immediately excuting function we use IIFE
// REMEMBER AFTER IIFE we need to use ; to let the function know where to stop the immediate invokation
//To pass variables in IIFE :

((name) => {console.log(`My name is ${name}`)})("Yash"); //In second bracket we pass the Arguments and in first bracket we pass the Parameters

//FOUNDATION - HOW CODE EXECUTES IN JAVASCRIPT
//JAVASCRIPT EXECUTION CONTEXT
//JS Runs your code in two phases - MEMORY CREATION PHASE and EXECUTION PHASE
//Difference : In memory phase, only memory allocation is done to the program, variables
//First, Global execution context is always made
// JS is single threaded, everything is a process
// Function Execution Context
// Eval Execution Context => Property of Global object