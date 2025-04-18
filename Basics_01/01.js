console.log("Yash"); //console.log to print something on console
const accountId = 144553; //camelCase is good for variable names, const keyword prevents any changes on variable.
let accountEmail = "yashchoudhary13@outlook.com"; // Two types to define a variable, var and let but in modern age let is preferred because it solves the scope problems of defining a variable in javascript
var accountPassword = "yashpassword"; //Prefer not to use
accountCity = "Jaipur"; // This is not a good way but variable can be declared this way
let accountState; //undefined

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); //Prints data in tabular presentation

// JAVASRIPT IS DYNAMICALLY TYPED LANGUAGE, This means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them