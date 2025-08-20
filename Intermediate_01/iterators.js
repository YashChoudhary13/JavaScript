// for loop

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
// while loop

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Output: 0 1 2 3 4

// do-while loop
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// Output: 0 1 2 3 4

//for in loop
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key, obj[key]);
}
// Output: a 1, b 2, c 3 WORKS WELL FOR OBJECTS, WORKS FOR ARRAYS TOO BUT NOT FOR MAPS

// for of loop - loops over iterable objects like arrays, strings, maps etc
const arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}
// Output: 10 20 30

// ARRAY METHODS as loops
//forEach()
const arr = [1, 2, 3];
arr.forEach((val, index) => {
    console.log(val, index);
});
// Output: 0 1, 1 2, 2 3
// map() – “transform each element”
const arr = [1, 2, 3];
const doubled = arr.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
console.log(arr);     // [1, 2, 3] (original array unchanged)

// filter() – “pick elements that pass a condition”
const arr = [1, 2, 3, 4];
const evens = arr.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce() – “combine array into a single value”
Iterates and accumulates a single value using a callback.
Signature: (accumulator, currentValue) => newAccumulator.
    0 at the end → initial value of accumulator.
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10
