//Dates

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate) //object
let myCreatedDate = new Date(2023, 0 , 23) //2023 -> year, 0 -> January, months start from 0 in this format, 23 -> day
let myCreatedDate2 = new Date(2023, 0 , 23, 5, 3) //After day, 5 -> hours, 3 -> minutes
let myCreatedDate3 = new Date("04-16-2025") // Can define date in normal manner too
console.log(myCreatedDate3)

let myTimeStamp = Date.now() //Gives output in miliseconds since 01 January 1970 to current date
console.log(myTimeStamp)
console.log(myCreatedDate3.getTime()) //Gives output in milliseconds since 01 January 1970 to the date defined
console.log((myTimeStamp - (myCreatedDate3.getTime())) / (60000)) //Difference between current date and desired date in minutes

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) //Since months start from 0, we do +1 to not confuse users
console.log(newDate.getDay())
console.log(newDate.toLocaleString('default' , {
    dateStyle : "full",
    timeZone : "Asia/Kolkata"
}))
