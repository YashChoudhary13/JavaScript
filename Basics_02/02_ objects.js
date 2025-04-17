//You can define objects in two ways, 
//One as Literals, One as Constructors
//Singleton => Can be made only using Constructors
//Object Literals
const mySym = Symbol("key1")
const jsUser = {
    name : "Yash",
    "full name" : "Yash Choudhary",
    [mySym] : "mykey1", //syntax to refer symbol
    age : 21,
    location : "Jaipur"
} //Key : Value pairs exist in Objects

console.log(jsUser.name) //Can access keys written normally but to access keys written inside "" you need to use:
console.log(jsUser["full name"]) //This was used because key consisted space and had to be written in " "
console.log(jsUser[mySym]) //Only way to log symbol
jsUser.name = "yash2" //Way to overwrite key
Object.freeze(jsUser) //freezes, prevents any changes in object
jsUser.greeting = function(){  //To add function in our object
    console.log("Hello JS User!")
}
console.log(jsUser.greeting()) //To access our function of object, remember while accessing method we have to use () after function name.
//If we had used only .greeting then we would have gotten function return back, function did not execute, but reference to it has been returned
jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`) //this is used to reference the same object
}
