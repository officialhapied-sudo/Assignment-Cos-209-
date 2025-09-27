//array spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // Spread operator to copy arr1 and add new elements
console.log(arr2); // This will output [1, 2, 3, 4, 5, 6]

//object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 }; // Spread operator to copy obj1 and add new properties
console.log(obj2); // This will output { a: 1, b: 2, c: 3, d: 4 }

// Rest parameters in functions
function sum(...numbers) { // 'numbers' is an array of all arguments passed
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // This will output 6
console.log(sum(4, 5, 6, 7)); // This will output 22

// Combining arrays
const arr3 = [7, 8, 9];
const combinedArray = [...arr1, ...arr3]; // Combining arr1 and arr3 using spread operator
console.log(combinedArray); // This will output [1, 2, 3, 7, 8, 9]

// spread in function calls
const nums = [10, 20, 30];
console.log(Math.max(...nums)); // This will output 30, spreading the array into individual arguments