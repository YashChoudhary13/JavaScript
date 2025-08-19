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

// ************************************ SINGLETON / DECLARE USING CONSTRUCTOR *********************************************
const appUser = new Object()
appUser.id = "123abc"
appUser.name = "Yash"
appUser.isLoggedIn = false
console.log(appUser)

const regularUser = {
    email : "yashchoudhary13@outlook.com",
    fullName : {
        username : {
            firstName : "Yash",
            lastName : "Choudhary"
        }
    }
}
console.log(regularUser.fullName.username.firstName)
console.log(regularUser.fullName?.username.lastName) // We can write a ? in front of fullName to tell the code to proceed only if fullName exists or else stop
const obj1 = {
    1 : 'a',
    2 : 'b',
    3 : 'c'
}
const obj2 = {
    4 : 'a',
    5 : 'b',
    6 : 'c'
}
const obj3 = Object.assign(obj1, obj2) //Returns an object having both objects combined but the recommended way to write is:
const obj4 = Object.assign({} , obj1 , obj2) //{} is a target and obj1, obj2 are source from which we create target. !GOOD PRACTICE
const obj5 = {...obj1, ...obj2} //Uses spread operator to combine two objects, best to use
console.log(Object.keys(appUser)) //Returns array of keys of object appUser, to return values we use Object.values(appUser)
console.log(appUser.hasOwnProperty('isLoggedIn')) //Returns true or false depending on if appUser has isLoggedIn property or not

//DESTRUCTURING OBJECTS
const course = {
    courseName : "JS",
    price : 999,
    courseInstructor : "Hitesh"
}
//If we have to print some key again and again :
const{courseInstructor : instructor} = course //now we can access courseInstructor/instructor directly
/* "Take the property courseInstructor from course
and store it in a new variable named instructor." */
console.log(instructor) // returns course.courseInstructor which is "Hitesh"

//APIs
//Jab bhi apna kaam kisi aur ke upar dalte hai
// API return is recieved in JSON
//JSON is basically object with keys in " " and unlike objects it does not have name
// {
//     "name" : "Yash",
//     "age" : 21,
//     "bored" : true
// }
// How to use fetch in API calls, basically you go to api calls and convert the JSON to object and get values
//JSON can be obtained as arrays containing objects too
