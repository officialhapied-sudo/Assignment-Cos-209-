// export functions for basic arithmetic operations
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const square = (x) => x * x;
export const cube = (x) => x * x * x;
export const subtract = (a, b) => a - b;
export const divide = (a, b) => a / b;
// export an array to keep track of calculation history
let history = [];

export const logoperation = (operation, a, b, result) => {
    const entry = `${operation}(${a}, ${b}) = ${result}`;
    history.push(entry);
    console.log('Log: ', entry);
}
export const getHistory = () => history;
export const clearHistory = () => { history = []; };