//Immediately Invoked Function Expression
//Sometimes we want global variables to not create problems in local scope inside a function

function chai(){
    console.log("DB Connected")
}
chai()
// This is how we normally do function call, and these functions are hoisted since its a function declaration but in case we want a function to be executed immediately
// then we invoke IIFE, which converts the declaration into expression by adding () and then executes it immediately by adding another () in the end
    
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
//Difference : In memory phase, only memory allocation is done to the program, variables, IT IS NOT EXECUTED

//First, Global execution context is always made which is referred to this variable
//In browser, this value has window as global execution context
// JS is single threaded, everything is a process
// Function Execution Context
// Eval Execution Context => Property of Global object

//STEP 1 : GLOBAL EXECUTION phase, is assigned to this keyword
//STEP 2: MEMORY PHASE, all variables are named and kept in memory as undefined and functions are kept as definations
// FIRST CYCLE DONE
//STEP 3: EXECUTION PHASE, assigns all values to respective variables, method calls have their own execution context which creates their own new variable environment and execution thread. 
// When new executional context is created, it has its own MEMORY PHASE and EXECUTION PHASE
//STEP 4: After method has run and its work is done, the new executional context is DELETED

//CALL STACK 
/*  |two()  | LIFO = LAST IN FIRST OUT
    |one()  |
    |_______|
    |G.exec |
    |_______| */
