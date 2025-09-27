const numbers = [1, 2, 3, 4, 5];
//map: Transforms each element in the array and returns a new array
const doubled = numbers.map(num => num * 2);
console.log('Log: ', doubled); // This should output [2, 4, 6, 8, 10]

//filter: Filters elements based on a condition and returns a new array
const evenNumbers = numbers.filter(num => num % 2 === 0); // We use "===" for strict equality check instead of "=="
console.log('Log: ', evenNumbers); // This should output [2, 4]

//reduce: Reduces the array to a single value based on a reducer function
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // Initial value of accumulator is 0
console.log('Log: ', sum); // This should output 15

//find: Finds the first element that satisfies a condition
const firstEven = numbers.find(num => num % 2 === 0);
console.log('Log: ', firstEven); // This should output 2

//forEach: Executes a provided function once for each array element
numbers.forEach(num => console.log(num)); // This should output each number in the array on a new line