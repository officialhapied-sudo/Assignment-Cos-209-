//Basic Arrow Function
const add = (a, b) => a + b; // Notice that instead of the use of "{}" and return keyword, we can directly return the result in a single line
console.log(add(2, 3)); 
// This should output 5

//Arrow Function with block body
const multiply = (a, b) => {
    const result = a * b;
    return result; // Here we need to use the return keyword because we are using a block body
}
console.log(multiply(2, 3)); 
// This should output 6

// Lexical this in Arrow Functions
const counter = {
    count: 0,
    increment: function() {
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
}

counter.increment(); // This should output 1 after 1 second

// Arrow in array callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2); // Using arrow function in map method
console.log(doubled); 
// This should output [2, 4, 6, 8, 10]